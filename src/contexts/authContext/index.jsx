import { useEffect } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
      setLoading(false);
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  async function initializeUser() {
    const user = auth.currentUser;
    if (user) {
      setCurrentuser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentuser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  async function logout() {
    return auth.signOut();
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
