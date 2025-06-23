import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { addDocument, deleteDocument } from '../firebase.ts';
import type { Book } from '../types/book';
import { db } from '../firebase';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const refreshBooks = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'books'));
      const books = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title as string,
          author: data.author as string,
          price: Number(data.price)
        };
      });
      console.log("isRealdoing?", books);
      setBooks(books);
    } catch (error) {
      console.error('Error refreshing books:', error);
      throw error;
    }
  };

  useEffect(() => {
    // Initial load
    refreshBooks();
  }, []);

  const addBook = async (book: Omit<Book, 'id'>) => {
    try {
      await addDocument(book);
      await refreshBooks();
    } catch (error) {
      console.error('Error adding book:', error);
      throw error;
    }
  };

  const deleteBook = async (id: string) => {
    try {
      if (window.confirm('Are you sure you want to delete this book? This action cannot be undone.')) {
        await deleteDocument(id);
        await refreshBooks();
      }
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  };

  return { books, addBook, deleteBook };
};
