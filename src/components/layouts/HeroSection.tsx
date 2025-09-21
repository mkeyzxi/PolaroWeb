import DotGrid from '../DotGrid';
import Stack from '../Stack';
import TextType from '../TextType';
import TargetCursor from '../TargetCursor';
import AnimatedContent from '../AnimatedContent';
import FadeContent from '../FadeContent';

const Beranda = () => {
	const images = [
		{ id: 5, img: './image/polaroid-lima.png' },
		{ id: 4, img: './image/polaroid-empat.png' },
		{ id: 3, img: './image/polaroid-tiga.png' },
		{ id: 2, img: './image/polaroid-dua.png' },
		{ id: 1, img: './image/polaroid-satu.png' },
	];

	return (

		<div className="relative w-full z-1 overflow-hidden bg-[#020618] ">
			{/* Background */}
			<div className="absolute inset-0 z-0 ">
				<DotGrid
					dotSize={10}
					gap={15}
					baseColor="#020618"
					activeColor="#0084D1"
					proximity={120}
					shockRadius={250}
					shockStrength={5}
					resistance={750}
					returnDuration={1.5}
				/>
			</div>

			{/* Konten */}

			<div className="relative z-10 grid gap-8 px-4 py-16 md:grid-cols-2 md:px-12 lg:px-24 lg:py-24 md:h-[100vh] justify-between items-center ">
				{/* Kolom Kiri */}

				<div className="flex flex-col gap-y-2">
					<TextType
						text={[
							'Welcome to Polaroweb!',
							'Create Digital Polaroids',
							'Classic Modern Experience',
							'Capture, Create, Keep',
						]}
						typingSpeed={75}
						pauseDuration={1500}
						showCursor={true}
						cursorCharacter="|"
						className="text-2xl md:text-4xl lg:text-5xl font-bold text-white"
					/>
					<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
						<p className="mt-4 text-sm text-[var(--color-light)] md:text-base lg:text-lg">
							Dengan Polaroweb, Anda bebas mendokumentasikan momen berharga menggunakan berbagai gaya polaroid yang unik dan kreatif.
						</p>
					</FadeContent>


					{/* Tombol */}
					<div className="flex flex-col gap-4 mt-4 rounded-lg ">
						<TargetCursor spinDuration={2} hideDefaultCursor={true} />

						<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm ">
							<button className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
								Classic Polaroid
							</button>
							<button className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
								Strip Layout
							</button>
							<button className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
								Photo Prints
							</button>
						</div>

						<div className="flex justify-center">
							<button className="text-sm cursor-target w-full rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase">
								Creative Layout
							</button>
						</div>
					</div>
				</div>

				<AnimatedContent
					distance={150}
					direction="horizontal"
					reverse={false}
					duration={1.2}
					ease="bounce.out"
					initialOpacity={0.2}
					animateOpacity
					scale={1.1}
					threshold={0.2}
					delay={0.3}
				>
					{/* Kolom Kanan */}
					<div className="flex items-start md:items-center justify-center">
						<Stack
							randomRotation={true}
							sensitivity={180}
							sendToBackOnClick={false}
							// ubah width height lebih responsif
							cardDimensions={{
								width: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 300,
								height: typeof window !== 'undefined' && window.innerWidth < 640 ? 300 : 400,
							}}
							cardsData={images}
						/>
					</div>
				</AnimatedContent>
			</div>


		</div >
	);
};

export default Beranda;
