import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';


async function addBookMutation(book) {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation AddBook($input: BookInput!) {
            addBook(input: $input) {
              id
              title
              author
            }
          }
        `,
        variables: {
          input: book
        }
      }),
    });
  
    const { data } = await response.json();
    return data.addBook;
  }

  

const GraphQLAddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const queryClient = useQueryClient();

  // useMutation hook
  const mutation = useMutation(addBookMutation, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('books');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default GraphQLAddBook;
