import Image from 'next/image'

export default function Header() {
  return (
    <header>
      {/* left */}
      <div className="relative flex h-10 items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*  middle */}
      <div></div>

      {/* right */}
      <div></div>
    </header>
  )
}
