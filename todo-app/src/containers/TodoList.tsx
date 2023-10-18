"use client";
import styled from "styled-components";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import { DetailsPopup } from "@/components/Popup";

const TodoListContainer = styled.div`
  width: 600px;
`;

const ListWrapper = styled.div``;

interface ListTodo {
  todos: any;
  editTodoItem: any;
  deleteTodoItem: any;
}

function TodoList({ todos, editTodoItem, deleteTodoItem }: ListTodo) {
  const [selectedTodo, setSelectedTodo] = useState(null);

  if (typeof document !== "undefined") {
    if (selectedTodo) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }

  return (
    <>
      <TodoListContainer>
        <ListWrapper>
          {todos && (
            <div>
              {todos
                .sort((a: any, b: any) =>
                  b.attributes.createdAt.localeCompare(a.attributes.createdAt)
                )
                .map((todo: any) => {
                  return (
                    <>
                      <TodoItem
                        todo={todo}
                        key={todo.id}
                        deleteTodoItem={deleteTodoItem}
                        editTodoItem={editTodoItem}
                        handlePopupClick={() => {
                          setSelectedTodo(todo);
                        }}
                      ></TodoItem>
                    </>
                  );
                })}
            </div>
          )}
        </ListWrapper>
      </TodoListContainer>
      {selectedTodo && (
        <DetailsPopup
          isOpen={true} // Open the popup when there's a selectedTodo
          clickHandlerClose={() => setSelectedTodo(null)}
          todo={selectedTodo}
        />
      )}
    </>
  );
}
export default TodoList;
