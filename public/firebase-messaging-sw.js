if ("function" === typeof importScripts) {
  importScripts(
    "https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js"
  );

  self.addEventListener("notificationclick", function (event) {
    const urlToOpen =
      ["marketCloseAlert", "morningAlert"].indexOf(
        event.notification.data.notification_type
      ) == -1
        ? event.notification.data.action_url
        : ""; // urlToOpen should be blank string in case of morningAlert and marketCloseAlert (17/06/2021)
    const domain = location.origin;
    const promiseChain = clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((windowClients) => {
        // alert('received');
        let matchingClient = windowClients.filter((client) => {
          return client.url == domain + urlToOpen;
        });
        if (matchingClient && matchingClient[0]) {
          return activeClient.focus();
        } else {
          // console.debug('onnotificationClick', event);
          let userCode = (
            localStorage.getItem("ng2-webstorage|usercode") || ""
          ).replace(/\"/g, "");
          if (!userCode || userCode == "guest") {
            localStorage.setItem("fromUrl", urlToOpen);
            return clients.openWindow(domain);
          } else if (
            (urlToOpen.indexOf("stratezy") > -1 ||
              urlToOpen.indexOf("research-report/research") > -1) &&
            (!userCode || userCode == "guest")
          ) {
            localStorage.setItem("fromUrl", urlToOpen);
            return clients.openWindow(domain);
          } else if (
            urlToOpen.indexOf("stratezy") > -1 &&
            userCode &&
            userCode != "guest"
          ) {
            return clients.openWindow(urlToOpen);
          } else if (
            urlToOpen.indexOf("mf.choiceindia") > -1 ||
            urlToOpen.indexOf("uatmf.choicetechlab") > -1 ||
            urlToOpen.indexOf("my-holdings") > -1
          ) {
            if (!userCode || userCode == "guest") {
              localStorage.setItem("fromUrl", urlToOpen);
              return clients.openWindow(domain, "_self");
            }
            let UserName = (
              localStorage.getItem("ng2-webstorage|mfClientId") || ""
            ).replace(/\"/g, "");
            let Session = (
              localStorage.getItem("ng2-webstorage|sessionId") || ""
            ).replace(/\"/g, "");
            let ClientId = (
              localStorage.getItem("ng2-webstorage|userId") || ""
            ).replace(/\"/g, "");
            let callbackUrl = location.origin + "/post/portfolio/holdings";
            let redirectUrl =
              urlToOpen.indexOf("my-holdings") > -1 ? "user/my-holdings" : "/";
            let onboardFlag = "C";
            let mfBaseUrl =
              location.hostname.indexOf("finx.choiceindia.com") > -1
                ? "https://mf.choiceindia.com"
                : "https://uatmf.choicetechlab.com";
            let url =
              mfBaseUrl +
              "/auto-login" +
              "?UserName=" +
              UserName +
              "&Session=" +
              Session +
              "&ClientId=" +
              ClientId +
              "&callbackUrl=" +
              callbackUrl +
              "&redirectUrl=" +
              redirectUrl +
              "&onboardFlag=" +
              onboardFlag;
            return clients.openWindow(url, "_self");
          } else {
            localStorage.setItem("fromUrl", urlToOpen);
          }
          return clients.openWindow(domain + urlToOpen);
        }
      });
    event.waitUntil(promiseChain);
    event.notification.close();
  });
}
