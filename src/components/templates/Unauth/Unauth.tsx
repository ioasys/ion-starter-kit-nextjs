import type { ReactNode } from 'react'

export const Unauth = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return (
		<main className='grid min-h-screen items-center justify-items-center'>
			<div className='flex w-full max-w-[480px] flex-col items-center gap-12 sm:items-start'>
				{children}
			</div>
		</main>
	)
}
