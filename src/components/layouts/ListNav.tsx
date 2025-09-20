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

import { ChevronDown } from "lucide-react";

type ListNavPropsType = {
  menu: string;
  subMenu: string[];
};

const ListNav = ({ menu, subMenu }: ListNavPropsType) => {
  return (
    <li className="relative group w-full lg:w-auto">
      <button className="flex items-center hover:text-[#DED3C4] w-full">
        {menu}
        <ChevronDown className="ml-1" />
      </button>
      <ul
        className="
          hidden group-hover:block lg:absolute  /* default hidden di desktop */
          lg:bg-[#98A1BC] lg:shadow-lg lg:p-3 lg:rounded-lg
          lg:min-w-[150px]
          lg:mt-0
          mt-2 w-full bg-transparent
          
        "
      >
        {subMenu.map((e, index) => (
          <li key={index} className="w-full">
            <a
              href="#"
              className="block px-4 py-2 text-[#F4EBD3]  hover:bg-[#DED3C4] hover:text-[#555879] rounded-md"
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
