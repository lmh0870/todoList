import styled from "styled-components";
import Boards from "../Components/Boards/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
// const Boards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 320px);
//   gap: 24px;
//   margin: 48fpx 0px;
// `;
export default function Default() {
  return (
    <Container>
      <Boards />
    </Container>
  );
}
