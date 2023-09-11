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
        હરીફાઈના નિયમો અને શરતો માટે અહીં ક્લિક કરોsss

      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className='contest-modal-sub' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>શરતો અને નિયમો</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='reset' id="style-scrll">
            <li>ચાલુ મહિનામાં ખોલવામાં આવેલા તમામ ટ્રેડિંગ એકાઉન્ટ્સ તે જ મહિનાના છેલ્લા કામકાજના દિવસ સુધી ઓફર માટે ધ્યાનમાં લેવામાં આવશે.</li>
            <li>રોકાણની રકમ ઉમેરવા અને વેપાર શરૂ કરવા માટે આવતા મહિનાની 06મી સુધી ગ્રેસ પીરિયડ આપવામાં આવે છે.</li>
            <li>યોજનાના સમયગાળા દરમિયાન એકત્રિત કરાયેલ રોકડ માર્જિન પ્રોત્સાહન ગણતરી માટે ધ્યાનમાં લેવામાં આવશે.</li>
            <li>આવતા મહિનાની 06મી તારીખ સુધી ખાતામાં ઉમેરાયેલ કુલ માર્જિન માત્ર અંતિમ ચૂકવણીની ગણતરી માટે જ ધ્યાનમાં લેવામાં આવશે.</li>
            <li>માર્જિન સાથે ઉમેરાયેલ ક્લાયંટ ઓછામાં ઓછા 3 મહિના માટે સક્રિય હોવું જોઈએ એટલે કે દર મહિને ઓછામાં ઓછા 2 સોદા અને ચાલુ રહેવી જોઈએ.</li>
            <li>સ્પર્ધા માટેનું માસિક ચૂકવણું આવતા મહિનાની 25મી તારીખે બહાર પાડવામાં આવશે.</li>
            <li>NSE માં કરવામાં આવેલ વેપાર માત્ર EQ માટે જ ગણવામાં આવશે. આ હરીફાઈમાં અન્ય કોઈપણ એક્સચેન્જ પરના વેપારને ધ્યાનમાં લેવામાં આવશે નહીં.</li>
            <li>આ સ્કીમ માત્ર ઓનલાઈન એકાઉન્ટ્સ માટે જ લાગુ છે.</li>
            <li>આ હરીફાઈમાં, ખોલવામાં આવેલ ખાતું UCC સક્રિયનો સંદર્ભ આપે છે.</li>
            <li>આ સબ બ્રોકર ફ્રેન્ચાઈઝી ઓફર CBA, ચોઈસ ફ્રેન્ચાઈઝી અને તમામ ચોઈસ ગ્રુપ એમ્પ્લોઈઝ (ચોઈસ બ્રોકિંગ એમ્પ્લોઈઝ સિવાય) માટે લાગુ છે.</li>
            <li>ફ્રેન્ચાઇઝ/સીબીએ તેમના સંબંધિત કોડ દ્વારા ખોલવામાં આવેલા ખાતાના આધારે પુરસ્કારો મેળવશે</li>
            <li>જો ક્લાયન્ટ 3 મહિના પૂરા થતાં પહેલાં નિષ્ક્રિય થઈ જાય, તો ચૂકવણી વસૂલ કરવામાં આવશે</li>
            <li>વ્યવસ્થાપન યોજનામાં કોઈપણ ફેરફાર અથવા રદ કરવાનો અધિકાર અનામત રાખે છે, પૂર્વ સૂચના સાથે અથવા વગર.</li>
            <li>આની સાથે અન્ય કોઈ સ્કીમ/સ્પર્ધા/ઓફરને જોડી શકાશે નહીં</li>
            <li>CBA/AP કોડના બેકએન્ડ મેપિંગને મંજૂરી આપવામાં આવશે નહીં</li>
          </ul>
        </Modal.Body>
      </Modal>



    </div>

  )
}

export default ContestModal;