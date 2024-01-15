import React from 'react';
import { useQuery } from 'react-query';

const fetchBooks = async () => {
    const response = await fetch('http://localhost:4001/books');
    return response.json();
};
const BooksRest = () => {
    const { data, isLoading, error,refetch,isFetching  } = useQuery('books', fetchBooks, { 
        refetchOnWindowFocus: false ,
        
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isFetching) {
        return <div>Fetching...</div>;
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
            {/* add button to refetch the content using the refetch */}
            <button onClick={()=>refetch()}>Refetch</button>
        </div>
    );
};
export default BooksRest;
