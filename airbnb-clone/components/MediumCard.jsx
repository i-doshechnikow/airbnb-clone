import Image from 'next/image'

function MediumCard(props) {
  const { img, title } = props
  return (
    <div className="transform cursor-pointer transition hover:scale-105 duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h1 className="mt-3 text-2xl">{title}</h1>
    </div>
  )
}

export default MediumCard
