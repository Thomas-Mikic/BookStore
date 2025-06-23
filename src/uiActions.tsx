import { useState, useEffect } from 'react';
import { signInWithGoogle, signOutUser, addDocument, getDocuments, deleteDocument } from './firebase.ts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { AddBookModal } from './components/AddBookModal';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);

    return () => unsubscribe();
  }, []);

  return { user, signInWithGoogle, signOutUser };
};

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const books = await getDocuments();
        setBooks(books);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    };

    loadBooks();
  }, []);

  const addBook = async (book: Omit<Book, 'id'>) => {
    try {
      await addDocument(book);
      // Refresh books list
      const books = await getDocuments();
      setBooks(books);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await deleteDocument(id);
      // Refresh books list
      const books = await getDocuments();
      setBooks(books);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    }
  };

  return { books, error, addBook, deleteBook };
};

export const BooksList = () => {
  const { books, error, addBook, deleteBook } = useBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (error) return <div>Error: {error.message}</div>;

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
              <button onClick={() => deleteBook(book.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const LoginButton = () => {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  const handleLogin = () => {
    signInWithGoogle();
  };

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout} className="login-button">
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className="login-button">
          Login with Google
        </button>
      )}
    </div>
  );
};
