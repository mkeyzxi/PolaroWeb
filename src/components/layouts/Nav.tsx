// import ListNav from "./ListNav";

// const Nav = () => {
// 	return (
// 		<nav>
// 			<ul className="flex lg:gap-20 font-medium text-[var(--color-light)] items-center py-4 justify-between">
// 				<ListNav menu="Classic Polaroid" subMenu={["Square", "Wide", "Mini"]} />
// 				<ListNav menu="Strip Layout" subMenu={["3 Strip", "4 Strip"]} />
// 				<li className="relative group mx-16">
// 					<button className="flex hover:text-[var(--color-accent)] transition-colors text-sm font-medium">
// 						PolaroWeb
// 					</button>
// 				</li>
// 				<ListNav menu="Photo Prints" subMenu={["2R", "3R", "4R"]} />
// 				<ListNav
// 					menu="Creative Layouts"
// 					subMenu={["Snapshot A", "Skapshota", "Tiny", "Sovare"]}
// 				/>
// 			</ul>
// 		</nav>
// 	);
// };

// export default Nav;
import { Link } from "react-router-dom";
import ListNav from "./ListNav";

const Nav = () => {
  return (
    <nav>
      <ul className="
        flex flex-col lg:flex-row   /* mobile & tablet column, desktop row */
        lg:gap-20
        font-normal text-sm text-[var(--color-light)]
        items-start lg:items-center
        py-4 lg:py-0
      ">
        <Link to={"/classic-polaroid"}><ListNav menu="Classic Polaroid" subMenu={["Square", "Wide", "Mini"]} /></Link>
        <ListNav menu="Strip Layout" subMenu={["3 Strip", "4 Strip"]} />
        <li className="relative group mx-0 lg:mx-16">
          <button className="flex hover:text-[var(--color-accent)] transition-colors text-md   font-medium">
            POLAROWEB
          </button>
        </li>
        <ListNav menu="Photo Prints" subMenu={["2R", "3R", "4R"]} />
        <ListNav
          menu="Creative Layouts"
          subMenu={["Snapshot A", "Skapshota", "Tiny", "Sovare"]}
        />
      </ul>
    </nav>
  );
};

export default Nav;
