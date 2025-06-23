import './style.css'
import { signInWithGoogle, signOutUser, addDocument, getDocuments, deleteDocument } from './firebase.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize auth state listener
const auth = getAuth();

// Whenever the login state changes, change the ui to show the correct data
onAuthStateChanged(auth, (user) => {
  updateUI(user);
});

// Load and display books
async function loadAndDisplayBooks() {
  try {
    //get the books from firestores database
    const books = await getDocuments();
    //get the book list element from html
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';
    
    //for each book, create a book item and add it to the book list
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';
      bookItem.innerHTML = `
        <span>${book.title} by ${book.author} - $${book.price}</span>
        <button onclick="handleDeleteBook('${book.id}')" class="delete-btn">Delete</button>
      `;
      //add the button for each book div thing, called handleDeleteBook
      booksList.appendChild(bookItem);
    });
  } catch (error) {
    console.error('Error loading books:', error);
    alert('Error loading books. Please try again.');
  }
}

// Delete book handler
window.handleDeleteBook = async (bookId) => {
    try {
        //for each book when we load them weve added the button in the html, now on click will delete book given its id
      await deleteDocument(bookId);
      loadAndDisplayBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Error deleting book. Please try again.');
    }
  };

// Update UI based on auth state
function updateUI(user) {
  const authContainer = document.getElementById('auth-container');
  const booksContainer = document.getElementById('books-container');
  
  //if signed in dont show the login button and vice versa
  if (user) {
    authContainer.style.display = 'none';
    booksContainer.style.display = 'block';
    loadAndDisplayBooks();
  } else {
    authContainer.style.display = 'block';
    booksContainer.style.display = 'none';
  }
}

// Google Sign-In button
document.getElementById('google-signin-btn').addEventListener('click', async () => {
  try {
    await signInWithGoogle();
  } catch (error) {
    console.error('Error signing in with Google:', error);
    alert('Error signing in with Google. Please try again.');
  }
});

// Logout button
document.getElementById('logout-btn').addEventListener('click', async () => {
  try {
    await signOutUser();
  } catch (error) {
    console.error('Error signing out:', error);
    alert('Error signing out. Please try again.');
  }
});

// Add book button
document.getElementById("add-book-btn").addEventListener('click', async () => {
  try {
    await addDocument({
      title: document.getElementById("book-title").value,
      author: document.getElementById("book-author").value,
      price: document.getElementById("book-price").value
    });
    loadAndDisplayBooks();
  } catch (error) {
    console.error('Error adding a book!:', error);
    alert('Error adding a book! Please try again.');
  }
});

