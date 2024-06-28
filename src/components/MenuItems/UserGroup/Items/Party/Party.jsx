import React, { useState } from 'react';
import { Container, Menu, MenuList, MenuListItem, MenuItem } from './Party.styled';
import hoverSound from '../../../../sounds/SAO_Menu_SFX.mp3';
import DissolveModal from './OptionsMessage/DissolveModal';

import Create from '../menuandoption/Create.png';
import CreateGray from '../menuandoption/CreateGray.png';
import Dissolve from '../menuandoption/Dissolve.png'
import DissolveGray from '../menuandoption/DissolveGray.png'
import Invite from '../menuandoption/Invite.png'
import InviteGray from '../menuandoption/InviteGray.png'

const PartyContent = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const audio = new Audio(hoverSound);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDissolveModalOpen, setIsDissolveModalOpen] = useState(false);
  const [selectedItemBeforeModal, setSelectedItemBeforeModal] = useState(null); // Новий стан для зберігання вибраного пункту перед модальним вікном

  const playHoverSound = () => {
    if (userInteracted && !isPlayingSound) {
      setIsPlayingSound(true);
      audio.play();
      setTimeout(() => {
        setIsPlayingSound(false);
      }, 1000);
    }
  };

  const handleMenuItemClick = (item) => {
    playHoverSound();
    setSelectedItemBeforeModal(selectedItem);
    setSelectedItem(item === selectedItem ? null : item);

    if (item === 'dissolve') {
      setIsDissolveModalOpen(true);
    }
  };

  const closeDissolveModal = () => {
    setIsDissolveModalOpen(false);
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  const handleDissolveModalClose = (button) => {
    if (button === 'yes') {
      setSelectedItem(selectedItemBeforeModal);
    } else {
      setSelectedItem(selectedItemBeforeModal); // Відновлення вибраного пункту після закриття модального вікна
    }
    closeDissolveModal();
  };

  return (
    <>
      <Container onClick={handlePageClick}>
        <Menu>
          <MenuList>
            <MenuListItem isSelected={selectedItem === 'create'} onClick={() => handleMenuItemClick('create')}>
              <MenuItem src={selectedItem === 'create' ? Create : CreateGray} alt="" />Create
            </MenuListItem>
            <MenuListItem isSelected={selectedItem === 'invite'} onClick={() => handleMenuItemClick('invite')}>
              <MenuItem src={selectedItem === 'invite' ? Invite : InviteGray} alt="" />Invite
            </MenuListItem>
            <MenuListItem isSelected={selectedItem === 'dissolve'} onClick={() => handleMenuItemClick('dissolve')}>
              <MenuItem src={selectedItem === 'dissolve' ? Dissolve : DissolveGray} alt="" />Dissolve
            </MenuListItem>
          </MenuList>
        </Menu>
      </Container>
      <DissolveModal isOpen={isDissolveModalOpen} onClose={handleDissolveModalClose} />
    </>
  );
};

export default PartyContent;