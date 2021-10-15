export default function BookTable() {
  return (
    <div>
      <form className="bookTable">
        <label>Full Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Date</label>
        <input type="date" />
        Time
        <input type="time" />
        <button className="button-main">Book</button>
      </form>
    </div>
  );
}
