import styled, { keyframes } from "styled-components";

const ani = keyframes`
0% {
  border-radius:0px;
}
50%{
  border-radius:100px;
}
100%{
  border-radius:0px;
}
`;

const Hello = styled.span`
  font-size: 40px;
`;

const Square = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const Diamond = styled(Square).attrs({ value: "yes" })`
  transform: rotate(45deg);
  margin: 20px;
  animation: ${ani} 1s linear infinite;
  ${Hello}:hover {
    font-weight: bolder;
  }
`;

function App() {
  return (
    <div>
      <Diamond color="red" as="button" />
      <Diamond color="green" as="button" />
      <Diamond color="yellow" as="button" />
      <Diamond color="black" as="button" />
      <Diamond color="wheat" as="button">
        <Hello>Hi</Hello>
      </Diamond>
      <Diamond color="tomato" as="button" />
      <Diamond color="blue" as="button" />
      <Diamond color="orange" as="button" />
      <Diamond color="navy" as="button" />
    </div>
  );
}

export default App;
