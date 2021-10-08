import { collection, getDocs } from "firebase/firestore/lite";


 
export async function getCollection(db, path) {
  const myCollection = collection(db, path);
  const snapshot = await getDocs(myCollection);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list
}
