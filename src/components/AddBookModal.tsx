import { useState, useEffect } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: { title: string; author: string; price: number }) => Promise<void>;
}

export const AddBookModal = ({ isOpen, onClose, onAddBook }: AddBookModalProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

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
    if (!isOpen) {
      setTitle('');
      setAuthor('');
      setPrice('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Book</h2>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleSubmit} className="add-book-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="add-btn">Add Book</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};
