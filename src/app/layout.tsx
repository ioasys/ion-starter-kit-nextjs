import type { Metadata, Viewport } from 'next'
import '@/styles/global.css'

export const viewport: Viewport = {
	initialScale: 1,
	themeColor: '#ffffff',
	width: 'device-width',
}

export const metadata: Metadata = {
	description:
		'A starter kit for building applications with @ioasys/ion and Next.js.',
	openGraph: {
		description:
			'A starter kit for building applications with @ioasys/ion and Next.js.',
		locale: 'pt_BR',
		siteName: 'Ion Starter Kit',
		title: 'Ion Starter Kit',
		type: 'website',
		url: 'https://ion.ioasys.com.br',
	},
	title: {
		default: 'Ion Starter Kit',
		template: '%s | Ion Starter Kit',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@ioasys',
		description:
			'A starter kit for building applications with @ioasys/ion and Next.js.',
		title: 'Ion Starter Kit',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR'>
			<body className='antialiased'>{children}</body>
		</html>
	)
}
