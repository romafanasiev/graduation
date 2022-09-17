/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  sendPasswordResetEmail,
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
  createdAt: Date;
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

  console.log(userDocRef);

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
