const BookDetail = ({ book }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{book.name}</h1>
            <img src={book.coverUrl} alt={book.name} className="w-1/4"/>
            <p>{book.description}</p>
            <p><strong>Genre</strong> {book.genre}</p>
            {book.averageRating && <p><strong>Rating:</strong> {book.averageRating}</p>}
        </div>
    );
};

export default BookDetail;