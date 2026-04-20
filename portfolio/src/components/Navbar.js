import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Srijan Chopra</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
}

export default Navbar;