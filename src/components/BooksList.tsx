import { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { AddBookModal } from './AddBookModal';
import type { Book } from '../types/book';

interface BooksListProps {
  searchTerm: string;
  books: Book[];
  addBook: (book: { title: string; author: string; price: number }) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  itemsPerPage?: number;
}

export const BooksList = ({ searchTerm, books, addBook, deleteBook, itemsPerPage = 10 }: BooksListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log('BooksList received books:', books);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddBook = async (book: { title: string; author: string; price: number }) => {
    try {
      await addBook(book);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
      throw error;
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id);
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  };

  return (
    <div className="books-list">
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />
      {filteredBooks.length > 0 ? (
        <>
          <div className="books-grid">
            {currentItems.map((book, index) => (
              <div key={book.id} className="book-item">
                <span>
                  {index + indexOfFirstItem + 1}. {book.title} by {book.author} - ${book.price}
                </span>
                <button 
                  onClick={() => handleDeleteBook(book.id)} 
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              Previous
            </button>
            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="no-books">
          {searchTerm ? 'No books found' : 'No books yet'}
        </div>
      )}
    </div>
  );
};
