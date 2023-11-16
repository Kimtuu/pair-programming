import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link id="nav-link" to="/">
            Home
          </Link>

          <Link id="nav-link" to="/about">
            About
          </Link>

          <Link id="nav-link" to="/services">
            Services
          </Link>

          <Link id="nav-link" to="/tours">
            Tours
          </Link>

          <Link id="nav-link" to="/registeration">
            Registeration
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
