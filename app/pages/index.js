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
        <div>
            <h1>Books</h1>
            <select onChange={(e) => setSort(e.target.value)} value={sort}>
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