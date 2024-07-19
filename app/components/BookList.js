import Link from 'next/link';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book-card">
                    <img src={book.coverUrl} alt={book.name} />
                    <h2>{book.name}</h2>
                    <p>{book.description}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    {book.averageRating && <p><strong>Rating:</strong> {book.averageRating}</p>}
                </div>
            ))}
        </div>
    );
};

export default BookList;