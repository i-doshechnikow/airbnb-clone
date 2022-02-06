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

      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold ">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }, id) => (
              <SmallCard
                key={id}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Live anywhere</h2>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const requestExploreDate = await fetch('https://links.papareact.com/pyp')
  const exploreData = await requestExploreDate.json()

  const requestCardsData = await fetch('https://links.papareact.com/zp1')
  const cardsData = await requestCardsData.json()

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
