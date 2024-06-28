import styled from "@emotion/styled";

export const Window = styled.div`
    position: relative;
    display: inline-block; /* Змінено на inline-block для відображення у ряд */
    cursor: pointer;
    border: 3px solid #999999ff;
    padding: 4px;
    &:hover {
        color: #e4a816;
        border: 3px solid #e4a816;
    }
    &:active {
        left: 0;
    }
`;