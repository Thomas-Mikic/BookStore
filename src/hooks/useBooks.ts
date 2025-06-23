import { useState, useEffect } from 'react';
import { getDocuments, addDocument, deleteDocument } from '../firebase.ts';
import type { Book } from '../types/book';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    try {
      const books = await getDocuments();
      setBooks(books);
    } catch {
      console.log("Error loading books from firestore")
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const addBook = async (book: Omit<Book, 'id'>) => {
    await addDocument(book);
    await loadBooks();
  };

  const deleteBook = async (id: string) => {
    await deleteDocument(id);
    await loadBooks();
  };

  return { books, addBook, deleteBook };
};
