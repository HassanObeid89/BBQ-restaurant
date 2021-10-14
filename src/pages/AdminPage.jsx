import { useProduct } from "../state/ProductProvider";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const { products } = useProduct();
  
  
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
    </div>
  );
}
