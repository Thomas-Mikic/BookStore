import { useState, useEffect } from 'react';

import type { Book } from '../types/book';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: { title: string; author: string; price: number }) => Promise<void>;
  onDeleteBook?: (id: string) => Promise<void>;
  book?: Book | null;
  isEditing?: boolean;
}

export const AddBookModal = ({ isOpen, onClose, onAddBook, onDeleteBook, book, isEditing = false }: AddBookModalProps) => {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [price, setPrice] = useState(book?.price.toString() || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author && price) {
      try {
        const bookData = { title, author, price: Number(price) };
        await onAddBook(bookData);
        setTitle('');
        setAuthor('');
        setPrice('');
        onClose();
      } catch (error) {
        console.error('Error adding book:', error);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTitle(book?.title || '');
      setAuthor(book?.author || '');
      setPrice(book?.price.toString() || '');
    } else {
      setTitle('');
      setAuthor('');
      setPrice('');
    }
  }, [isOpen, book]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isEditing ? 'Edit Book' : 'Add New Book'}</h2>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit} className="add-book-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              required
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author's name"
              required
            />
          </div>
          <div className="form-group">
            <label>Price ($):</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price ($)"
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="add-btn">
              {isEditing ? 'Update Book' : 'Add Book'}
            </button>
            {isEditing && onDeleteBook && (
              <button 
                type="button" 
                onClick={async (e) => {
                  e.stopPropagation();
                  if (book?.id) {
                    try {
                      await onDeleteBook?.(book.id);
                      onClose();
                    } catch (error) {
                      console.error('Error deleting book:', error);
                    }
                  }
                }} 
                className="delete-btn"
              >
                Delete Book
              </button>
            )}
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
