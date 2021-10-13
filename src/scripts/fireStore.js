import { collection, getDocs,addDoc } from "firebase/firestore/lite";
import { fireStoreInstance } from "../scripts/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export async function createDoc(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);
  return documentReference.id
  }
  

export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference)
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list
}

// export async function getCollectiontest(){

//   const collectionReference = collection(fireStoreInstance,"products");
  
//   onSnapshot(doc(collectionReference),(snapshot)=>{
//     console.log(snapshot.data())
//   })
// }