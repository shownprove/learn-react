import styled from "styled-components";

const Square = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const Diamond = styled(Square).attrs({ value: "yes" })`
  transform: rotate(45deg);
  margin: 20px;
`;

function App() {
  return (
    <div>
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
      <Diamond color="red" as="button" />
    </div>
  );
}

export default App;
