import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxlDDyuMHM7JufYVErKeAJ6THls7OP1D0',
  authDomain: 'todo-9e012.firebaseapp.com',
  projectId: 'todo-9e012',
  storageBucket: 'todo-9e012.appspot.com',
  messagingSenderId: '885184842153',
  appId: '1:885184842153:web:b4a04bc890641a4f61dcb8',
  measurementId: 'G-00MDF5LRK9',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
