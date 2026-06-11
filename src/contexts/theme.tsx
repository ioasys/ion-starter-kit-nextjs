'use client'

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

type ThemeContextValue = {
	theme: Theme
	resolvedTheme: ResolvedTheme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const getSystemTheme = (): ResolvedTheme =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'

const getStoredTheme = (): Theme => {
	if (typeof window === 'undefined') return 'system'
	const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
	return stored === 'light' || stored === 'dark' ? stored : 'system'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(getStoredTheme)
	const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

	const resolvedTheme = theme === 'system' ? systemTheme : theme

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const onChange = (event: MediaQueryListEvent) =>
			setSystemTheme(event.matches ? 'dark' : 'light')
		mediaQuery.addEventListener('change', onChange)
		return () => mediaQuery.removeEventListener('change', onChange)
	}, [])

	useEffect(() => {
		// data-theme sempre explícito: o variant dark: do Tailwind só
		// reage a [data-theme="dark"], não ao prefers-color-scheme
		document.documentElement.dataset.theme = resolvedTheme
		if (theme === 'system') {
			window.localStorage.removeItem(THEME_STORAGE_KEY)
		} else {
			window.localStorage.setItem(THEME_STORAGE_KEY, theme)
		}
	}, [theme, resolvedTheme])

	const setTheme = useCallback((next: Theme) => setThemeState(next), [])

	const toggleTheme = useCallback(() => {
		setThemeState((current) => {
			const resolved = current === 'system' ? getSystemTheme() : current
			return resolved === 'dark' ? 'light' : 'dark'
		})
	}, [])

	return (
		<ThemeContext.Provider
			value={{ resolvedTheme, setTheme, theme, toggleTheme }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
