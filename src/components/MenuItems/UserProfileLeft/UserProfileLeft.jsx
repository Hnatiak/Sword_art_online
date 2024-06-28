// import React from 'react';
// import { faPerson } from '@fortawesome/free-solid-svg-icons';
// import { Container, Item, Logo, LogoHover, Name } from './UserProfileLeft.styled';
// // import Button from './Button'; // Припустимо, ви маєте компонент Button

// const UserProfileRight = () => {
//   return (
//     <Container>
//         <Item>
//             <Name>Name</Name>
//             <Logo icon={faPerson} />
//             <LogoHover icon={faPerson} />
//             {/* <CircleOne icon={faCircle}><CircleTwo icon={faCircle} regular /></CircleOne> */}
//         </Item>
//         <div style={{ background: '#d6d6d6ff'}}>
//             <h1>DESCRIPTION</h1>
//         </div>
//     </Container>
//   );
// };

// export default UserProfileRight;


import React, { useState } from 'react';
import circleContent from './circleContent';
import { Container, Item, Logo, LogoHover, Name, LogoContainer, Smscontainer, CircleOne, CircleTwo, CircleItems, CircleOptions, Icon, DescriptionContainer } from './UserProfileLeft.styled';
import Person from './menuandoption/person2.png';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import hoverSound from '../../sounds/SAO_Menu_SFX.mp3';
import { useMenuContext } from '../../Menu/MenuContext';

// import Description from './menuandoption/Throwingasword.png'

const totalCircles = 12;
const radius = 135;
const angleIncrement = (2 * Math.PI) / totalCircles;

const UserProfileLeft = () => {
  const { selectedCircleId, setSelectedCircleId } = useMenuContext();
  // const [selectedCircleId, setSelectedCircleId] = useState(6);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audio = new Audio(hoverSound);

  const handleCircleClick = (circleId) => {
    setSelectedCircleId(circleId);

    if (userInteracted && !isPlayingSound) {
      setIsPlayingSound(true);
      audio.play();
      setTimeout(() => {
        setIsPlayingSound(false);
      }, 1000);
    }
  };

  const circleItems = circleContent.map(circle => {
    const angle = (circle.id - 1) * angleIncrement;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
  
    const isCurrentCircleSelected = selectedCircleId === circle.id;
  
    return (
      <CircleOne
        key={circle.id}
        style={{
          top: `${50 + y}px`,
          left: `${50 + x}px`,
        }}
        onClick={() => handleCircleClick(circle.id)}
        onMouseEnter={() => setUserInteracted(true)} // Встановлюємо userInteracted у true при наведенні
      >
        <CircleTwo icon={faCircle} regular isSelected={isCurrentCircleSelected} />
      </CircleOne>
    );
  });

  const selectedCircle = circleContent.find(circle => circle.id === selectedCircleId);

  return (
    <Container>
        <Item>
            <Name>Name</Name>
            <LogoContainer>
              <Logo src={Person} alt='Person' />
              <LogoHover src={Person} alt='Person' />
              <div>
                <CircleOptions>
                  <CircleItems>{circleItems}</CircleItems>
                </CircleOptions>
              </div>
            </LogoContainer>
            <Smscontainer />
        </Item>
        <div style={{ background: '#d6d6d6ff', padding: '20px', width: '300px' }}>
          <DescriptionContainer>
            <Icon src={`${selectedCircle.icon}`} alt="Icon" />
            <div>{selectedCircle ? selectedCircle.title : ''}</div>
          </DescriptionContainer>
          <div style={{ marginLeft: '60px' }}>{selectedCircle ? (selectedCircle.description.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>{paragraph}<br /></React.Fragment>))) : ('')}</div>
        </div>
    </Container>
  );
};

export default UserProfileLeft;