// src/components/pages/CustomPage.tsx 
import { useParams } from "react-router-dom";
import TitleForPage from "../TItleForPage";
import CardPolaroweb from "../ui/CardPolaroweb";
import { useState, useEffect } from "react";
import { dataPolaroid } from "@/lib/data.d";

const CustomPage = () => {
	const { category } = useParams<{ category: string }>();

	const [header, setHeader] = useState<string>("");
	const [subHeader, setSubHeader] = useState<string[]>([]);
	const [description, setDescription] = useState<string>("");

	// ambil data berdasarkan kategori dari URL
	useEffect(() => {
		if (category && dataPolaroid[category]) {
			const cat = dataPolaroid[category];
			setHeader(cat.header ?? category);
			setSubHeader(cat.items);
			setDescription(cat.description);
		} else {
			setHeader("Kategori tidak ditemukan");
			setSubHeader([]);
			setDescription("");
		}
	}, [category]);

	// fungsi layout props
	const getLayoutProps = (item: string) => {
		// default
		let props = {
			count: 1,
			aspect: "aspect-[1/1]",
			containerClass: "flex gap-2 flex-col", // default container
		};

		if (item.includes("3 Strip")) {
			props = { count: 3, aspect: "aspect-[1/1]", containerClass: "flex gap-2 flex-col" };
		} else if (item.includes("4 Strip")) {
			props = { count: 4, aspect: "aspect-[1/1]", containerClass: "flex gap-2 flex-col" };
		} else if (item.includes("Snapshoot 6")) {
			props = { count: 6, aspect: "aspect-[1/1]", containerClass: "grid grid-cols-2 gap-2" };
		} else if (item.includes("Snapshoot 8")) {
			props = { count: 8, aspect: "aspect-[1/1]", containerClass: "grid grid-cols-2 gap-2" };
			// 👆 grid-cols-2 sesuai permintaan
		} else if (item.toLowerCase().includes("classic")) {
			props = { count: 1, aspect: "aspect-[1/1]", containerClass: "flex gap-2 flex-col" };
		}

		return props;
	};

	

	return (
		<main className="py-16">
			<TitleForPage {...{category, header, subHeader }} />
			<h3 className="text-lg md:text-xl font-medium text-gray-700 text-center max-w-3xl mx-auto my-5">
				{description}
			</h3>
			<div className="gap-10 justify-center flex flex-wrap items-start">
				{subHeader.map((item, index) => {
					const { count, aspect, containerClass } = getLayoutProps(item);
					return (
						<CardPolaroweb key={index} judul={item}>
							<div className={containerClass}>
								{Array.from({ length: count }).map((_, i) => (
									<div
										key={i}
										className={`w-full ${aspect} bg-slate-300 overflow-hidden`}
									></div>
								))}
							</div>
						
						</CardPolaroweb>
					);
				})}
			</div>
		</main>
	);
};

export default CustomPage;
