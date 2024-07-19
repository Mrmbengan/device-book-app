"use client";

import { useState, useEffect } from 'react';
import MyBooks from '../components/MyBooks';
import { fetchUserBooks } from '../utils/api';

const MyBooksPage = () => {
    const [books, setBooks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');

    useEffect(() => {
        const loadMyBooks = async () => {
            const books = await fetchUserBooks();
            setBooks(books);
        };
        loadUserBooks();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Books</h1>
            <select
                onChange={(e) => setStatusFilter(e.target.value)}
                value={statusFilter}
                className="mb-4 p-2 border border-gray-300 rounded"
            >
                <option value="">All</option>
                <option value="currently-reading">Currently Reading</option>
                <option value="want-to-read">Want to Read</option>
                <option value="read">Read</option>
            </select>
            <div className='book-list'>
                {books
                    .filter(book => !statusFilter || book.status === statusFilter)
                    .map(book => (
                        <div key={book.id} className='book'>
                            <img src={book.coverUrl} alt={book.name} className='w-1/4' />
                            <h2>{book.name}</h2>
                            <p>{book.description}</p>
                        </div>
                    ))}
            <MyBooks books={books} />
        </div>
        </div>
    );
};

export default MyBooksPage;