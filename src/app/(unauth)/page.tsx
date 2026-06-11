'use client'

import { Button, Typography } from '@ioasys/ion-react'
import Image from 'next/image'

import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import pkg from '../../../package.json'

export default function HomePage() {
	return (
		<main className='bg-primary-softer flex min-h-screen flex-col items-center justify-center p-10'>
			<div className='bg-surface-default relative flex w-full max-w-5xl flex-col items-center justify-center gap-8 rounded-2xl px-10 pb-10 shadow-sm'>
				<div className='absolute top-4 right-4'>
					<ThemeToggle />
				</div>
				<Image
					alt='@ioasys/ion-react logo'
					className='dark:hidden'
					height={78}
					priority
					src='/ion-web.svg'
					width={340}
				/>
				<Image
					alt='@ioasys/ion-react logo'
					className='hidden dark:block'
					height={78}
					priority
					src='/ion-web-dark.svg'
					width={340}
				/>

				<div className='space-y-3 text-center'>
					<Typography
						as='h1'
						className='text-text-main mb-6'
						size='md'
						typeface='title-default'
					>
						Bem-vindo ao Ion Starter Kit for Next.js
					</Typography>

					<Typography
						as='p'
						className='text-text-main'
						size='md'
						typeface='body-default'
					>
						Este é um projeto modelo para iniciar aplicações utilizando o design
						system <strong>@ioasys/ion</strong>, privado e mantido pela ioasys.
					</Typography>

					<div className='mt-4 flex items-center justify-center gap-4'>
						<Button
							onClick={() => window.open('https://ion.ioasys.com.br', '_blank')}
							rel='noopener noreferrer'
						>
							Documentação do ion
						</Button>
						<Button
							appearance='outline'
							onClick={() =>
								window.open('https://wikijs.ioasys.com.br', '_blank')
							}
							rel='noopener noreferrer'
						>
							Wikijs da ioasys
						</Button>
					</div>
				</div>

				<div className='mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
					<div>
						<Typography
							as='h3'
							className='text-text-main'
							size='sm'
							typeface='title-default'
						>
							Dependencies
						</Typography>
						<ul className='mt-3 space-y-1'>
							{Object.entries(pkg.dependencies).map(([dep, version]) => (
								<li key={dep}>
									<Typography
										as='p'
										className='text-text-main'
										size='sm'
										typeface='body-default'
									>
										{dep}: <strong>{version}</strong>
									</Typography>
								</li>
							))}
						</ul>
					</div>

					<div>
						<Typography
							as='h3'
							className='text-text-main'
							size='sm'
							typeface='title-default'
						>
							Dev Dependencies
						</Typography>
						<ul className='mt-3 space-y-1'>
							{Object.entries(pkg.devDependencies).map(([dep, version]) => (
								<li key={dep}>
									<Typography
										as='p'
										className='text-text-main'
										size='sm'
										typeface='body-default'
									>
										{dep}: <strong>{version}</strong>
									</Typography>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<footer className='text-text-main mt-8 text-sm'>
				© {new Date().getFullYear()} ioasys — Starter Kit Ion + Next.js
			</footer>
		</main>
	)
}
