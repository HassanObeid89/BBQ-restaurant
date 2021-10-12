import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h2>F<span className='red'>OO</span>DY</h2>
          </Link>
        </li>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">Menu</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
