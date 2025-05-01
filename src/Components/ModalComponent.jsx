import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalComponent({ showTrigger, children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (showTrigger) {
      setShowLoginModal(true);
      const timer = setTimeout(() => {
        setShowLoginModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTrigger]);

  const handleClose = () => {
    setShowLoginModal(false);
  };

  return (
    <Modal className="custom-modal"   show={showLoginModal} onHide={handleClose} centered>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className=" flex justify-content-center align-items-center"
      >
        {children}
      </motion.div>
    </Modal>
  );
}
