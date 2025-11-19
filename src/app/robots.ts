import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	if (process.env.NODE_ENV !== 'production') {
		return {
			rules: {
				disallow: '/',
				userAgent: '*',
			},
		}
	}

	return {
		rules: {
			allow: '/',
			disallow: '/admin/',
			userAgent: '*',
		},
		sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/sitemap.xml`,
	}
}
