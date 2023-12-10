import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBooks = async (query) => {
    const GET_BOOKS = ` query {
        getBooks(title: "${query}") {
          title
          author
        }
      }`;

    const response = await axios.post('http://localhost:4000/graphql', {
        query: GET_BOOKS,
    });
    if (response.status !== 200) {
        throw new Error('Error fetching books');
    }
    return response.data.data.getBooks;
}

const GetBooks = () => {
    const [query, setQuery] = useState('The Great Gatsby');
    const { data, isLoading, error } = useQuery(['books', query], () => fetchBooks(query));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Books</h1>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {data.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default GetBooks;
