import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import StarImg from '../../assets/images/starrating.svg';



function MFTestimonials() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 1,
    autoplay: true,
    dots: false,
    fade:false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          adaptiveHeight: true,
        },
      },
    ],
  };
 

  return (
    <div>
      <section className="mf-testimonial">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="title-first"><span>निवेशक <br/> हमारे बारे में क्या कहते हैं </span></h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="mf-testimonial-slider">
                        <Slider {...settings} className="testi-slider">
                          <div className="sl-item">
                                
                                <h3>संचिता रॉय</h3>
                                <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid img-star" />
                                <p>यह एक उपयोगकर्ता के अनुकूल होने के साथ-साथ इंटरेक्टिव ऐप है जो आपको हाल के बाजार के रुझानों के बारे में जानने में मदद करता है जो आपको वेरिएंट प्रदान करते हैं। यह शुरुआती लोगों के लिए भी उपयुक्त है। यह आपके लिए सही निवेश चुनने के आपके कठिन काम को आसान बनाता है। साथ ही, ग्राहक सहायता बहुत समर्पित है। धन्यवाद इन्वेस्टिका</p>
                                
                            </div>
                            <div className="sl-item">
                                
                                <h3>अभिषेक गुप्ता</h3>
                                <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid img-star" />
                                <p>अच्छा ऐप अगर आप म्यूचुअल फंड के साथ जाना चाहते हैं। उपयोगकर्ता के अनुकूल इंटरफेस और निवेश के लिए और जानने की जरूरत नहीं है। बस अपना सर्वश्रेष्ठ चुनें और इन्वेस्टिका को सौंप दें।</p>
                                
                            </div>
                            <div className="sl-item">
                               
                                <h3>महेंद्र परिहार</h3>
                                <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid img-star" />
                                <p>मैं इस ऐप के माध्यम से म्यूचुअल फंड में 2 साल से अधिक समय से निवेश कर रहा हूं। चीजें जो मुझे ऐप के बारे में पसंद हैं: 1. यूजर इंटरफेस। आपकी जोखिम प्रोफ़ाइल के अनुरूप पैकेज के साथ अत्यधिक उपयोगकर्ता के अनुकूल। 2. ऐप आपको अपनी पसंद के फंड चुनने की अनुमति देता है और समय पर बाजार के मुकाबले आपके फोलियो के प्रदर्शन का विश्लेषण भी करता है। 3. ग्राहक सहायता त्रुटिहीन है। बिना समय बर्बाद किए त्वरित प्रतिक्रियाएं और प्रभाव प्राप्त होते हैं। अत्यधिक अनुशंसित, विशेष रूप से पहली बार उपयोगकर्ताओं के लिए।</p>
                                
                            </div>
                            <div className="sl-item">
                               
                                <h3>सुमित सरोज</h3>
                                <img src={StarImg} alt="" width={"152"} height={"23"} className="img-fluid img-star" />
                                <p>उपयोगकर्ता के अनुकूल ऐप और कुछ भी एक्सेस करने में आसान गैर-ज्ञानी व्यक्ति भी अपने लक्ष्यों के अनुसार निवेश कर सकते हैं। जैसा कि उनके अन्य ऐप समान हैं, लेकिन आपके निवेश या किसी भी प्रश्न से संबंधित सेवा के मामले में, इन्वेस्टिका टीम मेरा अनुभव सबसे अच्छा है, इसे मिनटों में हल किया गया था, वे अपने ग्राहकों की परवाह करते हैं और एक महान सेवा प्रदान करते हैं। धन्यवाद इन्वेस्टिका टीम</p>
                                
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    

   
    
    </div>
  );
}

export default MFTestimonials;
