import { useState, useMemo } from 'react';
import { AddBookModal } from './AddBookModal';
import type { Book } from '../types/book';
import styles from './BooksList.module.css';

interface BooksListProps {
  searchTerm: string;
  books: Book[];
  addBook: (book: { title: string; author: string; price: number }) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  onEditBook: (id: string, updates: { title?: string; author?: string; price?: number }) => Promise<void>;
  itemsPerPage?: number;
}

type SortDirection = 'asc' | 'desc' | null;

export const BooksList = ({ searchTerm, books, addBook, deleteBook, onEditBook, itemsPerPage = 10 }: BooksListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
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

  const handleEditClick = (book: Book) => {
    setEditingBook(book);
    setIsEditing(true);
  };



  const handleSaveEdit = async (updates: { title: string; author: string; price: number }) => {
    if (!editingBook) return;
    
    try {
      await onEditBook(editingBook.id, updates);
      setIsEditing(false);
      setEditingBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingBook(null);
  };

  return (
    <div className={styles.booksList}>
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />
      <AddBookModal
        isOpen={isEditing}
        onClose={handleCancelEdit}
        onAddBook={handleSaveEdit}
        onDeleteBook={editingBook ? () => deleteBook(editingBook.id) : undefined}
        book={editingBook}
        isEditing
      />
      {filteredBooks.length > 0 ? (
        <>
          <div className={styles.booksTable}>
            <div className={styles.tableHeader}>
              <div className={`${styles.headerCell} ${styles.number}`}>#</div>
              <div className={`${styles.headerCell} ${styles.title}`}>Title</div>
              <div className={`${styles.headerCell} ${styles.author}`}>Author</div>
              <div 
                className={`${styles.headerCell} ${styles.price} ${styles.sortable}`} 
                onClick={handlePriceSort}
              >
                Price
                <span className={styles.sortArrow}>
                  {priceSort === 'asc' ? '↑' : priceSort === 'desc' ? '↓' : '↕'}
                </span>
              </div>
              <div className={`${styles.headerCell} ${styles.actions}`}>Actions</div>
            </div>
            {currentItems.map((book, index) => (
              <div key={book.id} className={styles.tableRow}>
                <div className={`${styles.cell} ${styles.number}`}>{index + indexOfFirstItem + 1}</div>
                <div className={`${styles.cell} ${styles.title}`}>{book.title}</div>
                <div className={`${styles.cell} ${styles.author}`}>{book.author}</div>
                <div className={`${styles.cell} ${styles.price}`}>
                  <span className={styles.priceAmount}>${book.price.toFixed(2)}</span>
                </div>
                <div className={`${styles.cell} ${styles.actions}`}>
                  <button 
                    onClick={() => handleEditClick(book)} 
                    className={styles.editBtn}
                  >
                    Edit
                  </button>

                </div>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={styles.paginationBtn}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {currentPage} of {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={styles.paginationBtn}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noBooks}>
          {searchTerm ? 'No books found' : 'No books yet'}
        </div>
      )}
    </div>
  );
};
