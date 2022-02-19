import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

function Search(props) {
  const { searchResult } = props
  console.log('searchResult', searchResult)
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query

  const formatedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formatedStartDate} - ${formatedEndDate}`

  return (
    <div className="h-screen">
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          {searchResult.map(
            ({ img, location, description, star, price, total }) => (
              <InfoCard
                img={img}
                location={location}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchRequest = await fetch('https://links.papareact.com/isz')
  const searchResult = await searchRequest.json()

  return {
    props: {
      searchResult,
    },
  }
}
