import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { useState } from 'react';


function ModalInfo(post) {
    console.log("props", post); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
setShow(post.true)
    //const handleShow = () => setShow(true);
console.log("post",post)
        return (
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{post.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{post.body}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-success" onClick={handleClose}>
                           Zamknij
                        </Button>
                      
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }


    export default ModalInfo