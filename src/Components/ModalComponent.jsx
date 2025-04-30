import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalComponent({ showTrigger, children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (showTrigger) {
      setShowLoginModal(true);
      const timer = setTimeout(() => {
        setShowLoginModal(false);
      },2500);
      return () => clearTimeout(timer);
    }
  }, [showTrigger]);

  const handleClose = () => {
    setShowLoginModal(false);
  };

  return (
    <Modal show={showLoginModal} onHide={handleClose} centered>
      <Modal.Body className="p-0 d-flex justify-content-center align-items-center">
        {children}
      </Modal.Body>
    </Modal>
  );
}
