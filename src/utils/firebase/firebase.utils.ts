/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  UserInfo,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  collection,
  writeBatch,
  query,
  getDocs,
  getDocsFromCache,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Category } from "../../store/messages/messages.types";
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
  uid: string;
  photoURL: string | null;
}

export type AdditionalInformation = {
  displayName?: string;
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();

// creating Database
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[],
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (
  category: string,
): Promise<Category[]> => {
  const collectionRef = collection(db, category);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category,
  );
};

// creating User

export async function createUserDocumentFromAuth(
  userAuth: UserInfo,
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

export const onAuthStateChangedListener = (
  callback: NextOrObserver<UserInfo>,
) => onAuthStateChanged(auth, callback);

export const changeUserPassword = async (newpassword: string | undefined) => {
  const user = auth.currentUser;
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

export const uploadUserPhoto = async (file: File) => {
  const user = auth.currentUser;
  const { uid } = user as UserInfo;
  const path = `avatars/${uid}/avatar`;
  const storageRef = ref(storage, path);
  let imageUrl;
  await uploadBytes(storageRef, file).then(async () => {
    imageUrl = await getDownloadURL(storageRef);
  });

  if (user !== null) {
    updateProfile(user, {
      photoURL: `${imageUrl}`,
    })
      .then(() => {
        console.log("photo updated");
      })
      .catch((error) => {
        console.log("photo update error");
      });
  }

  return imageUrl;
};
