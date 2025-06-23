import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import type { Book } from './uiActions';

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
    const docRef = await addDoc(collection(db, 'books'), book);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
};

export const getDocuments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'books'));
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        author: data.author,
        price: data.price
      };
    });
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
};

export const deleteDocument = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'books', id));
    return true;
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
