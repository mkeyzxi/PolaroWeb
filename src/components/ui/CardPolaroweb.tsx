import type { PolaroidPropsType } from '@/utils/types-props';





const CardPolaroweb = ({ judul,  children }: PolaroidPropsType) => {
	return (
		<div className="max-w-[170px] bg-white  shadow-lg flex flex-col overflow-hidden p-5 gap-2">

			{children}

			<div className="p-4 bg-white text-center">
				<h3 className="font-bold text-lg">{judul}</h3>
				
			</div>
		</div>
	);
}
export default CardPolaroweb;


{/* <div className="w-full aspect-[1/1] bg-gray-200 overflow-hidden">
				
			</div> */}