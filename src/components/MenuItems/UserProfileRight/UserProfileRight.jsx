// import React from 'react';
// import { faPen, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { Container, Item, Logo, Circle, Smscontainer, SmsText, SmsArrow, SmsBorder, SmsContent } from './UserProfileRight.styled';
// // import Button from './Button'; // Припустимо, ви маєте компонент Button

// const UserProfileRight = () => {
//   return (
//     <Container>
//         <Item>
//           <Circle>
//             <Logo icon={faBriefcase} sharp />
//           </Circle>
//             <h2>Items</h2>
//         </Item>
//         <Item>
//           <Circle>
//             <Logo icon={faUser} />
//           </Circle>
//           <Smscontainer></Smscontainer>
//             <h2>Skills</h2>
//         </Item>
//         <Item>
//           <Circle>
//             <Logo icon={faPen} style={{ transform: 'rotate(135deg)', marginTop: '10px', clipPath: 'polygon(0% 100%, 100% 100%, 75% 35%, 30% 0%)' }} />
//           </Circle>
//             <h2>Equipment</h2>
//         </Item>
//     </Container>
//   );
// };

// export default UserProfileRight;


import React, { useState } from 'react';
import { Container, Item, Logo, Smscontainer, SmscontainerActive, ItemActive } from './UserProfileRight.styled';
import hoverSound from '../../sounds/SAO_Menu_SFX.mp3';

import Skills from './menuandoption/Skills.png'
import SkillsGray from './menuandoption/SkillsGray.png'

import Equipment from './menuandoption/Equipment.png'
import EquipmentGray from './menuandoption/EquipmentGray.png'

import Items from './menuandoption/Items.png'
import ItemsGray from './menuandoption/ItemsGray.png'
import SkillsItems from './Items/Skills/SkillsItems';
import { MenuProvider } from 'components/Menu/MenuContext';
import UserProfileLeft from '../UserProfileLeft/UserProfileLeft';

const UserProfileRight = () => {
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

        {activeMenuItem === 'items' ? (
          <>
            <ItemActive onClick={() => handleMenuItemClick('items')}>
              <Logo src={Items} alt="Items" />
              <h2>Items</h2>
            </ItemActive>
            {/* <Settings /> */}
          </>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('items')} >
            <Logo src={ItemsGray} alt="ItemsGray" />
            <h2>Items</h2>
          </Item>
        )}


        {activeMenuItem === 'skills' ? (
          <div>
            <ItemActive onClick={() => handleMenuItemClick('skills')}>
              <Logo src={Skills} alt="Skills" />
              <SmscontainerActive />
              <h2>Skills</h2>
            </ItemActive>
            <div>
              <MenuProvider>
                <div>
                  <UserProfileLeft />
                </div>
                <SkillsItems />
              </MenuProvider>
            </div>
          </div>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('skills')}>
            <Logo src={SkillsGray} alt="SkillsGray" />
            <Smscontainer />
            <h2>Skills</h2>
          </Item>
        )}

        {activeMenuItem === 'equipment' ? (
          <>
            <ItemActive onClick={() => handleMenuItemClick('equipment')}>
              <Logo src={Equipment} alt="Equipment" />
              <h2>Equipment</h2>
            </ItemActive>
          </>
        ) : (
          <Item onClick={() => handleMenuItemMouseEnter('equipment')}>
            <Logo src={EquipmentGray} alt="EquipmentGray" />
            <h2>Equipment</h2>
          </Item>
        )}
    </Container>
  );
};

export default UserProfileRight;