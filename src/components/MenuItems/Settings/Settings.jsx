// import React from 'react';
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import { Container, Item, Logo, Circle, Smscontainer } from './Settings.styled';
// // import Button from './Button'; // Припустимо, ви маєте компонент Button

// const Settings = () => {
//   return (
//     <Container>
//         <Item>
//             <Circle>
//                 <Logo icon={faRightFromBracket}/>
//             </Circle>
//             <Smscontainer />
//             <h2>Exit</h2>
//         </Item>
//     </Container>
//   );
// };

// export default Settings;


import React, { useState } from 'react';
import { Container, Item, Logo, Smscontainer, SmscontainerActive, ItemActive } from './Settings.styled';
import hoverSound from '../../sounds/SAO_Menu_SFX.mp3';

import Exit from './menuandoption/Exit.png'
import ExitGray from './menuandoption/ExitGray.png'

import Help from './menuandoption/Help.png'
import HelpGray from './menuandoption/HelpGray.png'

import Option from './menuandoption/Option.png'
import OptionGray from './menuandoption/OptionGray.png'

const Settings = () => {
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

        {activeMenuItem === 'option' ? (
          <>
            <ItemActive onClick={() => handleMenuItemClick('option')}>
              <Logo src={Option} alt="Option" />
              <h2>Option</h2>
            </ItemActive>
            {/* <Settings /> */}
          </>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('option')} >
            <Logo src={OptionGray} alt="OptionGray" />
            <h2>Option</h2>
          </Item>
        )}


        {activeMenuItem === 'help' ? (
          <>
            <ItemActive onClick={() => handleMenuItemClick('help')}>
              <Logo src={Help} alt="Help" />
              <SmscontainerActive />
              <h2>Help</h2>
            </ItemActive>
            {/* <Settings /> */}
          </>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('help')}>
            <Logo src={HelpGray} alt="HelpGray" />
            <Smscontainer />
            <h2>Help</h2>
          </Item>
        )}

        {activeMenuItem === 'exit' ? (
          <>
            <ItemActive onClick={() => handleMenuItemClick('exit')}>
              <Logo src={Exit} alt="Exit" />
              <h2>Exit</h2>
            </ItemActive>
          </>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('exit')}>
            <Logo src={ExitGray} alt="ExitGray" />
            <h2>Exit</h2>
          </Item>
        )}
    </Container>
  );
};

export default Settings;