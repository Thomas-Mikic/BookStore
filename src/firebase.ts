import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import type { Book } from './types/book';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuyO0TJ6PSssYZjUwvLJrTMTVHavB_0n0",
  authDomain: "bookstore-c42b9.firebaseapp.com",
  projectId: "bookstore-c42b9",
  storageBucket: "bookstore-c42b9.firebasestorage.app",
  messagingSenderId: "436887994001",
  appId: "1:436887994001:web:667fb333ddd5019d830930",
  measurementId: "G-H2SM799P21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db };
export { auth };
export { provider };
export { app };
export { getDocs, collection, addDoc, deleteDoc, doc };
export type { DocumentData };

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const addDocument = async (book: Omit<Book, 'id'>) => {
  try {
    const formattedBook = {
      title: book.title,
      author: book.author,
      price: Number(book.price)
    };
    const docRef = await addDoc(collection(db, 'books'), formattedBook);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
};

export const deleteDocument = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'books', id));
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
