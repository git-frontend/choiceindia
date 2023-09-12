import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Lazy from 'yup/lib/Lazy';

function ContestModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='contest-modal'>


      <Button variant="primary" onClick={handleShow} className="trm-link">
        नियम आणि अटींसाठी इथे क्लिक करा
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className='contest-modal-sub' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>नियम आणि अटीं</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='reset' id="style-scrll">
            <li>चालू महिन्यात सुरु झालेल्या ट्रेडिंग खातेच ऑफरसाठी ग्राह्य धरले जातील.</li>
            <li> गुंतवणुकीची रक्कम भरण्यासाठी, आणि नवीन ट्रेड सुरु करण्यासाठी पुढील महिन्याच्या ६ तारखेपर्यंत मुदत वाढवून दिली जाईल.</li>
            <li>योजनेच्या कालावधीत जमा झालेली रक्कम मार्जिन प्रोत्साहन गणनेसाठी विचारात घेतली जाईल.</li>
            <li>पुढील महिन्याच्या ६ तारखेपर्यंत सुरु केलेल्या खात्यांचे एकूण मार्जिन अंतिम पेआऊटसाठी विचारात घेतले जाईल.</li>
            <li>मार्जिनसह जोडलेले क्लाईंट (ग्राहक) किमान तीन महिने सक्रिय असले पाहिजेत म्हणजे दर महिन्याला किमान २ ट्रेड सुरु ठेवावे लागतील.</li>
            <li>मासिक पेआऊट पुढील महिन्याच्या २५ तारखेलाच प्रसिद्ध केले जाईल.</li>
            <li>केवळ NSE वरच केलेल्या इक्विटी व्यवहारांचा विचार केला जाईल. या स्पर्धेत इतर कोणत्याही एक्सचेंजवरील व्यवहारांचा विचार केला जाणार नाही.</li>
            <li>योजना केवळ ऑनलाईन खात्यांसाठीच लागू असेल.</li>
            <li>या स्पर्धेत, उघडलेले खाते UCC सक्रिय आहे.</li>
            <li>सीबीए, चॉईस फ्रॅचाईसी आणि सर्व चॉईस ग्रुपच्या कर्मचाऱ्यांसाठी लागू (चॉईस ब्रोकिंग कर्मचाऱ्यांना वगळून)</li>
            <li>फ्रॅचाईसी/सीबीएला त्यांच्या संबंधित कोडच्या माध्यमातून सुरु करण्यात आलेल्या खात्यांच्या आधारावरच पुरस्कार मिळतील.</li>
            <li>जर एखादा ग्राहक तीन महिने पूर्ण होण्यापूर्वीच निष्क्रिय झाला असेल, तर पेमेंट वसूल केले जाईल.</li>
            <li>चॉईस व्यवस्थापनाने पूर्वसूचना देऊन किंवा त्याशिवाय प्लॅनमध्ये कोणतेही बदल किंवा रद्द करण्याचा आधिकार स्वत: कडे राखून ठेवला आहे.</li>
            <li>इतर कोणत्याही योजना/ स्पर्धा/ ऑफरसह एकत्र केले जाऊ शकत नाही.</li>
            <li>सीबीए/ एपी कोडच्या बॅकएंड मॅपिंगला परवानगी दिली जाणार नाही.</li>

          </ul>
        </Modal.Body>
      </Modal>



    </div>

  )
}

export default ContestModal;