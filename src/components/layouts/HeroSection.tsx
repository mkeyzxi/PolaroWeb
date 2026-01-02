import DotGrid from '../DotGrid';
import Stack from '../Stack';
import TextType from '../TextType';
import TargetCursor from '../TargetCursor';
import AnimatedContent from '../AnimatedContent';
import FadeContent from '../FadeContent';
import SEO from '../SEO';
import { seoData } from '../../lib/seo.data';
import { Link } from 'react-router-dom';

const Beranda = () => {
	const images = [
		{ id: 5, img: './image/polaroid-lima.avif' },
		{ id: 4, img: './image/polaroid-empat.avif' },
		{ id: 3, img: './image/polaroid-tiga.avif' },
		{ id: 2, img: './image/polaroid-dua.avif' },
		{ id: 1, img: './image/polaroid-satu.avif' },
	];

	return (
		<>
			<SEO
				title={seoData.home.title}
				description={seoData.home.description}
				keywords={seoData.home.keywords}
				canonicalUrl={seoData.home.canonicalPath}
			/>
			<div className="relative w-full z-1 overflow-hidden bg-[#020618] h-screen flex items-center ">
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

				<div className="relative z-10 grid gap-6 px-4 pt-20 pb-8 md:gap-8 md:grid-cols-2 md:px-12 md:pt-16 md:pb-16 lg:px-24 lg:py-24 justify-between items-center ">
					{/* Kolom Kiri */}

					<div className="flex flex-col gap-y-2 order-last md:order-first">
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
								With Polaroweb, you're free to document precious moments using a variety of unique and creative polaroid styles.
							</p>
						</FadeContent>


						{/* Tombol */}
						<div className="flex flex-col gap-4 mt-4 rounded-lg ">
							<TargetCursor spinDuration={2} hideDefaultCursor={true} />

							<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm ">
								<Link to="/classic-polaroid" className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
									Classic Polaroid
								</Link >
								<Link to="/strip-layout" className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
									Strip Layout
								</Link >
								<Link to="/photo-prints" className="cursor-target rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase text-center">
									Photo Prints
								</Link >
							</div>

							<div className="w-full">
								<Link
									to="/creative-layouts"
									className="flex w-full justify-center items-center cursor-pointer rounded-xl border border-dotted border-[var(--color-secondary)] px-6 py-3 text-[var(--color-accent)] font-extrabold uppercase"
								>
									Creative Layout
								</Link>
							</div>
						</div>
					</div>

					<div className="order-first md:order-last">
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
										width: typeof window !== 'undefined' && window.innerWidth < 640 ? 160 : 300,
										height: typeof window !== 'undefined' && window.innerWidth < 640 ? 240 : 400,
									}}
									cardsData={images}
								/>
							</div>
						</AnimatedContent>
					</div>
				</div>
			</div>
		</>
	);
};

export default Beranda;
