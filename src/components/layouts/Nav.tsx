
import { Link } from "react-router-dom";
import ListNav from "./ListNav";

const Nav = () => {
  return (
    <nav >
      <ul className="
        flex flex-col md:flex-row md:w-full text-lg text-left w-[200px] md:gap-16 transition-all relative   /* mobile & tablet column, desktop row */
        lg:gap-20
        font-normal md:text-sm text-[var(--color-light)]
        items-start lg:items-center
        py-4 md:py-2
      ">
        <Link to={"/classic-polaroid"}><ListNav menu="Classic Polaroid" /></Link>
        <Link to={"/strip-layout"}> <ListNav menu="Strip Layout" /></Link>

        <Link to={"/"} className="">
          <li className="relative group mx-0 lg:mx-16">
            <button className="flex hover:text-[var(--color-accent)] transition-colors text-md   font-medium">
              POLAROWEB
            </button>
          </li></Link>

        <Link to="/photo-prints"> <ListNav menu="Photo Prints" /></Link>
        <Link to="/creative-layouts"><ListNav
          menu="Creative Layouts"

        /></Link>


      </ul>
    </nav>
  );
};

export default Nav;
