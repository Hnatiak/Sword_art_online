import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.img`
    width: 45px; 
    height: 45px;
    color: #696969;
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

export const Menu = styled.div`
    border: 1px solid;
    border-image: linear-gradient(to top, transparent, #f9f9f9 20%, #f9f9f9 80%, transparent) 0 0 0 1;
    max-height: 350px;
    top: -82px;
    margin-left: 65px;

    &::before {
      position: absolute;
      content: '';
      border-right: 35px solid #f9f9f9;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      left: -36px;
      top: calc(50% - 10px);
  }

  &::after {
    position: absolute;
    content: '';
    border: 6px solid #333;
    border-radius: 50%;
    left: -16px;
    top: calc(52.3% - 3px);
  }

    position: absolute;
    left: 290px;
`;

export const MenuWrapper = styled.div`
  position: relative;
  bottom: 25px;

  // -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(28%,rgba(255,255,255,1)), color-stop(82%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)))
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(8%,rgba(255,255,255,1)), color-stop(92%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));
`;

export const MenuList = styled.ul`
    list-style-type: none;
    margin: 0 5px;
    padding: 0;
    position: relative;
    max-height: 400px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
      }
      
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
`;

export const MenuListItem = styled.li`
  display: flex;
  background-color: ${props => (props.isSelected ? '#eda60c' : '#f9f9f9')};
  color: ${props => (props.isSelected ? '#f9f9f9' : '#494748')};
  width: 250px;
  padding: 10px 20px;
  margin-bottom: 5px;
  cursor: pointer;
  align-items: center;
  gap: 15px;
  ${props => (props.isSelected ? 'color: #f9f9f9' : 'color: #000')}
  transition: background-color 0.2s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${props => (props.isSelected ? '#eda60c' : '#ffaf00')};
    color: #f9f9f9;
  }
`;