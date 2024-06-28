// import React from 'react';
// import { faFlagUsa, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
// import { Container, Item, Logo, Circle, Smscontainer } from './UserGroup.styled';
// // import Button from './Button'; // Припустимо, ви маєте компонент Button

// const UserGroup = () => {
//   return (
//     <Container>
//         <Item>
//             <Circle>
//                 <Logo icon={faFlagUsa} />
//             </Circle>
//             <h2>Guild</h2>
//         </Item>
//         <Item>
//         <Circle>
//             <Logo icon={faUsers} />
//             </Circle>
//             <Smscontainer />
//             <h2>Party</h2>
//         </Item>
//         <Item>
//             <Circle>
//             <Logo icon={faUserPlus} />
//             </Circle>
//             <h2>Friends</h2>
//         </Item>
//     </Container>
//   );
// };

// export default UserGroup;


import React, { useState } from 'react';
import { Container, Item, Logo, Smscontainer, SmscontainerActive, ItemActive } from './UserGroup.styled';
import hoverSound from '../../sounds/SAO_Menu_SFX.mp3';

import Friends from './menuandoption/Friends.png'
import FriendsGray from './menuandoption/FriendsGray.png'

import Guild from './menuandoption/Guild.png'
import GuildGray from './menuandoption/GuildGray.png'

import Party from './menuandoption/Party.png'
import PartyGray from './menuandoption/PartyGray.png'
import PartyContent from './Items/Party/Party';

const UserGroup = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const audio = new Audio(hoverSound);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const playHoverSound = () => {
    if (userInteracted && !isPlayingSound) {
      setIsPlayingSound(true);
      audio.play();
      setTimeout(() => {
        setIsPlayingSound(false);
      }, 1000);
    }
  };

  const handleMenuItemMouseEnter = (menuItem) => {
    playHoverSound();
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    playHoverSound();
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
    }
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  return (
    <Container onClick={handlePageClick}>
      {activeMenuItem === 'guild' ? (
        <>
          <ItemActive onClick={() => handleMenuItemClick('guild')}>
            <Logo src={Guild} alt="Guild" />
            <h2>Guild</h2>
          </ItemActive>
        </>
      ) : (
        <Item onClick={() => handleMenuItemMouseEnter('guild')} >
          <Logo src={GuildGray} alt="GuildGray" />
          <h2>Guild</h2>
        </Item>
      )}


      {activeMenuItem === 'party' ? (
        <div>
          <ItemActive onClick={() => handleMenuItemClick('party')}>
            <Logo src={Party} alt="Party" />
            <SmscontainerActive />
            <h2>Party</h2>
          </ItemActive>
          <div>
            <PartyContent />
          </div>
        </div>
      ) : (
        <Item onClick={() => handleMenuItemMouseEnter('party')}>
          <Logo src={PartyGray} alt="PartyGray" />
          <Smscontainer />
          <h2>Party</h2>
        </Item>
      )}

      {activeMenuItem === 'friends' ? (
        <>
          <ItemActive onClick={() => handleMenuItemClick('friends')}>
            <Logo src={Friends} alt="Friends" />
            <h2>Friends</h2>
          </ItemActive>
        </>
      ) : (
        <Item onClick={() => handleMenuItemMouseEnter('friends')}>
          <Logo src={FriendsGray} alt="FriendsGray" />
          <h2>Friends</h2>
        </Item>
      )}
    </Container>
  );
};

export default UserGroup;