import { useState, useEffect } from 'react';
import MyBooks from '../components/MyBooks';
import { fetchMyBooks } from '../utils/api'; // You need to implement this function

const MyBooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadMyBooks = async () => {
            const books = await fetchMyBooks();
            setBooks(books);
        };
        loadMyBooks();
    }, []);

    return <MyBooks books={books} />;
};

export default MyBooksPage;