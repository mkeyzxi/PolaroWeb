
import { ChevronDown } from "lucide-react";
type ListNavPropsType = {
	menu: string,
	subMenu: string[];
}

const ListNav = (props: ListNavPropsType) => {
	
	const { menu, subMenu } = props;
	return (
		<li className="relative group" >
			
			<button className={`hover:text-indigo-600 flex`}>{menu}<ChevronDown /></button>
			<ul className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-lg">
				{/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">{subMenu}</a></li>
				<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">{subMenu}</a></li>
				<li><a href="#" className="block px-4 py-2 hover:bg-gray-100">{subMenu}</a></li> */}

				{subMenu.map((e, index) => {
					return (<li key={index}><a href="#" className="block px-4 py-2 hover:bg-gray-100">{e}</a></li>
					)
				})}
			</ul>
		</li>
	)
}

export default ListNav;