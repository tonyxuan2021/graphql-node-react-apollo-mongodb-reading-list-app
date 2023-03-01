import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

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

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
