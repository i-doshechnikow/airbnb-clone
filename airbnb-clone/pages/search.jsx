import Header from '../components/Header'
import Footer from '../components/Footer'

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays Mars</h1>

          <div className="">
            <p className="transform cursor-pointer rounded-full border px-4 py-2 transition duration-100 ease-out hover:shadow-lg active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
