import React, { useState } from 'react';
import { useMutation } from 'react-query';

const AddBook = () => {
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const mutation = useMutation(newBook => {
        return fetch('http://localhost:4001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        }).then(res => res.json());
    },
    {
        mutationKey: 'addBook',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(newBook);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={newBook.title}
                onChange={e => setNewBook({...newBook, title: e.target.value})}
            />
            <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={e => setNewBook({...newBook, author: e.target.value})}
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
