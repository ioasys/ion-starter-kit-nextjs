import Image from 'next/image'

import { Typography, Button, Icon, Divider, Link, TextField } from '@ioasys/ion'

export const SignIn = () => {
  return (
    <form className="w-full space-y-4">
      <div className="flex w-full flex-col gap-5">
        <Typography
          as="h2"
          typeface="title-normal"
          size="large"
          className="text-center"
        >
          Entrar em conta
        </Typography>
        <Typography
          as="p"
          typeface="body"
          size="medium"
          className="text-center"
        >
          Boas vindas! Por favor, digite seus dados.
        </Typography>
      </div>

      <div className="flex w-full flex-col gap-5">
        <TextField
          id="email"
          appearance="surface"
          label="E-mail"
          placeholder="usuario@ioasys.com.br"
          size="medium"
          type="email"
          leftIcon={<Icon name="mail" size={18} />}
        />

        <TextField
          id="password"
          appearance="surface"
          label="Senha"
          placeholder="Sua senha"
          size="medium"
          type="password"
          leftIcon={<Icon name="key-round" size={18} />}
        />
      </div>
      <div className="flex w-full flex-col gap-5">
        <Button
          appearance="solid"
          color="principal"
          size="medium"
          type="submit"
        >
          Continuar
        </Button>
        <Button appearance="surface" color="neutral" size="medium">
          Recuperar senha
        </Button>
        <Divider label="ou" />

        <Button
          type="button"
          leftIcon={
            <Image
              src="/icons/google.svg"
              alt="Google"
              height={24}
              width={24}
            />
          }
          appearance="surface"
          color="neutral"
          size="medium"
        >
          Continuar com o Google
        </Button>
        <Typography
          as="span"
          typeface="body"
          size="medium"
          className="text-center"
        >
          Não tem uma conta?{' '}
          <Link color="neutral" href="#">
            Cadastrar
          </Link>
        </Typography>
      </div>
    </form>
  )
}
