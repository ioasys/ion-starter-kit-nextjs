'use client'

import Image from 'next/image'

import { Button, Typography } from '@ioasys/ion'

import pkg from '../../../package.json'

export default function HomePage() {
	return (
		<main className='bg-primary-softer flex min-h-screen flex-col items-center justify-center p-10'>
			<div className='flex w-full max-w-5xl flex-col items-center justify-center gap-8 rounded-2xl bg-white px-10 pb-10 shadow-sm'>
				<Image
					src='/ion-web.svg'
					alt='@ioasys/ion logo'
					width={340}
					height={78}
					priority
				/>

				<div className='space-y-3 text-center'>
					<Typography
						as='h1'
						typeface='title-normal'
						size='medium'
						className='text-typeface-main mb-6'
					>
						Bem-vindo ao Ion Starter Kit for Next.js
					</Typography>

					<Typography
						as='p'
						typeface='body'
						size='medium'
						className='text-typeface-main'
					>
						Este é um projeto modelo para iniciar aplicações utilizando o design
						system <strong>@ioasys/ion</strong>, privado e mantido pela ioasys.
					</Typography>

					<div className='mt-4 flex items-center justify-center gap-4'>
						<Button
							rel='noopener noreferrer'
							onClick={() => window.open('https://ion.ioasys.com.br', '_blank')}
						>
							Documentação do ion
						</Button>
						<Button
							appearance='outline'
							rel='noopener noreferrer'
							onClick={() =>
								window.open('https://wikijs.ioasys.com.br', '_blank')
							}
						>
							Wikijs da ioasys
						</Button>
					</div>
				</div>

				<div className='mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
					<div>
						<Typography
							as='h3'
							typeface='subtitle-normal'
							size='large'
							className='text-typeface-main'
						>
							Dependencies
						</Typography>
						<ul className='mt-3 space-y-1'>
							{Object.entries(pkg.dependencies).map(([dep, version]) => (
								<li key={dep}>
									<Typography
										as='p'
										typeface='body'
										size='small'
										className='text-typeface-main'
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
							typeface='subtitle-normal'
							size='large'
							className='text-typeface-main'
						>
							Dev Dependencies
						</Typography>
						<ul className='mt-3 space-y-1'>
							{Object.entries(pkg.devDependencies).map(([dep, version]) => (
								<li key={dep}>
									<Typography
										as='p'
										typeface='body'
										size='small'
										className='text-typeface-main'
									>
										{dep}: <strong>{version}</strong>
									</Typography>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<footer className='text-typeface-main mt-8 text-sm'>
				© {new Date().getFullYear()} ioasys — Starter Kit Ion + Next.js
			</footer>
		</main>
	)
}
