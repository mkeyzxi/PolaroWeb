type NavPropsType = {
	children?: React.ReactNode;
}

const Header = (props: NavPropsType) => {
	const { children} = props;
	return (
		<header className="bg-white shadow-md p-4 flex flex-row items-center w-full justify-between">
			<h1 className="text-2xl font-bold text-gray-800">Polaroid Generator</h1>
			{children}
		</header>
	);
}

export default Header;