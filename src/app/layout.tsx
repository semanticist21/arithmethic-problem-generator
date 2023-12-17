import {ReactNode} from 'react'
import './globals.scss'

export const metadata = {
  title: 'arithmethics-generator',
  description: 'A simple arithmetic generator for abacus.',
}

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
