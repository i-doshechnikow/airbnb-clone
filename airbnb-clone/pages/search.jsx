import Header from '../components/Header'
import Footer from '../components/Footer'

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section className="mx-3 w-full">
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays Mars</h1>

          <div className='hidden lg:inline-flex'>
            <p className='px-4 py-2'>Cancellation Flexibility</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search
