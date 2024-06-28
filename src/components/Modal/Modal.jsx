// import React, { useState } from 'react';
// import { ModalWindow, ModalContent, ButtonContainer, ModalContentTitle } from './Modal.styled';

// const Modal = ({ title, description }) => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const closeModal = () => {
//     setSelectedButton(null);
//   };

//     const handleButtonClick = (button) => {
//       setSelectedButton(button);
//       closeModal();
    
//       if (button === 'yes' || button === 'no') {
//         console.log('Modal closed');
//       }
//     };

//   return (
//     <ModalWindow>
//       <ModalContentTitle>
//         <h2>{title}</h2>
//       </ModalContentTitle>
//       <ModalContent>
//         <p>{description}</p>
//       </ModalContent>
//       <ButtonContainer style={{ opacity: '1' }}>
//         <button onClick={() => handleButtonClick('yes')}>Yes</button>
//         <button onClick={() => handleButtonClick('no')}>No</button>
//       </ButtonContainer>
//     </ModalWindow>
//   );
// };

// export default Modal;



import React, { useState } from 'react';
import { ModalWindow, ModalContent, ButtonContainer, ModalContentTitle, Icon } from './Modal.styled';
import Accept from './menuandoption/accept.png'
import Cancel from './menuandoption/Cancel.png'

const Modal = ({ title, description, isOpen, onClose }) => {
  const handleButtonClick = (button) => {
    if (button === 'yes' || button === 'no') {
      onClose(button);
    }
  };

  return (
    <ModalWindow style={{ display: isOpen ? 'block' : 'none' }}>
      <ModalContentTitle>
        <h2>{title}</h2>
      </ModalContentTitle>
      <ModalContent>
        <p>{description}</p>
      </ModalContent>
      <ButtonContainer style={{ opacity: '1' }}>
        <Icon onClick={() => handleButtonClick('yes')} src={Accept} alt='' />
        <Icon onClick={() => handleButtonClick('no')} src={Cancel} alt='' />
      </ButtonContainer>
    </ModalWindow>
  );
};

export default Modal;