import { ReactNode } from 'react'

import { Unauth } from '@/components/templates'

export default function UnauthLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <Unauth>{children}</Unauth>
}
