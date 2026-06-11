'use client'

import { Icon, IconButton } from '@ioasys/ion-react'
import { useEffect, useState } from 'react'

import { useTheme } from '@/contexts/theme'

export function ThemeToggle() {
	const { resolvedTheme, toggleTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// O tema resolvido só é conhecido no cliente; evita mismatch de hidratação
	useEffect(() => setMounted(true), [])

	const isDark = mounted && resolvedTheme === 'dark'

	return (
		<IconButton
			appearance='ghost'
			aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
			icon={<Icon name={isDark ? 'sun-medium' : 'moon-star'} />}
			onClick={toggleTheme}
			size='medium'
			title={isDark ? 'Tema claro' : 'Tema escuro'}
		/>
	)
}
