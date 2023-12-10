import { useQuery } from 'react-query';
import axios from 'axios';

// Define your GraphQL query
const GET_BOOKS = `
  query {
    books {
      title
      author
    }
  }
`;

// Define a function to fetch data
async function fetchBooks() {
  const response = await axios.post('http://localhost:4000/graphql', {
    query: GET_BOOKS,
  });

  if (response.status !== 200) {
    throw new Error('Error fetching books');
  }

  return response.data.data.books;
}

function Books() {
  const { data, status } = useQuery('books', fetchBooks);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  return data.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}

export default Books;