import { useState, useCallback, useEffect } from "react";
import { getCollection, getCollectiontest } from "../scripts/fireStore";
import { useProduct } from "../state/ProductProvider";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormCreateProduct from "../components/FormCreateProduct";
export default function AdminPage() {
  const { products, dispatch } = useProduct();
  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const path = "products";

  // Methods
  const fetchData = useCallback(
    async (path) => {
      try {
        const products = await getCollection(path);

        dispatch({ type: "SET_PRODUCTS", payload: products });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatch]
  );



  useEffect(() => {
    fetchData(path)
    // getCollectiontest()
  }, [fetchData]);
  const Rows = products.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.category}</td>
      {/* <td><img src={item.imgURL}/></td> */}
    </tr>
  ));

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Products table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>{Rows}</tbody>
      </table>
      <Link to="/addProductForm">
        <Button text="Add Product" />
      </Link>
      <FormCreateProduct />
    </div>
  );
}
