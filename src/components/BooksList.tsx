import { useState, useMemo } from 'react';
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

type SortDirection = 'asc' | 'desc' | null;

export const BooksList = ({ searchTerm, books, addBook, deleteBook, itemsPerPage = 10 }: BooksListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceSort, setPriceSort] = useState<SortDirection>(null);

  console.log('BooksList received books:', books);

  const filteredBooks = useMemo(() => {
    let result = [...books].filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply price sorting if enabled
    if (priceSort) {
      result.sort((a, b) => 
        priceSort === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    return result;
  }, [books, searchTerm, priceSort]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePriceSort = () => {
    setCurrentPage(1); // Reset to first page when changing sort
    setPriceSort(prev => {
      if (prev === null) return 'asc';
      if (prev === 'asc') return 'desc';
      return null;
    });
  };

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
          <div className="books-table">
            <div className="table-header">
              <div className="header-cell number">#</div>
              <div className="header-cell title">Title</div>
              <div className="header-cell author">Author</div>
              <div 
                className="header-cell price sortable" 
                onClick={handlePriceSort}
              >
                Price
                {priceSort && (
                  <span className="sort-arrow">
                    {priceSort === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
              <div className="header-cell actions">Actions</div>
            </div>
            {currentItems.map((book, index) => (
              <div key={book.id} className="table-row">
                <div className="cell number">{index + indexOfFirstItem + 1}</div>
                <div className="cell title">{book.title}</div>
                <div className="cell author">{book.author}</div>
                <div className="cell price">${book.price}</div>
                <div className="cell actions">
                  <button 
                    onClick={() => handleDeleteBook(book.id)} 
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
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
