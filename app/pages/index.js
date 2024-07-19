"use client";


import { useState, useEffect } from 'react';
import { fetchBooks } from '../utils/api';
import BookList from '../components/BookList';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [sort, setSort] = useState('name');

    useEffect(() => {
        const loadBooks = async () => {
            const books = await fetchBooks(sort);
            setBooks(books);
        };
        loadBooks();
    }, [sort]);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Books</h1>
            <select
                onChange={(e) => setSort(e.target.value)}
                value={sort}
                className="mb-4 p-2 border border-gray-300 rounded"
            >
                <option value="name">Name</option>
                <option value="most-read">Most Read</option>
                <option value="currently-reading">Currently Reading</option>
                <option value="want-to-read">Want to Read</option>
            </select>
            <BookList books={books} />
        </div>
    );
};

export default HomePage;