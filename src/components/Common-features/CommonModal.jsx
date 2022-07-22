import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './common-modal.scss'
function CommonModal(props) {
console.log("PROPS",props)
    const [display, setDisplay] = useState(true);

    useEffect(() => {
    }, [])

    function closeModal(){
        setDisplay(false);
        props.toggleModal(false)
    }

    return (

        <>
            <Modal className='common-modal-css'
                show={display}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={()=>{closeModal()}}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {props.content}
                    </p>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="warning" onClick=>{props.closebtn}</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default CommonModal;