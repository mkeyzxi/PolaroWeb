type NavPropsType = {
	children?: React.ReactNode;
};

const Header = ({ children }: NavPropsType) => {
	return (
		<header className="bg-[#555879] shadow-md px-10 flex flex-row items-center w-full justify-between">
			<h1 className="text-2xl font-bold text-[#F4EBD3]">Polaroid Generator</h1>
			{children}
		</header>
	);
};

export default Header;
