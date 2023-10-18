"use client";
import { useState } from "react";
import styled from "styled-components";

const AddTodoContainer = styled.div`
  margin-top: 4px;
  margin-bottom: 48px;
  width: 600px;
  display: flex;
  justify-content: space-evenly;
`;

const TodoInputText = styled.input`
  padding: 10px 7px;
  border-radius: 3px;
  margin-right: 2px;
  margin-left: 2px;

  width: 100%;
  font-size: large;
  border: none;
  background-color: #eaeaea;
`;

const TodoInputButton = styled.input`
  padding: 10px 10px;
  border-radius: 3px;
  margin-right: 2px;
  margin-left: 2px;

  background-color: rgb(255, 149, 179);
  color: white;
  font-size: large;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(236, 122, 154);
  }
`;

function AddTodo({ addTodo }: { addTodo: FunctionStringCallback }) {
  const [todo, setTodo] = useState<string>("");
  return (
    <>
      <AddTodoContainer>
        <TodoInputText
          type="text"
          placeholder="Add new todo here..."
          id="name"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              addTodo(todo);
              setTodo("");
            }
          }}
        />
        <TodoInputButton
          type="button"
          value="Add Todo"
          onClick={() => {
            addTodo(todo);
            setTodo("");
          }}
        />
      </AddTodoContainer>
    </>
  );
}
export default AddTodo;
