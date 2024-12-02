'use client'

import { NextTamaguiProvider } from './NextTamaguiProvider'
import { CenterView } from '@my/ui'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextTamaguiProvider>
          <CenterView>
            <div>
              <Link href="/">Home</Link>
              &nbsp;
              &nbsp;
              <Link href="/blog">Blog</Link>
            </div>
            {children}
          </CenterView>
        </NextTamaguiProvider>
      </body>
    </html>
  )
}