import { useState } from "react";
import { Link } from "react-router-dom";
import { updateDocument, deleteDocument } from "../scripts/fireStore";

import { useProduct } from "../state/ProductProvider";
import EditableRow from "../components/EditableRow";
import ReadOnlyRow from "../components/ReadOnlyRow";
export default function AdminPage() {
  const { dispatchProducts } = useProduct();
  const { products } = useProduct();
  const [editProduct, setEditProduct] = useState(null);
  const [editProductId, setEditProductId] = useState(null);

  function handleEditFormChange(event) {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editProduct };
    newFormData[fieldName] = fieldValue;
    setEditProduct(newFormData);
  }
  function findProduct(products, id) {
    const existingProduct = products.find((item) => item.id === id);
    setEditProduct(existingProduct);
    setEditProductId(existingProduct.id);
  }

  function handleClick(event, id, item) {
    event.preventDefault();
    findProduct(products, id);
    const formValues = {
      id: item.id,
      name: item.name,
      price: item.price,
      imgURL: item.imgURL,
      category: item.category,
      description: item.description,
      ingredients: item.ingredients,
    };
    setEditProduct(formValues);
  }

  async function updateProduct(editProduct) {
    await updateDocument("products", editProduct);
    dispatchProducts({ type: "UPDATE_PRODUCT", payload: products });
  }

  async function onDelete(id) {
    await deleteDocument("products", id);
    alert("deleted");
    dispatchProducts({ type: "DELETE_PRODUCT", payload: products });
  }

  const Rows = products.map((item, index) => (
    <>
      {editProductId === item.id ? (
        <EditableRow
          editProduct={editProduct}
          handleEditFormChange={handleEditFormChange}
          updateProduct={updateProduct}
          item={item}
        />
      ) : (
        <ReadOnlyRow
          key={index}
          handleClick={handleClick}
          item={item}
          onDelete={onDelete}
        />
      )}
    </>
  ));

  return (
    <div className="admin-page">
      <h2>Products table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>ImgURL</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{Rows}</tbody>
      </table>
      <Link to="/addProductForm">
        <button className="button-main">Add Product</button>
      </Link>
    </div>
  );
}
