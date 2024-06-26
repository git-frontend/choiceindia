import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ContestModalHindi() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='contest-modal'>


      <Button variant="primary" onClick={handleShow} className="trm-link">
        नियम और शर्तों के लिए यहां क्लिक करें
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className='contest-modal-sub' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>नियम और शर्तों</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="reset" id="style-scrll">
            
            <li>चालू माह में खोले गए सभी ट्रेडिंग खातों को उसी महीने के अंतिम कार्य दिवस तक ऑफ़र के लिए विचार किया जाएगा।</li>
            <li>निवेश राशि जोड़ने और व्यापार करने के लिए अगले महीने की 06 तारीख तक अनुग्रह अवधि प्रदान की जाती है।</li>
            <li>योजना अवधि के दौरान एकत्र किए गए नकद (Cash) मार्जिन को प्रोत्साहन गणना के लिए माना जाएगा।</li>
            <li>अगले महीने की 06 तारीख तक खाते में जोड़े गए कुल मार्जिन पर ही अंतिम भुगतान गणना के लिए विचार किया जाएगा।</li>
            <li>मार्जिन के साथ जोड़ा गया क्लाइंट कम से कम 3 महीने के लिए सक्रिय होना चाहिए यानी हर महीने न्यूनतम 2 ट्रेड सक्रिय रहना चाहिए।</li>
            <li>प्रतियोगिता के लिए मासिक भुगतान अगले महीने की 25 तारीख को जारी किया जाएगा।</li>
            <li>NSE में किए गए केवल इक्विटी ट्रेड को माना जाएगा। इस प्रतियोगिता में किसी अन्य एक्सचेंज पर ट्रेडों पर विचार नहीं किया जाएगा।</li>
            <li>योजना केवल ऑनलाइन खातों के लिए लागू है|</li>
            <li>इस प्रतियोगिता में खोला गया खाता यूसीसी सक्रिय को संदर्भित करता है।</li>
            <li>सीबीए, चॉईस फ्रैंचाइजी और सभी चॉईस ग्रुप कर्मचारियों के लिए लागू (चॉइस ब्रोकिंग कर्मचारियों को छोड़कर)</li>
            <li>फ्रेंचाइजी/सीबीए को उनके संबंधित कोड के माध्यम से खोले गए खातों के आधार पर पुरस्कार मिलेगा।</li>
            <li>यदि ग्राहक 3 महीने पूरे होने से पहले निष्क्रिय हो जाता है, तो भुगतान की वसूली की जाएगी।</li>
            <li>चॉइस प्रबंधन पूर्व सूचना के साथ या बिना योजना के किसी भी परिवर्तन या रद्द करने का अधिकार सुरक्षित रखता है।</li>
            <li>इसके साथ किसी अन्य योजना/प्रतियोगिता/प्रस्ताव को नहीं जोड़ा जा सकता है|</li>
            <li>सीबीए/एपी कोड की बैकएंड मैपिंग की अनुमति नहीं होगी।</li>

          </ul>
        </Modal.Body>
      </Modal>



    </div>

  )
}

export default ContestModalHindi;