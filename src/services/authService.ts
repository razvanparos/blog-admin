import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config.ts";
import errorMessages from "../mock-data/errorMessages.json";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (
  registerName,
  registerEmail,
  registerPassword
) => {
  if (registerEmail && registerPassword && registerName) {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      throw errorMessages[error.code];
    }
  } else throw "Fields cannot be empty";
};

export const loginUser = async (loginEmail, loginPassword, rememberMe) => {
  if (loginEmail && loginPassword) {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      localStorage.setItem("currentUser", auth?.currentUser?.uid || '');
      if (!rememberMe) {
        window.addEventListener("beforeunload", (e) => {localStorage.setItem('currentUser','')});
      } 
    } catch (error) {
      throw errorMessages[error.code];
    }
  } else {
    throw "Fields cannot be empty";
  }
};

export const logoutUser = async (navigate) => {
  try {
    await signOut(auth);
    navigate('/login')
    localStorage.removeItem('currentUser');
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
