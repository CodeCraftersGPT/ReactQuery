import React from 'react';
import { useQuery } from 'react-query';

async function fetchBooks() {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            books {
              id
              title
              author
            }
          }
        `,
      }),
    });
  
    const { data } = await response.json();
    return data.books;
  }
  

const GraphQLBooks = () => {
  const { isLoading, error, data } = useQuery('graphqlbooks', fetchBooks);

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphQLBooks;
