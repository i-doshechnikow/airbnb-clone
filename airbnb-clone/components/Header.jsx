import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* left - logo */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*  middle - search */}
      <div>
        <input type="text" placeholder="Start your search" />
        <SearchIcon />
      </div>

      {/* right */}
      <div></div>
    </header>
  )
}