
import {User} from 'lucide-react'
import Image from 'next/image';

import logo from '../assets/nlw-spacetime-logo.svg'
import { Copyright } from '@/components/Copyright';
import { Hero } from '@/components/Hero';
import { SignIn } from '@/components/Signin';
import { EmptyMemories } from '@/components/EmptyMemories';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen ">
      {/* left */}
      <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 relative border-r
          border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
          <SignIn />
          <Hero />
          <Copyright />
      </div>
      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
