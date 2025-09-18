
import ListNav from "./ListNav";

// const Nav = () => {
// 	return (
// 		<nav className="p-4">
// 			<ul className="flex gap-6 text-gray-700 font-medium">
// 				<li className="relative group">
// 					<button className="hover:text-indigo-600 flex ">ClassNameic Polaroid <ChevronDown /></button>
// 					<ul className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-lg">
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Square</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Wide</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Mini</a></li>
// 					</ul>
// 				</li>
// 				<li className="relative group">
// 					<button className="hover:text-indigo-600 flex">Strip Layout <ChevronDown /></button>
// 					<ul className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-lg">
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">3 Strip</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">4 Strip</a></li>
// 					</ul>
// 				</li>
// 				<li className="relative group">
// 					<button className="hover:text-indigo-600 flex">Photo Prints <ChevronDown /></button>
// 					<ul className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-lg">
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">2R</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">3R</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">4R</a></li>
// 					</ul>
// 				</li>
// 				<li className="relative group">
// 					<button className="hover:text-indigo-600 flex">Creative Layouts <ChevronDown /></button>
// 					<ul className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-lg">
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Snapshot A</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Skapshota</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tiny</a></li>
// 						<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sovare</a></li>
// 					</ul>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }

// export default Nav;

// import { ChevronDown } from "lucide-react";


// import { useState } from "react";
const Nav = () => {
	// const [active, setActive] = useState(false);
	// {console.log(active)}
	return (
		<nav className="p-4">
			<ul className="flex gap-6 text-gray-700 font-medium">
				<li className="relative group" >

					<button className={`hover:text-indigo-600 flex`}>Beranda</button>
				</li>
				<ListNav menu="Classic Polaroid" subMenu={["Square", "Wide", "Mini"]} />
				<ListNav menu="Strip Layout" subMenu={["3 Strip", "4 Strip"]} />
				<ListNav menu="Photo Prints" subMenu={["2R", "3R", "4R"]} />
				<ListNav menu="Creative Layouts" subMenu={["Snapshot A", "Skapshota", "Tiny", "Sovare"]} />
			</ul>
		</nav>
	);
}

export default Nav;