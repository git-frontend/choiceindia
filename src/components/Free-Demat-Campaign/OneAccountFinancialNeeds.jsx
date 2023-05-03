
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";


function OneAccountFinancialNeeds() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 4,
    autoplay: false,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function chapterScroll2(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <section className="one-ac-financial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-secnd text-center">One Account for All Your <span>Financial Needs</span></h2>
            </div>
          </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="main-services-list">
                    <Slider {...settings} className="services-list-slider">
                      <div className="carditem-nbfc">
                        <span className="cardimg">
                        <svg width="49" height="41" viewBox="0 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M38.8071 3.76256C38.1727 3.12871 37.5787 2.53532 36.9848 1.95542C36.6744 1.65872 36.4989 1.33505 36.6879 0.916981C36.8498 0.525882 37.2008 0.431479 37.6057 0.417993C40.6968 0.283131 43.8013 0.148269 46.8924 0.0134076C47.7562 -0.0270509 48.0397 0.242673 47.9992 1.0923C47.8642 4.22109 47.7157 7.34989 47.5808 10.4652C47.5673 10.8698 47.4323 11.1934 47.0273 11.3418C46.6494 11.4767 46.3389 11.3283 46.069 11.0586C45.2321 10.209 44.3817 9.37281 43.5179 8.5097C41.4122 10.0876 39.347 11.6385 37.2683 13.1894C31.1132 17.8017 24.9581 22.4139 18.803 27.0397C18.7086 27.1071 18.6141 27.1881 18.5196 27.2555C17.9527 27.6601 17.5747 27.6196 17.1293 27.0667C14.9966 24.4369 12.8774 21.8071 10.7447 19.1773C9.98885 18.2467 9.24646 17.3162 8.49058 16.3856C8.38259 16.2508 8.26111 16.1024 8.12613 15.9541C6.38489 17.4915 4.68414 18.9885 2.9834 20.4854C2.78093 20.6607 2.60545 20.89 2.36249 20.9979C2.10603 21.1193 1.75508 21.2406 1.53911 21.1328C1.30965 21.0249 1.14767 20.6877 1.02619 20.4045C0.945201 20.2292 1.01269 20.0134 1.01269 19.8111C1.01269 17.9905 1.02619 16.1698 1.01269 14.3627C1.01269 13.8233 1.18817 13.4456 1.5931 13.095C3.55031 11.3957 5.48053 9.66951 7.42424 7.95676C8.15313 7.30943 8.49058 7.3364 9.08449 8.07814C11.9461 11.5845 14.8076 15.091 17.6692 18.6108C17.7907 18.7727 17.9257 18.921 18.0876 19.1233C24.9986 14.0121 31.8826 8.91428 38.8071 3.77605V3.76256Z" fill="white"/>
                          <path d="M39.7928 27.431C39.7928 23.6683 39.7928 19.8922 39.7928 16.1295C39.7928 15.199 40.0223 14.9697 40.9536 14.9697C42.6409 14.9697 44.3281 14.9697 46.0019 14.9697C46.7983 14.9697 47.0682 15.2395 47.0682 16.0351C47.0682 23.6683 47.0682 31.315 47.0682 38.9481C47.0682 39.7438 46.7983 40.0136 46.0019 40.0136C44.2876 40.0136 42.5599 40.0136 40.8456 40.0136C40.0493 40.0136 39.7793 39.7438 39.7793 38.9481C39.7793 35.1181 39.7793 31.2745 39.7793 27.4444L39.7928 27.431Z" fill="white"/>
                          <path d="M9.07229 31.9756C9.07229 34.2952 9.07229 36.6149 9.07229 38.948C9.07229 39.7436 8.80233 39.9999 8.00595 40.0134C6.29171 40.0134 4.56396 40.0134 2.84972 40.0134C2.05334 40.0134 1.79688 39.7436 1.79688 38.948C1.79688 34.2683 1.79688 29.5886 1.79688 24.9089C1.79688 24.1132 2.06683 23.8569 2.86322 23.8569C4.57746 23.8569 6.3052 23.8569 8.01945 23.8569C8.81583 23.8569 9.07229 24.1267 9.08579 24.9223C9.08579 27.2824 9.08579 29.629 9.08579 31.9891L9.07229 31.9756Z" fill="white"/>
                          <path d="M34.9473 31.9217C34.9473 34.2548 34.9473 36.6014 34.9473 38.9345C34.9473 39.7302 34.6773 39.9865 33.8809 39.9999C32.1667 39.9999 30.439 39.9999 28.7247 39.9999C27.9283 39.9999 27.6719 39.7302 27.6719 38.9345C27.6719 34.2548 27.6719 29.5751 27.6719 24.8954C27.6719 24.0997 27.9418 23.8435 28.7382 23.8435C30.4525 23.8435 32.1802 23.8435 33.8944 23.8435C34.6908 23.8435 34.9473 24.1132 34.9608 24.9089C34.9608 27.242 34.9608 29.5886 34.9608 31.9217H34.9473Z" fill="white"/>
                          <path d="M22.002 35.2124C22.002 36.4801 22.002 37.7343 22.002 39.002C22.002 39.7302 21.7185 40.0135 20.9896 40.0135C19.2349 40.0135 17.4802 40.0135 15.7389 40.0135C15.01 40.0135 14.7266 39.7302 14.7266 39.002C14.7266 36.4396 14.7266 33.8907 14.7266 31.3284C14.7266 30.6001 15.01 30.3169 15.7389 30.3169C17.4937 30.3169 19.2484 30.3169 20.9896 30.3169C21.7185 30.3169 22.002 30.6001 22.002 31.3284C22.002 32.623 22.002 33.9177 22.002 35.2124Z" fill="white"/>
                          </svg>
                        </span>
                        <h5 className="card-ttl">Stocks</h5>
                      </div>
                      <div className="carditem-nbfc">
                        <span className="cardimg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.7741 42.9519C26.6615 43.5908 23.576 43.6179 20.3954 43.0878C20.3954 43.3325 20.3954 43.5228 20.3954 43.7131C20.3274 45.5345 18.8866 46.9753 17.0653 47.0296C16.3721 47.0432 15.6653 47.084 14.9856 47.0024C13.2322 46.785 12.0225 45.3578 11.9817 43.5228C11.9546 42.5442 11.941 41.5519 11.9817 40.5733C12.0089 39.9888 11.8186 39.6354 11.3293 39.2956C8.12151 36.9985 5.78363 34.0489 4.66906 30.2023C4.13895 28.3945 3.94866 26.546 4.17973 24.6702C4.2341 24.2081 4.15255 23.9362 3.69041 23.7188C3.25545 23.5149 2.87487 23.1887 2.41273 22.876C2.12729 23.2022 1.82826 23.5421 1.52922 23.8683C1.12145 24.3032 0.645721 24.3576 0.278728 24.0314C-0.0882652 23.6916 -0.11545 23.1751 0.333097 22.7809C1.17582 22.0605 1.33893 21.3809 0.849607 20.2935C0.183582 18.8119 0.319505 17.208 1.02631 15.7129C1.36612 14.9789 1.88262 14.3944 2.68457 14.1769C4.00303 13.8235 5.40304 14.9653 5.49819 16.4604C5.56615 17.3847 5.33508 18.2546 4.91372 19.0566C4.47876 19.8993 3.97585 20.7013 3.47293 21.5848C3.77196 21.8158 4.11177 22.0877 4.50595 22.3867C6.24577 16.6779 10.106 13.0352 15.2439 10.6973C16.0866 11.8526 16.8886 12.9536 17.6769 14.041C16.9293 14.3264 16.0866 14.6391 15.2439 14.9789C14.7138 15.1964 14.5235 15.6313 14.7138 16.0663C14.9041 16.5284 15.339 16.6507 15.9099 16.4604C17.0653 16.0663 18.1934 15.6041 19.376 15.3187C23.9022 14.2313 28.3469 14.4896 32.7101 16.1206C32.8052 16.1614 32.9004 16.2022 32.9955 16.2294C33.512 16.4061 33.9606 16.2294 34.1237 15.7808C34.2868 15.3595 34.0829 14.8973 33.58 14.7342C32.4518 14.3536 31.3236 14.0274 30.1955 13.674C30.1003 13.6468 30.0052 13.6196 29.9916 13.6196C30.7256 12.4235 31.446 11.241 32.2343 9.94971C33.0906 10.3031 34.0829 10.7245 35.0615 11.1322C35.1975 11.1866 35.3606 11.241 35.4693 11.3361C36.3392 12.0565 37.2091 11.9206 38.1742 11.5128C39.4655 10.9691 40.8111 10.5478 42.1296 10.072C42.5373 9.92252 42.9315 9.85456 43.2441 10.2216C43.5703 10.5885 43.448 10.9691 43.2713 11.3633C42.6597 12.6818 42.0616 14.0138 41.4228 15.3187C41.2596 15.6585 41.314 15.8488 41.5587 16.107C42.9451 17.5886 44.182 19.1789 44.7665 21.1634C44.8073 21.2993 45.0111 21.4352 45.1607 21.4896C45.6228 21.6527 46.1121 21.7479 46.5743 21.9246C47.4578 22.2508 47.9607 22.9168 47.9743 23.8411C48.015 25.3498 48.0014 26.8586 47.9743 28.3673C47.9607 29.346 47.2675 30.1479 46.316 30.3654C45.6772 30.5149 45.0111 30.6101 44.3723 30.7732C44.2228 30.814 44.0053 30.9771 43.9781 31.113C43.0674 34.4567 41.1781 37.0936 38.3917 39.1325C38.2557 39.2412 38.1606 39.4995 38.147 39.6898C38.1198 40.8315 38.147 41.9597 38.147 43.1014C38.1334 45.2898 36.6926 46.7306 34.5042 46.7442C33.9606 46.7442 33.4169 46.7714 32.8732 46.717C31.079 46.5267 29.8693 45.249 29.7333 43.4277C29.7333 43.3053 29.7062 43.1966 29.6926 42.9927L29.7741 42.9519ZM39.0985 24.2353C39.982 24.2353 40.716 23.5149 40.7295 22.6314C40.7295 21.7479 40.0227 21.0003 39.1392 20.9867C38.2286 20.9731 37.481 21.7071 37.481 22.6178C37.481 23.5013 38.215 24.2353 39.0985 24.2353ZM2.43991 19.9809C2.50787 19.9944 2.58943 20.0216 2.65739 20.0352C3.05157 19.1517 3.47293 18.2682 3.81274 17.3575C3.93507 17.0313 3.89429 16.61 3.79915 16.2701C3.74478 16.0663 3.45934 15.8216 3.24186 15.7808C3.06516 15.7536 2.76613 15.9575 2.65739 16.1478C1.9234 17.3847 1.96418 18.676 2.43991 19.9673V19.9809Z" fill="white"/>
                          <path d="M30.4918 4.90684C29.486 1.9573 26.7675 0 23.6549 0C20.4743 0 17.6607 2.05244 16.7228 5.06994C15.7849 8.11463 16.9403 11.4312 19.5772 13.2118C19.7947 13.3613 20.1209 13.47 20.3655 13.4156C22.6898 13.0079 25.0141 12.9399 27.352 13.1438C27.5831 13.171 27.8821 13.0622 28.0724 12.9127C30.519 11.0234 31.4705 7.80201 30.4782 4.89324L30.4918 4.90684ZM26.5365 6.15733C26.4957 6.15733 26.4549 6.15733 26.4141 6.15733H26.3869H26.0064C25.6937 6.15733 25.3675 6.15733 25.0413 6.15733C24.7966 7.12239 23.9403 7.78841 22.9209 7.80201C22.8258 7.80201 22.7306 7.80201 22.6355 7.80201L24.8782 10.0447C24.919 10.0855 24.9869 10.1535 25.0277 10.2214C25.1636 10.4525 25.1365 10.7108 24.9598 10.9011C24.851 11.0234 24.7015 11.0778 24.5656 11.0778C24.4297 11.0778 24.3617 11.0506 24.2665 10.9962C24.1986 10.9554 24.1442 10.9011 24.0898 10.8603H24.0762C24.0762 10.8467 23.016 9.7729 23.016 9.7729C22.3364 9.09328 21.6432 8.40007 20.9636 7.72045C20.8549 7.61171 20.6238 7.38064 20.7733 7.02724C20.9228 6.67384 21.2626 6.68743 21.4121 6.68743H21.5481C22.0102 6.68743 22.4995 6.68743 22.9617 6.68743C23.3287 6.68743 23.6685 6.48355 23.8452 6.17092H22.7714C22.2957 6.17092 21.8063 6.17092 21.3306 6.17092C21.1539 6.17092 20.9908 6.10296 20.882 5.99422C20.7733 5.88549 20.7325 5.74956 20.7325 5.58645C20.7325 5.27383 20.9908 5.05635 21.3306 5.04276C21.3578 5.04276 21.3986 5.04276 21.4257 5.04276H21.4665H23.8452C23.8316 5.01557 23.8044 4.98839 23.7908 4.96121C23.5733 4.67577 23.2879 4.52625 22.9209 4.52625H22.3092C22.0102 4.52625 21.7112 4.52625 21.4121 4.52625C21.317 4.52625 21.2219 4.52625 21.1131 4.48547C20.8549 4.40392 20.7053 4.18644 20.7325 3.9146C20.7597 3.64275 20.9364 3.45246 21.1947 3.41168C21.2626 3.41168 21.3442 3.41168 21.3986 3.41168H21.4257C23.084 3.41168 24.7559 3.41168 26.4141 3.41168H26.4413C26.4821 3.41168 26.5365 3.41168 26.5772 3.41168C26.8763 3.43886 27.0666 3.64275 27.0937 3.92819C27.1073 4.21363 26.9442 4.4311 26.6588 4.49907C26.5501 4.52625 26.4549 4.52625 26.3734 4.52625H26.3326C25.884 4.52625 25.4219 4.52625 24.9733 4.52625H24.8646C24.9598 4.68936 25.0277 4.86606 25.0821 5.04276C25.5714 5.04276 26.0471 5.04276 26.5365 5.04276C26.8491 5.04276 27.0938 5.27383 27.1073 5.57286C27.1209 5.88549 26.8899 6.13015 26.5636 6.15733H26.5365Z" fill="white"/>
                          </svg>

                        </span>
                        <h5 className="card-ttl">Mutual Funds</h5>
                      </div>
                      <div className="carditem-nbfc">
                        <span className="cardimg">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 46.9606V23.618C0.375685 22.804 1.01435 22.5786 1.89095 22.5786C16.6804 22.5911 31.4699 22.5911 46.2719 22.5911C47.4991 22.5911 48 23.1046 48 24.3318C48 31.6201 48 38.9209 48 46.2092C48 47.499 47.5116 47.9874 46.2218 47.9874C31.4448 47.9874 16.6679 47.9874 1.89095 48C1.01435 48 0.375685 47.762 0 46.9606ZM39.3843 35.2768C39.4093 35.2768 39.4344 35.2768 39.4594 35.2768C39.4594 34.2624 39.4845 33.2481 39.4594 32.2337C39.3843 29.9921 37.4808 28.2014 35.2142 28.2139C32.9851 28.2264 31.0942 30.0422 31.0441 32.2588C31.0065 34.2374 31.0065 36.2285 31.0441 38.2071C31.0817 40.3235 32.7973 42.0892 34.9136 42.2645C37.055 42.4273 39.0712 40.9496 39.3592 38.8207C39.5095 37.6561 39.3843 36.4539 39.3843 35.2768ZM22.5912 36.6418C23.1672 36.6418 23.6807 36.6543 24.1941 36.6418C26.3105 36.5666 28.0762 34.8385 28.2139 32.7346C28.3517 30.5932 26.8865 28.6146 24.7827 28.3266C23.6306 28.1638 22.4534 28.2389 21.2763 28.2264C20.3621 28.2264 19.7861 28.815 19.7861 29.7291C19.7861 30.4805 19.7861 31.2319 19.7861 31.9833C19.7861 34.9011 19.7861 37.8189 19.7861 40.7367C19.7861 41.3503 19.999 41.8387 20.5625 42.1267C21.5017 42.6151 22.5912 41.9514 22.6037 40.8494C22.6162 39.4719 22.6037 38.1069 22.6037 36.6668L22.5912 36.6418ZM14.1884 39.4594V31.019C14.6267 31.019 15.0274 31.019 15.4406 31.019C16.3423 31.019 16.981 30.4179 16.9684 29.6039C16.9684 28.8025 16.3298 28.2139 15.4532 28.2139C13.6624 28.2139 11.8591 28.2139 10.0684 28.2139C9.16671 28.2139 8.52805 28.8025 8.54057 29.629C8.54057 30.443 9.17923 31.019 10.0934 31.0315C10.5067 31.0315 10.9199 31.0315 11.3206 31.0315V39.4719C10.8573 39.4719 10.4315 39.4719 9.99322 39.4719C9.15419 39.4844 8.54057 40.0855 8.52805 40.8619C8.52805 41.6509 9.14166 42.2645 9.96817 42.277C11.8216 42.277 13.6875 42.277 15.5408 42.277C16.3423 42.277 16.9434 41.6509 16.9559 40.887C16.9559 40.098 16.3548 39.4844 15.5158 39.4719C15.0775 39.4719 14.6392 39.4719 14.1758 39.4719L14.1884 39.4594Z" fill="white"/>
                          <path d="M44.0549 0C44.8689 0.375685 45.1069 1.01435 45.0943 1.89095C45.0693 7.6264 45.0818 13.3493 45.0818 19.0848C45.0818 24.8202 45.0818 19.448 45.0818 19.6608H36.6414V19.1349C36.6414 13.3869 36.6414 7.63893 36.6289 1.89095C36.6289 1.01435 36.8668 0.375685 37.6683 0H44.0424L44.0549 0Z" fill="white"/>
                          <path d="M33.8369 19.6609H25.4215C25.4215 19.5106 25.3965 19.3603 25.3965 19.2101C25.3965 15.2278 25.3965 11.2456 25.3965 7.26329C25.3965 6.16128 25.935 5.6228 27.0245 5.6228C28.7526 5.6228 30.4933 5.6228 32.2214 5.6228C33.2608 5.6228 33.8243 6.17381 33.8243 7.20068C33.8243 11.233 33.8243 15.2529 33.8243 19.2852C33.8243 19.3979 33.8243 19.4981 33.8243 19.6609H33.8369Z" fill="white"/>
                          <path d="M14.1629 19.6483C14.1629 17.2564 14.1504 14.9021 14.1629 12.5478C14.1629 11.834 14.7765 11.258 15.5154 11.2455C17.4188 11.233 19.3223 11.233 21.2258 11.2455C21.9521 11.2455 22.5657 11.8215 22.5783 12.5478C22.6033 14.9021 22.5783 17.2564 22.5783 19.6483H14.1504H14.1629Z" fill="white"/>
                          <path d="M11.3339 19.6609H2.93108C2.93108 19.0973 2.88099 18.5463 2.9436 17.9953C3.03126 17.3567 3.59479 16.8808 4.2585 16.8683C6.16197 16.8558 8.06544 16.8558 9.96891 16.8683C10.7203 16.8683 11.2963 17.4569 11.3339 18.2082C11.3589 18.6716 11.3339 19.1474 11.3339 19.6609Z" fill="white"/>
                          <path d="M36.6536 35.2519C36.6536 36.1535 36.6536 37.0552 36.6536 37.9693C36.6536 38.8334 36.0525 39.4595 35.251 39.4721C34.4496 39.4721 33.8485 38.8459 33.8359 37.9818C33.8359 36.1535 33.8359 34.3377 33.8359 32.5094C33.8359 31.6453 34.4496 31.0192 35.251 31.0317C36.0274 31.0317 36.6285 31.6578 36.6411 32.4968C36.6411 33.411 36.6411 34.3377 36.6411 35.2519H36.6536Z" fill="white"/>
                          <path d="M22.6172 31.0314C23.1181 31.0314 23.5689 31.0189 24.0197 31.0314C24.8087 31.0565 25.4098 31.6826 25.3973 32.4465C25.3973 33.1854 24.7962 33.799 24.0323 33.8366C23.5689 33.8616 23.1056 33.8366 22.6172 33.8366V31.0314Z" fill="white"/>
                          </svg>

                        </span>
                        <h5 className="card-ttl">IPO</h5>
                      </div>
                      <div className="carditem-nbfc">
                        <span className="cardimg">
                        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0200553 12.5453C0.0200553 11.5074 -0.0250692 10.4846 0.0200553 9.44676C0.0802213 8.37882 0.681881 7.68691 1.67462 7.31087C6.14194 5.62622 10.6243 3.95662 15.0916 2.27197C16.9568 1.58006 18.8069 0.87311 20.657 0.16616C21.2887 -0.0745042 21.8904 -0.0444212 22.5221 0.196243C28.6891 2.51263 34.8562 4.84406 41.0533 7.13037C42.4822 7.65682 43.129 8.55931 43.1741 10.0635C43.2944 14.967 42.768 19.7953 41.4895 24.5334C39.8499 30.6703 37.0673 36.1905 32.615 40.7932C29.727 43.7865 26.3427 46.0728 22.5522 47.7875C21.8152 48.1185 21.0781 48.0432 20.3261 47.6973C10.5792 43.1397 4.74308 35.3933 1.80999 25.2253C0.651798 21.1039 0.0802213 16.8622 0.0200553 12.5453ZM20.8375 24.1423C20.296 23.5858 19.7996 23.0744 19.3033 22.5629C18.8069 22.0515 18.3105 21.5401 17.7841 21.0588C16.7913 20.1112 15.3323 20.1262 14.3997 21.0588C13.4521 22.0064 13.4371 23.4654 14.3997 24.4431C15.9941 26.0676 17.5885 27.662 19.213 29.2564C20.1907 30.2191 21.6347 30.2341 22.5973 29.2564C26.0569 25.6615 29.5014 22.0515 32.9459 18.4416C33.4423 17.9302 33.6528 17.2834 33.5626 16.5764C33.4423 15.5837 32.9008 14.8617 31.9381 14.5458C30.9755 14.23 30.1181 14.4556 29.4111 15.1776C27.6663 16.9826 25.9366 18.8026 24.1917 20.6226C23.0937 21.7657 21.9957 22.9239 20.8224 24.1423H20.8375Z" fill="white"/>
                        </svg>

                        </span>
                        <h5 className="card-ttl">Insurance</h5>
                      </div>
                      <div className="carditem-nbfc">
                        <span className="cardimg">
                        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0200553 12.5453C0.0200553 11.5074 -0.0250692 10.4846 0.0200553 9.44676C0.0802213 8.37882 0.681881 7.68691 1.67462 7.31087C6.14194 5.62622 10.6243 3.95662 15.0916 2.27197C16.9568 1.58006 18.8069 0.87311 20.657 0.16616C21.2887 -0.0745042 21.8904 -0.0444212 22.5221 0.196243C28.6891 2.51263 34.8562 4.84406 41.0533 7.13037C42.4822 7.65682 43.129 8.55931 43.1741 10.0635C43.2944 14.967 42.768 19.7953 41.4895 24.5334C39.8499 30.6703 37.0673 36.1905 32.615 40.7932C29.727 43.7865 26.3427 46.0728 22.5522 47.7875C21.8152 48.1185 21.0781 48.0432 20.3261 47.6973C10.5792 43.1397 4.74308 35.3933 1.80999 25.2253C0.651798 21.1039 0.0802213 16.8622 0.0200553 12.5453ZM20.8375 24.1423C20.296 23.5858 19.7996 23.0744 19.3033 22.5629C18.8069 22.0515 18.3105 21.5401 17.7841 21.0588C16.7913 20.1112 15.3323 20.1262 14.3997 21.0588C13.4521 22.0064 13.4371 23.4654 14.3997 24.4431C15.9941 26.0676 17.5885 27.662 19.213 29.2564C20.1907 30.2191 21.6347 30.2341 22.5973 29.2564C26.0569 25.6615 29.5014 22.0515 32.9459 18.4416C33.4423 17.9302 33.6528 17.2834 33.5626 16.5764C33.4423 15.5837 32.9008 14.8617 31.9381 14.5458C30.9755 14.23 30.1181 14.4556 29.4111 15.1776C27.6663 16.9826 25.9366 18.8026 24.1917 20.6226C23.0937 21.7657 21.9957 22.9239 20.8224 24.1423H20.8375Z" fill="white"/>
                          </svg>

                        </span>
                        <h3 className="card-ttl">Insurance</h3>
                      </div>
                    </Slider>
                  </div>
              </div> 
        </div>
            <div className="row">
            <div className="col-md-12">
             <div className="btn-open">
                    <a onClick={()=>{chapterScroll2('dematform')}} class="cursor-pointer"><span class="btn-bg">Open My Account</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default OneAccountFinancialNeeds;
