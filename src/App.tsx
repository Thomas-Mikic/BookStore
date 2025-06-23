import './App.css'
import { useState } from 'react'
import { LoginButton } from './components/LoginButton'
import { BooksList } from './components/BooksList'
import { useAuth } from './hooks/useAuth'
import { AddBookModal } from './components/AddBookModal'
import { useBooks } from './hooks/useBooks'

function App() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { books, addBook, deleteBook } = useBooks()

  const handleAddBook = async (book: { title: string; author: string; price: number }) => {
    await addBook(book);
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <h1>Book Store</h1>
      {user && (
        <div className="books-header">
          <div>
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <button 
              className="add-book-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Add Book
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
