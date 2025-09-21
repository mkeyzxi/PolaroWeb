// import { ChevronDown } from "lucide-react";

// type ListNavPropsType = {
// 	menu: string;
// 	subMenu: string[];
// };

// const ListNav = ({ menu, subMenu }: ListNavPropsType) => {
// 	return (
// 		<li className="relative group">
// 			<button className="flex hover:text-[#DED3C4]">
// 				{menu}
// 				<ChevronDown />
// 			</button>
// 			<ul className="absolute hidden group-hover:block bg-[#98A1BC] shadow-lg p-3 rounded-lg">
// 				{subMenu.map((e, index) => (
// 					<li key={index}>
// 						<a
// 							href="#"
// 							className="block px-4 py-2 text-[#F4EBD3] hover:bg-[#DED3C4] hover:text-[#555879] rounded-md"
// 						>
// 							{e}
// 						</a>
// 					</li>
// 				))}
// 			</ul>
// 		</li>
// 	);
// };

// export default ListNav;


type ListNavPropsType = {
  menu: string;
  
};

const ListNav = ({ menu }: ListNavPropsType) => {
  return (
    <li className="relative group w-full lg:w-auto">
      <button className="flex items-center hover:text-[#DED3C4] w-full">
        {menu}
      </button>
     
    </li>
  );
};

export default ListNav;
