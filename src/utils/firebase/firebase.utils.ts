/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTZDpUYVyasd-8yJKUpWs9sobzRovnDVc",
  authDomain: "graduation-project-db-7a569.firebaseapp.com",
  projectId: "graduation-project-db-7a569",
  storageBucket: "graduation-project-db-7a569.appspot.com",
  messagingSenderId: "999057808277",
  appId: "1:999057808277:web:a895ee287634d1c70b349c",
};

export interface UserData {
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  displayName: string;
  email: string;
}

export type AdditionalInformation = {
  displayName?: string;
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export async function createUserDocumentFromAuth(
  userAuth: User,
  additionalInformation = {} as AdditionalInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export async function createAuthUserWithEmailAndPassword(
  email: string | undefined,
  password: string | undefined,
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function resetUserPassword(email: string | undefined) {
  if (!email) return;
  return await sendPasswordResetEmail(auth, email);
}

export async function signInAuthUserWithEmailAndPassword(
  email: string | undefined,
  password: string | undefined,
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const changeUserPassword = async (newpassword: string | undefined) => {
  const user = auth.currentUser;
  // console.log(user);
  if (user && newpassword !== undefined) {
    updatePassword(user, newpassword)
      .then(() => {
        return "success";
      })
      .catch(() => {
        return new Error("Please login");
      });
  }
  if (user === null) return new Error("Please login");
};

// updateProfile(auth.currentUser, {
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg",
// })
//   .then(() => {
//     // Profile updated!
//     // ...
//   })
//   .catch((error) => {
//     // An error occurred
//     // ...
//   });
