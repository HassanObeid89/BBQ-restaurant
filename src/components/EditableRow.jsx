export default function EditableRow({
  editProduct,
  handleEditFormChange,
  updateProduct,
}) {
  // Function lenght (over 50)
  // This could be refactor using a json and  then using the json to build the <td><textarea/></td> dynamically

  return (
    <tr>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="name"
          value={editProduct.name}
        />
      </td>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="price"
          value={editProduct.price}
        />
      </td>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="category"
          value={editProduct.category}
        />
      </td>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="description"
          value={editProduct.description}
        />
      </td>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="imgURL"
          value={editProduct.imgURL}
        />
      </td>
      <td>
        <textarea
          onChange={handleEditFormChange}
          name="ingredients"
          value={editProduct.ingredients}
        />
      </td>
      <td>
        <button
          className="edit-button"
          onClick={() => updateProduct(editProduct)}
        >
          Save
        </button>
      </td>
    </tr>
  );
}
