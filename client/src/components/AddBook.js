import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK_MUTATION } from '../queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK_MUTATION);
  const [state, setState] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const displayAuthors = () => {
    return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  };

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(state);
    addBook();
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          onChange={handleChange}
          value={state.genre}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select value={state.authorId} name="authorId" onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
