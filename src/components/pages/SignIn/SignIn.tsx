import { Button, Divider, Icon, Link, TextField, Typography } from '@ioasys/ion'
import Image from 'next/image'

export const SignIn = () => {
	return (
		<form className='w-full space-y-4'>
			<div className='flex w-full flex-col gap-5'>
				<Typography
					as='h2'
					className='text-center'
					size='large'
					typeface='title-normal'
				>
					Entrar em conta
				</Typography>
				<Typography
					as='p'
					className='text-center'
					size='medium'
					typeface='body'
				>
					Boas vindas! Por favor, digite seus dados.
				</Typography>
			</div>

			<div className='flex w-full flex-col gap-5'>
				<TextField
					appearance='surface'
					id='email'
					label='E-mail'
					leftIcon={<Icon name='mail' size={18} />}
					placeholder='usuario@ioasys.com.br'
					size='medium'
					type='email'
				/>

				<TextField
					appearance='surface'
					id='password'
					label='Senha'
					leftIcon={<Icon name='key-round' size={18} />}
					placeholder='Sua senha'
					size='medium'
					type='password'
				/>
			</div>
			<div className='flex w-full flex-col gap-5'>
				<Button
					appearance='solid'
					color='principal'
					size='medium'
					type='submit'
				>
					Continuar
				</Button>
				<Button appearance='surface' color='neutral' size='medium'>
					Recuperar senha
				</Button>
				<Divider label='ou' />

				<Button
					appearance='surface'
					color='neutral'
					leftIcon={
						<Image
							alt='Google'
							height={24}
							src='/icons/google.svg'
							width={24}
						/>
					}
					size='medium'
					type='button'
				>
					Continuar com o Google
				</Button>
				<Typography
					as='span'
					className='text-center'
					size='medium'
					typeface='body'
				>
					Não tem uma conta?{' '}
					<Link color='neutral' href='#'>
						Cadastrar
					</Link>
				</Typography>
			</div>
		</form>
	)
}
