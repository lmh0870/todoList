import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.lightCardBg};
  padding: 16px;
  border-radius: 8px;
  min-height: 280px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #00adb5;
`;
const AddTask = styled.input`
  margin: 8px 0;
  padding: 16px;
  font-size: 16px;
  background-color: ${(props) => props.theme.lightBg};
  border-radius: 8px;
  width: 100%;
  height: 32px;
  color: ${(props) => props.theme.lightText};
`;
const TodoList = styled.div`
  margin-top: 8px;
`;
const Todo = styled.div`
  font-size: 16px;
  border-bottom: 1px solid;
  background-color: #222831;
  margin-bottom: 8px;
  padding: 12px;
  border-radius: 16px;
`;

export default function Default() {
  return (
    <Container>
      <Title>Todo</Title>
      <form>
        <AddTask />
      </form>
      <TodoList>
        <Todo>TodoList-1</Todo>
        <Todo>TodoList-2</Todo>
        <Todo>TodoList-3</Todo>
      </TodoList>
    </Container>
  );
}
