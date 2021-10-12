import Button from "./Button";
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
        <Button text='Submit'/>
      </form>
    </div>
  );
}
