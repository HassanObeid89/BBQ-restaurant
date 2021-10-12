import BookTable from "../components/BookTable";
import profile from "../assets/images/profile.jpg";
import map from "../assets/images/map.png";
export default function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <section className="contact">
        <h3>Opening times</h3>
        <ul>
          <li>Monday to Friday - 10:00 to 22:00 </li>
          <li>Saturday - 11:00 to 23:00</li>
          <li>Sundays - 12:00 to 23:00</li>
        </ul>
        <h3>Book a table</h3>
        <BookTable />
        <h3>Address</h3>
        <ul>
          <li>Strandvägen 18, 114 56 Stockholm</li>
          <li>Stockholm, Sweden</li>
        </ul>
        <img src={map} alt="" />
      </section>
    </div>
  );
}
