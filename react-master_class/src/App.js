import styled from "styled-components";

const Alias = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <div>
      <Alias color="blue" />
      <Alias color="red" />
    </div>
  );
}

export default App;
