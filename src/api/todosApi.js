import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  setDoc,
  serverTimestamp,
  query,
} from 'firebase/firestore';
import { db } from 'firestore';

const todosCollRef = collection(db, 'todos');

export const onTodosSnapshot = (callback) => {
  const todosQuery = query(todosCollRef, orderBy('timestamp', 'asc'));
  const unsubscribe = onSnapshot(todosQuery, (querySnapshot) => {
    const todos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(todos);
  });
  return unsubscribe;
};

export const addTodo = (todo) => {
  addDoc(todosCollRef, {
    ...todo,
    timestamp: serverTimestamp(),
  });
};

export const toggleTodoComplete = (id, checked) => {
  const docRef = doc(todosCollRef, id);
  setDoc(
    docRef,
    {
      completed: checked,
    },
    { merge: true }
  );
};

export const deleteTodo = (id) => {
  const todoRef = doc(db, 'todos', id);
  deleteDoc(todoRef);
};
