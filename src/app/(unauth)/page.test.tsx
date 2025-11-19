import type { ButtonProps, TypographyProps } from '@ioasys/ion'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import HomePage from './page'

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
		render(<HomePage />)
		expect(
			screen.getByRole('heading', {
				level: 1,
				name: /Bem-vindo ao Ion Starter Kit for Next.js/i,
			})
		).toBeInTheDocument()
	})

	it('should render the Ion logo', () => {
		render(<HomePage />)
		expect(screen.getByAltText('@ioasys/ion logo')).toBeInTheDocument()
	})

	it('should render dependency lists', () => {
		render(<HomePage />)
		expect(screen.getByText(/next:/i)).toBeInTheDocument()
		expect(screen.getAllByText(/react:/i)[0]).toBeInTheDocument()
	})

	it('should render the documentation button', () => {
		render(<HomePage />)
		expect(
			screen.getByRole('button', { name: /Documentação do ion/i })
		).toBeInTheDocument()
	})

	it('should render the wikijs button', () => {
		render(<HomePage />)
		expect(
			screen.getByRole('button', { name: /Wikijs da ioasys/i })
		).toBeInTheDocument()
	})
})
