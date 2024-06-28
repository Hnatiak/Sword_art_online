// import styled from "@emotion/styled/macro";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export const Container = styled.div`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// export const MenuList = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     align-items: center;
// `;

// export const Border = styled.div`
//     display: flex;
//     cursor: pointer;
//     border: 3px solid #999999ff;
//     border-radius: 50%;
//     padding: 4px;
//     &:hover {
//         color: #e4a816;
//         border: 3px solid #e4a816;
//     }
// `;

// export const MenuItem = styled(FontAwesomeIcon)`
//     background: #999999ff; // #524d51ff
//     width: 25px;
//     height: 25px;
//     color: #848484;
//     border-radius: 50%;
//     padding: ${props => props['data-isfirstorlast'] ? '16px 17px' : '15px'};
//     border: 2px solid transparent;
//     ${Border}:hover & {
//         border-color: #e4a816;
//         background: #e4a816;
//         color: #fff;
//     }
// `;

// export const ActiveMenuItem = styled(MenuItem)`
//   background-color: #e4a816;
//   border-color: #e4a816;
//   background: #e4a816;
//   color: #fff;
// `;

// export const BorderActive = styled.div`
//     color: #e4a816;
//     border: 3px solid #e4a816;
//     display: flex;
//     cursor: pointer;
//     border-radius: 50%;
//     padding: 4px;
// `;


import styled from "@emotion/styled/macro";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export const Border = styled.div`
    display: flex;
    cursor: pointer;
    border: 3px solid #999999ff;
    border-radius: 50%;
    padding: 4px;
    &:hover {
        color: #e4a816;
        border: 3px solid #e4a816;
    }
`;

export const MenuItem = styled.img`
    width: 95px;
    height: 95px;
    cursor: pointer;
`;

export const ActiveMenuItem = styled(MenuItem)`
  background-color: #e4a816;
  border-color: #e4a816;
  background: #e4a816;
  color: #fff;
`;

export const BorderActive = styled.div`
    color: #e4a816;
    border: 3px solid #e4a816;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    padding: 4px;
`;