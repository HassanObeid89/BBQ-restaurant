import { collection, getDocs,addDoc } from "firebase/firestore/lite";

export async function createDoc(db, path, data) {
    const collectionReference = collection(db, path);
  
    await addDoc(collectionReference, data);
  }
 
export async function getCollection(db, path) {
  const collectionReference = collection(db, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list
}
