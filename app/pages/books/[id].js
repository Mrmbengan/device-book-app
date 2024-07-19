"use client";


import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchBookById, rateBook, updateShelf } from '../../utils/api';
import BookDetail from '../../components/BookDetail';

const BookPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    const [rating, setRating] = useState(0);
    const [shelfStatus, setShelfStatus] = useState('');

    useEffect(() => {
        if (id) {
            const loadBook = async () => {
                const bookData = await fetchBookById(id);
                setBook(bookData);
            };
            loadBook();
        }
    }, [id]);

    const handleRatingChange = async () => {
        try {
            await rateBook(id, rating);
        } catch (error) { 
            console.error('error rating book:', error);
        }
    }

    const handleShelfChange = async (status) => {
        try {
            setShelfStatus(status);
            await updateShelf(id, status);
        } catch (error) {
            console.error('error updating shelf:', error);
        }
    }

    if (!book) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <BookDetail book={book} />;
            <div className='mt-4'>
                <label htmlFor='rating'>Rate book:</label>
                <input
                    id='rating'
                    type='number'
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    min="1"
                    max="5"
                />
                <button onClick={handleRatingChange} className='ml-2 p-2 bg-blue-500 text-white rounded'>Rate</button>
            </div>
            <div className='mt-4'>
                <button onClick={() => handleShelfChange('currently-reading')} className='p-2 bg-blue-500 text-white rounded'>Currently Reading</button>
                <button onClick={() => handleShelfChange('want-to-read')} className='ml-2 p-2 bg-blue-500 text-white rounded'>Want to Read</button>
                <button onClick={() => handleShelfChange('read')} className='ml-2 p-2 bg-blue-500 text-white rounded'>Read</button>
            </div>

        
        </div>

    );
     
};

export default BookPage;