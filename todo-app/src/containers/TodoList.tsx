"use client";
import styled from "styled-components";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import { DetailsPopup } from "@/components/Popup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoListContainer = styled.div`
  width: 500px;
`;

const ListWrapper = styled.div``;

interface ListTodo {
  todos: any;
  editTodoItem: any;
  deleteTodoItem: any;
}

function TodoList({ todos, editTodoItem, deleteTodoItem }: ListTodo) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  if (typeof document !== "undefined") {
    if (isPopupOpen) {
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
                ?.sort((a: any, b: any) =>
                  b.attributes.createdAt.localeCompare(a.attributes.createdAt)
                )
                .map((todo: any) => {
                  return (
                    <>
                      <DetailsPopup
                        isOpen={isPopupOpen}
                        clickHandlerClose={() => setPopupOpen(false)}
                        todo={todo}
                        key={"popup" + todo.id}
                      />

                      <TodoItem
                        todo={todo}
                        key={todo.id}
                        deleteTodoItem={deleteTodoItem}
                        editTodoItem={editTodoItem}
                        handlePopupClick={() => setPopupOpen(true)}
                      />
                    </>
                  );
                })}
            </div>
          )}
        </ListWrapper>
      </TodoListContainer>
    </>
  );
}
export default TodoList;
