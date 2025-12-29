// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async'

interface SEOProps {
	title: string
	description: string
	keywords?: string
	canonicalUrl?: string
	ogImage?: string
	type?: 'website' | 'article'
}

const SEO: React.FC<SEOProps> = ({
	title,
	description,
	keywords,
	canonicalUrl = 'https://polaroweb.app',
	ogImage = '/image/polaroid-lima.avif',
	type = 'website',
}) => {
	const fullCanonicalUrl = canonicalUrl.startsWith('http')
		? canonicalUrl
		: `https://polaroweb.app${canonicalUrl}`

	return (
		<Helmet>
			{/* Primary Meta Tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<link rel="canonical" href={fullCanonicalUrl} />

			{/* Open Graph / Facebook / WhatsApp */}
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={fullCanonicalUrl} />
			<meta property="og:site_name" content="PolaroWeb" />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:alt" content={title} />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
		</Helmet>
	)
}

export default SEO
