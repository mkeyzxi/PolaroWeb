import CardPolaroweb from "../ui/CardPolaroweb";

const CardCustom = ({ judul}: { judul: string }) => {
	return <div>
		<CardPolaroweb judul={judul}>
			{/* <div className="w-full aspect-[1/1] bg-gray-200 overflow-hidden">

			</div> */}
			

		</CardPolaroweb>
	</div>;
}

export default CardCustom;