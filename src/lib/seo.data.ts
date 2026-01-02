// src/lib/seo.data.ts
// SEO configuration for each page with global trending keywords

export interface SEOData {
	title: string;
	description: string;
	keywords: string;
	canonicalPath?: string;
}

export const seoData: Record<string, SEOData> = {
	home: {
		title: 'PolaroWeb - Free Online Photobooth | Korean Photobox & Digital Polaroid',
		description:
			'Create aesthetic digital polaroid photos online. Free photobooth for weddings, graduations, events, and self studio. Trending Korean photobox style 2025!',
		keywords:
			'online photobooth, free photobooth, korean photobox, self studio, digital polaroid, wedding photobooth, graduation photobooth, event photobooth, self photo studio, AI polaroid viral 2025',
		canonicalPath: '/',
	},
	'classic-polaroid': {
		title: 'Classic Polaroid - Vintage Aesthetic Digital Polaroid Photos | PolaroWeb',
		description:
			'Create classic polaroid photos with vintage aesthetic vibes. Choose Square, Wide, or Mini format to capture precious moments in beautiful retro polaroid style.',
		keywords:
			'vintage polaroid, polaroid photo, digital polaroid, classic polaroid, aesthetic polaroid, AI polaroid, retro photo, online polaroid, free polaroid',
		canonicalPath: '/classic-polaroid',
	},
	'strip-layout': {
		title: 'Strip Layout - Korean Style Photo Strip Photobooth 3 & 4 Frames | PolaroWeb',
		description:
			'Print 3 or 4 frame photo strips like Korean photobooth. Perfect for events, parties, graduations, weddings or self studio in viral Korean photobox style 2025.',
		keywords:
			'photo strip, photobooth strip, korean photobox, event photobooth, photo strip 4 frames, self photo studio, korea photobooth, strip photo, graduation photobooth',
		canonicalPath: '/strip-layout',
	},
	'photo-prints': {
		title: 'Photo Prints - Digital Photo Print 2R 3R 4R Online | PolaroWeb',
		description:
			'Print standard size photos 2R, 3R, 4R online for free. High quality for frames, albums, or keepsakes for weddings and graduation events.',
		keywords: 'online photo print, photo prints, 2R photo, 3R photo, 4R photo, digital photo print, free photo print, print photo online',
		canonicalPath: '/photo-prints',
	},
	'creative-layouts': {
		title: 'Creative Layouts - Creative Grid Layout Photobooth 6 & 8 Frames | PolaroWeb',
		description:
			'Explore creative photo layouts with Snapshoot 6 and 8 grid. Online photobooth with innovative designs to stand out on social media.',
		keywords:
			'creative layout, photobooth grid, grid photo, unique photobooth, creative photo layout, self studio, aesthetic photobooth, snapshoot, photo collage',
		canonicalPath: '/creative-layouts',
	},
};

// Helper function to get SEO data by category
export const getSEOByCategory = (category: string): SEOData => {
	return (
		seoData[category] || {
			title: `${category} - Online Photobooth | PolaroWeb`,
			description: `Create ${category} photos with PolaroWeb - Free online photobooth for weddings, graduations, events, and self studio.`,
			keywords: 'online photobooth, digital polaroid, korean photobox, self studio',
			canonicalPath: `/${category}`,
		}
	);
};
