import './App.css'
import { useState } from 'react'
import { LoginButton } from './components/LoginButton'
import { BooksList } from './components/BooksList'
import { useAuth } from './hooks/useAuth'
import { AddBookModal } from './components/AddBookModal'
import { useBooks } from './hooks/useBooks'
import { useNavigate } from 'react-router-dom'

function App() {
  const { user, signOut } = useAuth();
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { books, addBook, deleteBook } = useBooks()
  const navigate = useNavigate();

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
    await addBook(book);
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>Book Store</h1>
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
      {user && (
        <>
          <AddBookModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddBook={handleAddBook}
          />
          <BooksList 
            searchTerm={searchTerm} 
            books={books} 
            addBook={addBook} 
            deleteBook={deleteBook}
          />
        </>
      )}
      {!user && <LoginButton />}
    </div>
  )
}

export default App
