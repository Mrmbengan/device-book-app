const MyBooks = ({ books }) => {
    return (
        <ul>
            {books.map(book => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    );
};

export default MyBooks;