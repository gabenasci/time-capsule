import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

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

  const isAuthenticated = cookies().has('token') 

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <script>0</script>
        <main className="grid grid-cols-2 min-h-screen">
          
          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2  translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {/* Sign-in */}
            {isAuthenticated ? <Profile />: <SignIn /> }
            
            
            {/* Hero */}
            <Hero />
            {/* Copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
