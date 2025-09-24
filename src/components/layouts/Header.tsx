// type NavPropsType = {
// 	children?: React.ReactNode;
// };

// const Header = ({ children }: NavPropsType) => {
// 	return (
// 		<header className="bg-[var(--color-primary)] shadow-md flex  justify-center rounded-full fixed top-2 right-2 left-2 z-50">

// 			{children}
// 		</header>
// 	);
// };

// export default Header;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type NavPropsType = {
	children?: React.ReactNode;
};

const Header = ({ children }: NavPropsType) => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-[var(--color-primary)]  flex items-center justify-between rounded-full fixed top-2 mx-auto w-full  z-50 px-4  ">
			{/* Logo / Brand */}
			<div className="text-white font-bold  py-3 md:hidden">PolaroWeb</div>

			{/* Tombol hamburger untuk tablet & mobile */}
			<button
				className="lg:hidden text-white p-2"
				onClick={() => setOpen(!open)}
			>
				{open ? <X /> : <Menu />}
			</button>

			{/* Navigasi desktop */}
			<div className="hidden lg:block mx-auto  bg-[var(--color-primary)] backdrop-blur-md border border-solid  shadow-md px-5 py-2 rounded-full">{children}</div>

			{/* Navigasi tablet & mobile */}
			{open && (
				<div className="absolute top-full left-0 right-0 bg-[var(--color-primary)] rounded-b-2xl shadow-md lg:hidden ">
					{children}
				</div>
			)}
		</header>
	);
};

export default Header;
