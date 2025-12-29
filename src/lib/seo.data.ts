// src/lib/seo.data.ts
// SEO configuration untuk setiap halaman dengan keywords trending Indonesia

export interface SEOData {
	title: string;
	description: string;
	keywords: string;
	canonicalPath?: string;
}

export const seoData: Record<string, SEOData> = {
	home: {
		title: 'PolaroWeb - Photobooth Online Gratis | Korean Photobox & Polaroid Digital',
		description:
			'Buat foto polaroid digital estetik secara online. Photobooth gratis untuk pernikahan, wisuda, event, dan self studio. Gaya korean photobox terkini 2025!',
		keywords:
			'photobooth online, photobooth gratis, korean photobox, self studio, polaroid digital, photobooth pernikahan, photobooth wisuda, photobooth event, self photo studio, AI polaroid viral 2025',
		canonicalPath: '/',
	},
	'classic-polaroid': {
		title: 'Classic Polaroid - Foto Polaroid Digital Vintage Aesthetic | PolaroWeb',
		description:
			'Buat foto polaroid classic dengan nuansa vintage aesthetic. Pilih format Square, Wide, atau Mini untuk mengabadikan momen berharga ala polaroid jadul yang estetik.',
		keywords:
			'polaroid vintage, foto polaroid, polaroid digital, classic polaroid, polaroid aesthetic, AI polaroid, foto jadul, polaroid online, polaroid gratis',
		canonicalPath: '/classic-polaroid',
	},
	'strip-layout': {
		title: 'Strip Layout - Photo Strip Photobooth Korea 3 & 4 Kotak | PolaroWeb',
		description:
			'Cetak foto strip 3 atau 4 kotak seperti photobooth Korea. Sempurna untuk event, party, wisuda, pernikahan atau self studio ala korean photobox viral 2025.',
		keywords:
			'photo strip, photobooth strip, korean photobox, photobooth event, photo strip 4 kotak, self photo studio, photobooth korea, foto strip, photobooth wisuda',
		canonicalPath: '/strip-layout',
	},
	'photo-prints': {
		title: 'Photo Prints - Cetak Foto Digital 2R 3R 4R Online | PolaroWeb',
		description:
			'Cetak foto ukuran standar 2R, 3R, 4R secara online gratis. Kualitas tinggi untuk bingkai, album, atau kenang-kenangan event pernikahan dan wisuda.',
		keywords: 'cetak foto online, photo prints, foto 2R, foto 3R, foto 4R, cetak foto digital, cetak foto gratis, print foto online',
		canonicalPath: '/photo-prints',
	},
	'creative-layouts': {
		title: 'Creative Layouts - Photobooth Grid Layout Kreatif 6 & 8 Kotak | PolaroWeb',
		description:
			'Eksplorasi layout foto kreatif dengan Snapshoot 6 dan 8 grid. Photobooth online dengan desain inovatif untuk tampil beda di social media.',
		keywords:
			'creative layout, photobooth grid, foto grid, photobooth unik, layout foto kreatif, self studio, photobooth aesthetic, snapshoot, foto collage',
		canonicalPath: '/creative-layouts',
	},
};

// Helper function untuk mendapatkan SEO data berdasarkan category
export const getSEOByCategory = (category: string): SEOData => {
	return (
		seoData[category] || {
			title: `${category} - Photobooth Online | PolaroWeb`,
			description: `Buat foto ${category} dengan PolaroWeb - Photobooth online gratis untuk pernikahan, wisuda, event, dan self studio.`,
			keywords: 'photobooth online, polaroid digital, korean photobox, self studio',
			canonicalPath: `/${category}`,
		}
	);
};
