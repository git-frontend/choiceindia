import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContestModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='contest-modal'>


      <Button variant="primary" onClick={handleShow} className="trm-link">
        For Contest Terms &amp; Conditions Click Here
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className='contest-modal-sub' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Terms &amp; Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='reset' id="style-scrll">
            <li>All trading accounts opened in the current month shall be considered for the offer until the last working day of the same month.</li>
            <li>Grace period is provided till 06th of the next month to add Margin &amp; Trade.</li>
            <li>Cash Margin collected during scheme period will be considered for incentive calculation.</li>
            <li>Total Margin added in account till the date of 06th of next month only  will be considered for final payout calculation.</li>
            <li>Clients added with Margin should be active for minimum 3 months i.e Minimum 2 trades every month.</li>
            <li>Monthly Payout for the contest will be released on the date of 25th of the next month.</li>
            <li>Trade done in NSE will only be considered for EQ. Trades on any other exchange will not be considered in this contest.</li>
            <li>Scheme is applicable for Online Accounts only.</li>
            <li>In this contest, account opened refers to UCC active.</li>
            <li>Applicable for CBA's, Choice Franchisee &amp; all Choice Group Employees (Except Choice Broking Employees)</li>
            <li>Franchise/CBA will get rewards based on accounts open through their respective codes.</li>
            <li>If the client becomes inactive before completion of 3 months, the payout will be recovered.</li>
            <li>Management reserves right for any alteration or cancellation of scheme, With or without prior intimation.</li>
            <li>No other scheme / contest / offer can be clubbed with this.</li>
            <li>No backend mapping of CBA / AP code will be allowed.</li>
          </ul>
        </Modal.Body>
      </Modal>



    </div>

  )
}

export default ContestModal;