import React from 'react';
import { useQuery } from 'react-query';

// https://react-query.tanstack.com/guides/rest-queries
// https://react-query.tanstack.com/reference/useQuery
// https://react-query.tanstack.com/guides/query-cancellation
// https://react-query.tanstack.com/guides/paginated-queries
// https://react-query.tanstack.com/guides/query-retries
// https://react-query.tanstack.com/guides/query-invalidation
// https://react-query.tanstack.com/guides/query-refetching
// https://react-query.tanstack.com/guides/query-intervals
// https://react-query.tanstack.com/guides/query-polling
// https://react-query.tanstack.com/guides/query-filters
// https://react-query.tanstack.com/guides/query-keys
// https://react-query.tanstack.com/guides/query-caching
// https://react-query.tanstack.com/guides/query-suspense
// https://react-query.tanstack.com/guides/query-prefetching
// https://react-query.tanstack.com/guides/query-side-effects

// define fetchBooks async function to get data from API

// useQuery hook to get data from API

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
            <h1>Books</h1>
            <ul>
                {data.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BooksRest;
