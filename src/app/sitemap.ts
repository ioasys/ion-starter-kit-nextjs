import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	if (process.env.NODE_ENV !== 'production') {
		return []
	}

	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

	return [
		{
			changeFrequency: 'yearly',
			lastModified: new Date(),
			priority: 1,
			url: baseUrl,
		},
	]
}
