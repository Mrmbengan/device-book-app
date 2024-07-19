import React from 'react';
import Link from 'next/link';


const BookList = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
                <div key={book.id} className="p-4 border rounded">
                    <Link href={`/books/${book.id}`}>
                            <img src={book.coverUrl} alt={book.name} />
                            <h2>{book.name}</h2>
                            <p>{book.description}</p>
                            <p><strong>Genre:</strong> {book.genre}</p>
                            {book.averageRating && <p><strong>Rating:</strong> {book.averageRating}</p>}
                            <h2 className="text-xl font-bold">{book.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BookList;