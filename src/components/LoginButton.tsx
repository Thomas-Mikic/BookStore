import { signInWithGoogle, signOutUser } from '../firebase.ts';
import { useAuth } from '../hooks/useAuth';

export const LoginButton = () => {
  const { user } = useAuth();

  const handleLogin = () => {
    signInWithGoogle();
  };

  const handleLogout = () => {
    signOutUser();
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout} className="login-button">
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} className="login-button">
          Login with Google
        </button>
      )}
    </div>
  );
};
