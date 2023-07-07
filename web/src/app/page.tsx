import { User } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/nlw-spacetime-logo.svg' 

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      
      {/* Left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2  translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* Sign-in */}
        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"/>
          </div>

          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline">Create your account</span> and save your memories!
          </p>
        </a>
        {/* Hero */}
        <div className="space-y-5">
          <Image src={logo} alt="NLW spacetime" />

          <div className="max-w-[420px space-y-1">
            <div className='mt-5 text-5xl font-bold leading-tight text-gray-50'></div>
            <h1>Your time capsule</h1>
            
            <p className='text-lg leading-relaxed'>Collect remarkable moments of your journey and share with the world.</p>
          </div>

          <a href="" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black">
            ADD A MEMORY
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          © {new Date().getFullYear()}, Built by
          {` `}
          <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/gabenasci"
            className="underline hover:text-gray-100"
          >
            Gabriel Nascimento
          </a>
        </div>
      </div>


      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            You haven't saved any memories yet,{' '}
            <a href="" className="underline hover:text-gray-50">start creating one now!</a>!
          </p>
        </div>
      </div>
    </main>
  )
}
