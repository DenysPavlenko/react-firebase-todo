import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  getDoc,
} from 'firebase/firestore';

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

const db = getFirestore();
const todosCollRef = collection(db, 'todos');
const listsCollRef = collection(db, 'lists');

export default class FirebaseService {
  onListsSnapshot(callback) {
    const unsubscribe = onSnapshot(listsCollRef, (querySnapshot) => {
      const lists = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(lists);
    });
    return unsubscribe;
  }

  async addList(list) {
    await addDoc(listsCollRef, {
      ...list,
      timestamp: serverTimestamp(),
    });
  }

  async deleteList(id) {
    const listDocRef = doc(db, 'lists', id);
    await deleteDoc(listDocRef);
  }

  getTodos(callback) {
    const todosQuery = query(todosCollRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(todosQuery, (querySnapshot) => {
      const todos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(todos);
    });
    return unsubscribe;
  }

  async addTodo(todo) {
    await addDoc(todosCollRef, {
      ...todo,
      timestamp: serverTimestamp(),
    });
  }

  async toggleTodoDone(id) {
    const docRef = doc(todosCollRef, id);
    const docSnapshot = await getDoc(docRef);
    await setDoc(
      docRef,
      {
        done: !docSnapshot.data().done,
      },
      { merge: true }
    );
  }

  async deleteTodo(id) {
    const todoRef = doc(db, 'todos', id);
    await deleteDoc(todoRef);
  }
}
