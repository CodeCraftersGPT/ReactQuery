import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(null); // State for error

    const booksApi = "http://localhost:4001/books";

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                const response = await axios.get(booksApi);
                setBooks(response.data);
                setLoading(false); // Loading finished
            } catch (error) {
                console.error('Error fetching books:', error);
                setError(error); // Set error state
                setLoading(false); // Loading finished
            }
        };

        fetchData();
    }, []);

    // Handling loading state
    if (loading) {
        return <p>Loading books...</p>;
    }

    // Handling error state
    if (error) {
        return <p>Error loading books!</p>;
    }

    return (
        <div>
            <h1>Traditional Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
