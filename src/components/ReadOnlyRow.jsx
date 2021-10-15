export default function ReadOnlyRow({ key, item, handleClick, onDelete }) {
  const { name, price, category, description, imgURL, ingredients } = item;
  
  return (
    <tr key={key}>
      <td>
        <textarea value={name} />
      </td>
      <td>
        <textarea value={price} />
      </td>
      <td>
        <textarea value={category} />
      </td>
      <td>
        <textarea value={description} />
      </td>
      <td>
        <textarea value={imgURL} />
      </td>
      <td>
        <textarea value={ingredients} />
      </td>
      <td>
        <button className='edit-button' onClick={(event) => handleClick(event, item.id, item)}>
          Edit
        </button>
        <button className='delete-button' onClick={()=>onDelete(item.id)}>Delete</button>
      </td>
    </tr>
  );
}
