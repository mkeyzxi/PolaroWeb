import ListNav from "./ListNav";

const Nav = () => {
	return (
		<nav className="p-4 bg-[#555879]">
			<ul className="flex gap-6 font-medium text-[#F4EBD3]">
				<li className="relative group">
					<button className="flex hover:text-[#DED3C4]">Beranda</button>
				</li>
				<ListNav menu="Classic Polaroid" subMenu={["Square", "Wide", "Mini"]} />
				<ListNav menu="Strip Layout" subMenu={["3 Strip", "4 Strip"]} />
				<ListNav menu="Photo Prints" subMenu={["2R", "3R", "4R"]} />
				<ListNav menu="Creative Layouts" subMenu={["Snapshot A", "Skapshota", "Tiny", "Sovare"]} />
			</ul>
		</nav>
	);
};

export default Nav;
