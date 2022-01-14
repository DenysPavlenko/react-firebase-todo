import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from 'firestore';

const listsCollRef = collection(db, 'lists');

export const onListsSnapshot = (callback) => {
  const listsQuery = query(listsCollRef, orderBy('timestamp', 'asc'));
  const unsubscribe = onSnapshot(listsQuery, (querySnapshot) => {
    const lists = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(lists);
  });
  return unsubscribe;
};

export const addList = (list) => {
  addDoc(listsCollRef, {
    ...list,
    timestamp: serverTimestamp(),
  });
};

export const deleteList = (id) => {
  const listDocRef = doc(db, 'lists', id);
  deleteDoc(listDocRef);
};
