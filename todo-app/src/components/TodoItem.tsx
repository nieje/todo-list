"use client";

import styled from "styled-components";

const Item = styled.div`
  padding: 12px;
  margin-top: 9px;
  margin-bottom: 2px;

  color: #3a3a3a;
  border-radius: 4px;
  background: linear-gradient(
    173deg,
    rgba(255, 246, 230, 0.82) 0%,
    rgb(255, 233, 233) 100%
  );

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DefaultButton = styled.div`
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;

  margin-right: 2px;
  margin-left: 2px;
  font-size: 16px;

  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #8fbbff;
  color: #8fbbff;

  &:hover {
    background-color: #8fbbff;
    color: #fff;
  }
`;

const DeleteButton = styled(DefaultButton)`
  color: #f27d7d;
  border: 1px solid #f27d7d;

  &:hover {
    background-color: #f27d7d;
    color: #fff;
  }
`;

const Text = styled.p`
  font-size: 24px;
  cursor: pointer;
`;

interface ItemTodo {
  todo: any;
  editTodoItem: FunctionStringCallback;
  deleteTodoItem: FunctionStringCallback;
  handlePopupClick?: () => void;
}

function TodoItem({
  todo,
  editTodoItem,
  deleteTodoItem,
  handlePopupClick,
}: ItemTodo) {
  return (
    <>
      <Item>
        <Text onClick={handlePopupClick}>{todo.attributes.name}</Text>

        <ButtonWrapper>
          <DefaultButton onClick={() => editTodoItem(todo)}>Edit</DefaultButton>
          <DeleteButton onClick={() => deleteTodoItem(todo)}>Del</DeleteButton>
        </ButtonWrapper>
      </Item>
    </>
  );
}
export default TodoItem;
