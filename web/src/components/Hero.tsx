import Image from 'next/image'
import Link from 'next/link'

import logo from '../assets/nlw-spacetime-logo.svg' 

export function Hero(){
  return (
    <div className="space-y-5">
      <Image src={logo} alt="NLW spacetime" />

      <div className="max-w-[420px space-y-1">
        <div className='mt-5 text-5xl font-bold leading-tight text-gray-50'></div>
        <h1>Your time capsule</h1>
        
        <p className='text-lg leading-relaxed'>Collect remarkable moments of your journey and share with the world.</p>
      </div>

      <Link href="/memories/new" className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black">
        ADD A MEMORY
      </Link>
    </div>
  )
}