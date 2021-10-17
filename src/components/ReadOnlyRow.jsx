export default function ReadOnlyRow({ key, item, handleClick, onDelete }) {
  const { name, price, category, description, imgURL, ingredients } = item;

  return (
    <tr key={key}>
      <td>
        <textarea readOnly value={name} />
      </td>
      <td>
        <textarea readOnly value={price} />
      </td>
      <td>
        <textarea readOnly value={category} />
      </td>
      <td>
        <textarea readOnly value={description} />
      </td>
      <td>
        <textarea readOnly value={imgURL} />
      </td>
      <td>
        <textarea readOnly value={ingredients} />
      </td>
      <td>
        <button
          className="edit-button"
          onClick={(event) => handleClick(event, item.id, item)}
        >
          Edit
        </button>
        <button className="delete-button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
