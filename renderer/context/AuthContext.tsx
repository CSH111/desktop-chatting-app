import { useRouter } from "next/router.js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  updateProfile,
} from "../../node_modules/@firebase/auth/dist/esm2017/index.js";
// import {
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   UserCredential,
// } from "firebase/auth";
import { auth } from "../config/firebase";

type User = {
  uid: string;
  email: string;
  displayName: string;
};

// type RegisterFn = (email: string, password: string, displayName: string) => Promise<UserCredential>;
type RegisterFn = (email: string, password: string, displayName: string) => void;
type LoginFn = (email: string, password: string) => Promise<UserCredential>;
type LogoutFn = () => void;

interface AuthContextItems {
  user: User;
  register: RegisterFn;
  login: LoginFn;
  logout: LogoutFn;
}

const AuthContext = createContext<AuthContextItems | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();
  // console.log("currentUser", auth.currentUser);
  // console.log("user context", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      const { uid, email, displayName } = _user || {};
      if (_user) {
        setUser({ uid, email, displayName });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      push("/users");
      return;
    }
    push("/login");
  }, [user]);

  const register: RegisterFn = async (email, password, displayName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName });
      setUser((_user) => ({ ..._user, displayName }));
    } catch (err) {
      console.log(err);
    }
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {isLoading ? <p>Auth loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
