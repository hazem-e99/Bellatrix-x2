import React from 'react';
import Modal from '../../Modal';

export default function ContactModal({ isOpen, onClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule Your Consultation"
      subtitle="Let's discuss your NetSuite consulting needs"
    >
      {children}
    </Modal>
  );
} 