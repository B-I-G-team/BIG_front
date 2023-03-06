import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
