import { ChevronDown } from "lucide-react";

type ListNavPropsType = {
	menu: string;
	subMenu: string[];
};

const ListNav = ({ menu, subMenu }: ListNavPropsType) => {
	return (
		<li className="relative group text-sm font-normal">
			<button className="flex justify-center items-center hover:text-[var(--color-accent)] transition-colors">
				{menu}
				<ChevronDown size={16} />
			</button>
			<ul className="absolute hidden group-hover:block bg-[var(--color-accent)] shadow-lg rounded-lg mt-0 min-w-[150px]">
				{subMenu.map((e, index) => (
					<li key={index}>
						<a
							href="#"
							className="block px-4 py-2 text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-light)] rounded-md transition-colors"
						>
							{e}
						</a>
					</li>
				))}
			</ul>
		</li>
	);
};

export default ListNav;
