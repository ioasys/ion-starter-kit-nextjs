import type { ButtonProps, TypographyProps } from '@ioasys/ion-react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '@/contexts/theme'
import HomePage from './page'

const renderHomePage = () =>
	render(
		<ThemeProvider>
			<HomePage />
		</ThemeProvider>
	)

vi.mock('next/image', () => ({
	__esModule: true,
	default: ({ priority, ...props }: { priority?: boolean }) => {
		// biome-ignore lint/performance/noImgElement: img element is required for mocking Next.js Image component in tests
		return <img alt='' data-testid='mock-image' {...props} />
	},
}))

vi.mock('@ioasys/ion', () => ({
	Button: ({ children, ...props }: ButtonProps) => (
		<button {...props}>{children}</button>
	),
	Typography: ({
		as: Component = 'p',
		children,
		...props
	}: TypographyProps) => <Component {...(props as any)}>{children}</Component>,
}))

describe('HomePage', () => {
	it('should render the main heading', () => {
		renderHomePage()
		expect(
			screen.getByRole('heading', {
				level: 1,
				name: /Bem-vindo ao Ion Starter Kit for Next.js/i,
			})
		).toBeInTheDocument()
	})

	it('should render the Ion logo in light and dark variants', () => {
		renderHomePage()
		const logos = screen.getAllByAltText('@ioasys/ion-react logo')
		expect(logos).toHaveLength(2)
		expect(logos[0]).toHaveAttribute('src', '/ion-web.svg')
		expect(logos[1]).toHaveAttribute('src', '/ion-web-dark.svg')
	})

	it('should render dependency lists', () => {
		renderHomePage()
		expect(screen.getByText(/next:/i)).toBeInTheDocument()
		expect(screen.getAllByText(/react:/i)[0]).toBeInTheDocument()
	})

	it('should render the documentation button', () => {
		renderHomePage()
		expect(
			screen.getByRole('button', { name: /Documentação do ion/i })
		).toBeInTheDocument()
	})

	it('should render the wikijs button', () => {
		renderHomePage()
		expect(
			screen.getByRole('button', { name: /Wikijs da ioasys/i })
		).toBeInTheDocument()
	})
})
