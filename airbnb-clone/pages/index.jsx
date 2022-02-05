import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home(props) {
  const { exploreData } = props

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Banner */}
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold ">Explore nearby</h2>
          {exploreData?.map(({ img, distance, location }, id) => (
            <SmallCard
              key={id}
              img={img}
              location={location}
              distance={distance}
            />
          ))}
          {/* pull data from server */}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const request = await fetch('https://links.papareact.com/pyp')
  const exploreData = await request.json()

  return {
    props: {
      exploreData,
    },
  }
}
