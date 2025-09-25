import type { TitleForPagePropsType } from "../utils/types-props";

const TitleForPage: React.FC<TitleForPagePropsType> = ({category, header, subHeader }) => {
	return <div className="flex flex-col mb-5 justify-center items-center md:flex-row md:justify-around px-5 gap-2 mt-5">
		<h1 className="text-3xl font-bold md:text-left text-center mb-2">{header}</h1>
		<div className="flex flex-row justify-center md:justify-end gap-5 md:gap-7">
			{subHeader && subHeader.map((item, index) => {
			return <a href={`/${category}/${item}`} key={index} className="inline-block  text-sm px-2 py-1  w-full text-center  font-bold my-1   text-gray-700 bg-gray-100 border-b-2 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">{item.charAt(0).toUpperCase() + item.slice(1)}</a>
		})}
		</div>
	</div>;
}

export default TitleForPage;


// import type { TitleForPagePropsType } from "../utils/types-props";
// import React from "react";

// const TitleForPage: React.FC<TitleForPagePropsType> = ({ header, subHeader }) => {
//   return (
//     <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-10 py-4 mb-6 border-b border-gray-200">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-900 text-center md:text-left">
//         {header}
//       </h1>

//       {/* SubHeader Pills */}
//       {subHeader && (
//         <div className="mt-3 md:mt-0 flex flex-wrap justify-center md:justify-end gap-3">
//           {subHeader.map((item, index) => (
//             <a
//               href={`/card/${item}`}
//               key={index}
//               className=""
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TitleForPage;
