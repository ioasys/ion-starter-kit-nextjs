import type { Metadata, Viewport } from 'next'
import '@/styles/global.css'

import { ThemeProvider } from '@/contexts/theme'

export const viewport: Viewport = {
	initialScale: 1,
	themeColor: [
		{ color: '#ffffff', media: '(prefers-color-scheme: light)' },
		{ color: '#0a0a0b', media: '(prefers-color-scheme: dark)' },
	],
	width: 'device-width',
}

/**
 * Aplica o tema antes da hidratação para evitar flash de tema
 * incorreto (FOUC). Sem valor salvo, resolve pelo prefers-color-scheme
 * do sistema — o data-theme fica sempre explícito para o variant
 * dark: do Tailwind funcionar em ambos os casos.
 */
const themeInitScript = `try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}`

export const metadata: Metadata = {
	description:
		'A starter kit for building applications with @ioasys/ion-react and Next.js.',
	openGraph: {
		description:
			'A starter kit for building applications with @ioasys/ion-react and Next.js.',
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
			'A starter kit for building applications with @ioasys/ion-react and Next.js.',
		title: 'Ion Starter Kit',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: script estático de inicialização do tema, sem dados externos */}
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body className='antialiased'>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
