import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import type { User } from 'firebase/auth';

// Create a safe navigation function that works even outside of Router
const safeNavigate = (path: string) => {
  if (typeof window !== 'undefined') {
    window.location.href = path;
  }
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  let navigate: any;
  
  try {
    // This will throw if we're not inside a Router
    navigate = useNavigate();
  } catch (e) {
    // If we're not in a Router, use safeNavigate
    navigate = safeNavigate;
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const signOut = async () => {
    try {
      const auth = getAuth();
      await firebaseSignOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { user, signOut };
};
