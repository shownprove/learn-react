import styled from "styled-components";

const Square = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Square)`
  border-radius: 50px;
`;

function App() {
  return (
    <div>
      <Square color="blue" />
      <Circle color="red" />
    </div>
  );
}

export default App;
