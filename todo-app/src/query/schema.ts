// src/query/schema.ts
import { gql } from "@apollo/client";

export const GETQUERY = gql`
  {
    todos(sort: "id:desc") {
      data {
        id
        attributes {
          name
          description
          deadline
          createdAt 
        }
      }
    }
  }
`;

export const ADDMUT = gql`
  mutation createTodo($name: String) {
    createTodo(data: { name: $name }) {
      data {
        id
        attributes {
          name
          description
          deadline
          createdAt
        }
      }
    }
  }
`;

export const UPDATEMUT = gql`
  mutation updateTodo($id: ID!, $name: String!) {
    updateTodo(id: $id, data: { name: $name }) {
      data {
        id
        attributes {
          name
          description
          deadline
          createdAt
        }
      }
    }
  }
`;

export const DELETEMUT = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      data {
        id
        attributes {
          name
          description
          deadline
          createdAt
        }
      }
    }
  }
`;