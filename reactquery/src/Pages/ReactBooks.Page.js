import React from 'react';
import { useQuery } from 'react-query';

const fetchBooks = async () => {
    const response = await fetch('http://localhost:4001/books');
    return response.json();
};
const BooksRest = () => {
    const { data, isLoading, error } = useQuery('books', fetchBooks );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h1>RQ Books</h1>
            <ul>
                {data.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default BooksRest;
