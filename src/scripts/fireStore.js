import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { collection, doc } from "firebase/firestore/lite";
import { fireStoreInstance } from "../scripts/firebase";

export async function createDoc(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);
  console.log("Monday mentor meeting createDoc()", documentReference.id);

  return documentReference.id;
}

export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}
export async function updateDocument(path, data) {
  const documentReference = doc(fireStoreInstance, path, data.id);

  await updateDoc(documentReference, data);
}

export async function deleteDocument(path, id) {
  const docReference = doc(fireStoreInstance, path, id);

  await deleteDoc(docReference);
}
