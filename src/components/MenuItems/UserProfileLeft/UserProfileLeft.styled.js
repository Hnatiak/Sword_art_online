import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    pointer-events: none;
    user-select: none;
    position: absolute;
    right: 550px;
    box-shadow: 0 0 10px rgba(0, 6, 0, 0.8);
    top: -150px;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.img`
    color: #272425;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Icon = styled.img`
    width: 45px;
    height: 45px;
`;

export const Smscontainer = styled.div`
    -webkit-transform: rotate(90deg);
    display: block;
    content: '';
    width: 0;
    height: 0;
    border: 0 solid transparent;
    position: absolute;
    border-left: 26px solid transparent; /* Змінено ширину границі на 50px */
    border-bottom: 50px solid #fff; /* Змінено ширину границі на 100px */
    top: 70%;
    right: -35px;
    margin-top: -52px;
    background: transparent;
    border-right: 26px solid transparent; /* Змінено ширину границі на 50px */
`;

export const LogoHover = styled.img`
    filter: drop-shadow(0px 140px 10px rgba(0, 0, 0, 0.3)); /* Додає тінь знизу */
    transform: scaleY(-1); /* Відзеркалення */
    clip-path: polygon(0% 100%, 100% 100%, 100% 90%, 0% 90%);
    opacity: 0.3;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CircleItems = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
`;

export const CircleOptions = styled.div`
    position: absolute;
    top: 165px;
    left: 105px;
`;

export const CircleOne = styled.div`
    // display: flex;
    // width: 30px;
    // height: 30px;
    padding: 2px;
    border-radius: 50%;
    border: 2px solid #6a686abd;
    // align-items: center;
    // justify-content: center;
    position: absolute;
    transform-origin: center;
    cursor: pointer;
`;

export const CircleTwo = styled(FontAwesomeIcon)`
    // width: 100%;
    // height: 100%;
    font-size: 24px;
    display: flex;

    ${props => props.isSelected ? `color: #eba601;` : `color: #6a686a; `}
`;


export const CircleContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.regular ? '#d6d6d6' : '#6a686a')};
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Item = styled.div`
    align-items: center;
    gap: 25px;
    width: 300px;
    height: 355px;
    background: white;
    position: relative;
    padding: 20px;
    color: #343233;
`;

export const Name = styled.h3`
    border-bottom: 2px solid #6a686a;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
`;
