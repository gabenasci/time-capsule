import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'], weight: '400', variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS & Typescript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <script>0</script>
        {children}
      </body>
    </html>
  )
}
