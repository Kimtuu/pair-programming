import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
