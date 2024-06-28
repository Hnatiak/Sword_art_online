import styled from "@emotion/styled";

export const ModalWindow = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 100%;
    z-index: 1000;

    opacity: 0.9;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 40px 10px;
`;

export const ModalContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
`;

export const Icon = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-around;
`;