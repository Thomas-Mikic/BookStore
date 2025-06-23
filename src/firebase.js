import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuyO0TJ6PSssYZjUwvLJrTMTVHavB_0n0",
  authDomain: "bookstore-c42b9.firebaseapp.com",
  projectId: "bookstore-c42b9",
  storageBucket: "bookstore-c42b9.firebasestorage.app",
  messagingSenderId: "436887994001",
  appId: "1:436887994001:web:3b83cfbb07bca8ab830930",
  measurementId: "G-LXZZTVC2Z8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const collectionName = "books";

export const initAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user.email);
      } else {
        console.log('No user is signed in');
      }
    });
  };
  
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('User signed in:', result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const addDocument = async (data) => {
  try {
    console.log("Adding document");
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const getDocuments = async () => {
    try {
        const snapshot = await getDocs(collection(db, collectionName));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting documents:", error);
        throw error;
    }
};

export const deleteDocument = async (docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

