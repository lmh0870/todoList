import styled from "styled-components";
import Board from "./Board";

const Boards = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 24px;
  margin: 48fpx 0px;
`;
export default function Default() {
  return (
    <Boards>
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
    </Boards>
  );
}
