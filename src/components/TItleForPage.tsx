import { Link } from "react-router-dom";
import type { TitleForPagePropsType } from "../utils/types-props";

const TitleForPage: React.FC<TitleForPagePropsType> = ({ category, header, subHeader }) => {
	return <div className="flex flex-col mb-5 justify-center items-center md:flex-row md:justify-around px-5 gap-2 mt-22 md:mt-10 ">
		<h1 className="text-3xl font-bold md:text-left text-center mb-2">{header}</h1>
		<div className="flex flex-row justify-center md:justify-end gap-5 md:gap-7">
			{subHeader && subHeader.map((item, index) => {
				return <Link to={`/${category}/${item}`} key={index} className="inline-block  text-sm px-2 py-1  w-full text-center  font-bold my-1   text-gray-700 bg-gray-100 border-b-2 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200">{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
			})}
		</div>
	</div>;
}

export default TitleForPage;

