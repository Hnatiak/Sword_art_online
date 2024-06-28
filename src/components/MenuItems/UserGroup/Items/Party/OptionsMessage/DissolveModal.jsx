import Modal from '../../../../../Modal/Modal';
import React from 'react';

const DissolveModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Dissolve"
      description="Are you sure you want to dissolve the party?"
    />
  );
};

export default DissolveModal;