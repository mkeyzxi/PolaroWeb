type NavPropsType = {
	children?: React.ReactNode;
};

const Header = ({ children }: NavPropsType) => {
	return (
		<header className="bg-[var(--color-primary)] shadow-md flex  justify-center rounded-full fixed top-2 right-2 left-2">
			
			{children}
		</header>
	);
};

export default Header;
