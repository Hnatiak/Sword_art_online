import { Window } from "./WindowComponent.styled";


const WindowComponent = ({ windowIndex }) => {

    const windowContent = [ ];

  return (
    <>
    <Window>
      {windowContent[windowIndex]}
      <h1>Hello</h1>
    </Window>
    </>
  );
};

export default WindowComponent;