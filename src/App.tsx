import './App.css'
import { useState, useEffect } from 'react';
import { doc, updateDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import { LoginButton } from './components/LoginButton'
import { BooksList } from './components/BooksList'
import { useAuth } from './hooks/useAuth'
import { AddBookModal } from './components/AddBookModal'
import { useBooks } from './hooks/useBooks'
import { useNavigate } from 'react-router-dom'

function App() {
  const { user, signOut } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState<Array<{ id: string; title: string; author: string; price: number }>>([]);
  const { addBook, deleteBook } = useBooks();
  
  // Handle book deletion with confirmation
  const handleDeleteBook = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book? This action cannot be undone.');
    if (!confirmDelete) return;
    
    try {
      await deleteBook(id);
      // Update local state to reflect the deletion
      setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
      // Optionally show an error message to the user
    }
  };
  const navigate = useNavigate();

  // Load books
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'books'));
        const booksData = querySnapshot.docs.map((doc: { id: string; data: () => any }) => ({
          id: doc.id,
          title: doc.data().title,
          author: doc.data().author,
          price: doc.data().price
        }));
        setBooks(booksData);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };

    loadBooks();
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    
    if (confirmLogout) {
      try {
        await signOut();
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    }
  }

  const handleAddBook = async (book: { title: string; author: string; price: number }) => {
    try {
      await addBook(book);
      // Refresh the books list after adding a new book
      const querySnapshot = await getDocs(collection(db, 'books'));
      const booksData = querySnapshot.docs.map((doc: { id: string; data: () => any }) => ({
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
        price: doc.data().price
      }));
      setBooks(booksData);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
      // Optionally show an error message to the user
    }
  }

  const handleEditBook = async (id: string, updates: { title?: string; author?: string; price?: number }) => {
    try {
      const bookRef = doc(db, 'books', id);
      await updateDoc(bookRef, updates);
      
      // Update local state
      setBooks((prevBooks: Array<{ id: string; title: string; author: string; price: number }>) => 
        prevBooks.map((book: { id: string; title: string; author: string; price: number }) => 
          book.id === id ? { ...book, ...updates } : book
        )
      );
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  };

  return (
    <div className="App">
      <h1>Book Store</h1>
      <h3>Discover and manage your favourite books!</h3>
      {user && (
        <div className="books-header">
          <div className="header-left">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="header-right">
            <button 
              className="add-book-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Add Book
            </button>
            <button 
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <BooksList 
        searchTerm={searchTerm} 
        books={books} 
        addBook={addBook}
        deleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
      />
      
      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />
      {!user && <LoginButton />}
    </div>
  )
}

export default App
