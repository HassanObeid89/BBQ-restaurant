import { Link } from "react-router-dom";
import BBQhero from "../assets/images/BBQ-hero.jpg";
export default function HomePage() {
  return (
    <div className="home-wrapper">
      <img src={BBQhero} alt="" />
      <h1>
        it’s not just Food,
        <br /> It’s an <br />
        Experience.
      </h1>
      <Link to="/menu">
        <button className="button-main">View Menu</button>
      </Link>
    </div>
  );
}
