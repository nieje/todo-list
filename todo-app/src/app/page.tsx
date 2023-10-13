"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/containers/AddTodo";
import TodoList from "@/containers/TodoList";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { ADDMUT, DELETEMUT, GETQUERY, UPDATEMUT } from "@/query/schema";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import _default from "next/dist/client/router";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1; /* Grow to fill remaining space */
  overflow-y: auto;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  const [createTodo] = useMutation(ADDMUT);
  const [updateTodo] = useMutation(UPDATEMUT);
  const [deleteMUT] = useMutation(DELETEMUT);

  const { loading, error, data } = useQuery(GETQUERY, {
    fetchPolicy: "no-cache",
  }); //Fetching all todos
  useEffect(() => {
    setTodos(data?.todos?.data); //Storing all the todos
  }, [data]);
  const addTodo = async (todoText: string) => {
    await createTodo({
      //Creating a new todo
      variables: {
        name: todoText, //Passing the todo text
      },
    }).then(({ data }: any) => {
      setTodos([...todos, data?.createTodo?.data] as any); //Adding the new todo to the list
    });
  };
  const editTodoItem = async (todo: any) => {
    const newName = prompt(
      "Enter new todo text or description:",
      todo.attributes.name
    );
    if (newName != null) {
      await updateTodo({
        //updating the todo
        variables: {
          id: todo.id,
          name: newName,
        },
      }).then(({ data }: any) => {
        const moddedTodos: any = todos.map((_todo: any) => {
          if (_todo.id === todo.id) {
            return data?.updateTodo?.data;
          } else {
            return _todo;
          }
        });
        setTodos(moddedTodos);
      });
    }
  };
  const deleteTodoItem = async (todo: any) => {
    if (confirm("Do you really want to delete this item?")) {
      await deleteMUT({
        //Deleting the todo
        variables: {
          id: todo.id,
        },
      }).then(({ data }: any) => {
        const newTodos = todos.filter((_todo: any) => _todo.id !== todo.id);
        setTodos(newTodos as any);
      });
    }
  };
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <ContentContainer>
        {todos && (
          <TodoList
            todos={todos}
            deleteTodoItem={deleteTodoItem}
            editTodoItem={editTodoItem}
          />
        )}
      </ContentContainer>
    </>
  );
}
