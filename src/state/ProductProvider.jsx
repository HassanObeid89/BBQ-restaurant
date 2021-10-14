// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Proeject files
import productReducer from "./productReducer";

// Properties
const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  // Local state
  const [products, dispatchProducts] = useReducer(productReducer, []);
  

  return (
    <ProductContext.Provider
      value={{ products, dispatchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}











// import {
//   useContext,
//   createContext,
//   useState,
//   useCallback,
//   useEffect,
//   useReducer,
// } from "react";
// import { getFirestore } from "firebase/firestore/lite";

// import { getCollection } from "../scripts/fireStore";
// import productReducer from "./productReducer";
// import firebaseInstance from "../scripts/firebase";

// const ProductContext = createContext(null);

// export default function ProductProvider({ children }) {
//   const [data, dispatch] = useReducer(productReducer, []);
//   const[categories,setCategories]=useState([])
//   const[products,setProducts]=useState([])
//   const [status, setStatus] = useState(0);

//   const database = getFirestore(firebaseInstance);
//   const categoryDipatch ='SET_CATEGORIES'
//   const productDipatch ='SET_PRODUCTS'
//   const getCategories = useCallback(async () => {
//     try {
//       const categories = await getCollection(database, "categories");
//       dispatch({ type: "SET_CATEGORIES", payload: categories });
//       setCategories(categories)
//       setStatus(1);
//     } catch {
//       setStatus(2);
//     }
//   }, [database]);

//   const getProducts = useCallback(async()=>{
//     try{
//       const products = await getCollection(database,'products')
//       dispatch({type:'SET_PRODUCTS',payload:products})
//       setProducts(products)
//       setStatus(1)
//     }catch{
//       setStatus(2)
//     }
//   },[database])

//   useEffect(() => {
//     getCategories();
//     getProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ products,categories, dispatch, status }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export function useProducts() {
//   const context = useContext(ProductContext);
//   return context;
// }
