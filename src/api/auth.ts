import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase';

export const signup = async (email: string, password: string) => {
  const auth = getAuth(app);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err: any) {
    return err.code;
  }
};

export const login = async (email: string, password: string) => {
  const auth = getAuth(app);

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err: any) {
    return err.code;
  }
};

export const signout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
