import { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { AddBookModal } from './AddBookModal';

export const BooksList = () => {
  const { books, addBook, deleteBook } = useBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="books-list">
      <button 
        onClick={() => setIsModalOpen(true)} 
        className="add-book-btn"
      >
        Add Book
      </button>
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={addBook}
      />
      {books.length > 0 && (
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <span>{book.title} by {book.author} - ${book.price}</span>
              <button 
                onClick={() => deleteBook(book.id)} 
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
