import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation addBookMutation {
    addBook(name: "", genre: "", authorId: "") {
      name
      id
    }
  }
`;

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK_MUTATION };
