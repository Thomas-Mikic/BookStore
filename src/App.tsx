import './App.css'
import { LoginButton } from './components/LoginButton'
import { BooksList } from './components/BooksList'
import { useAuth } from './hooks/useAuth'

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <h1>Book Store</h1>
      <LoginButton />
      {user && <BooksList />}
    </div>
  )
}

export default App
