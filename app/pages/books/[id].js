import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchBookById } from '../../utils/api';
import BookDetail from '../../components/BookDetail';

const BookPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (id) {
            const loadBook = async () => {
                const book = await fetchBookById(id);
                setBook(book);
            };
            loadBook();
        }
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return <BookDetail book={book} />;
};

export default BookPage;