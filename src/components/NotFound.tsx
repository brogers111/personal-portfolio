function NotFound() {
  return (
    <>
      {/* Desktop */}
      <section className="hidden md:flex flex-col justify-center min-h-screen">
        <h1 className="mt-28 ml-60 font-bluffolk text-8xl text-gray-300">404<br/><span className="ml-10 text-gray-600">NOT FOUND.</span></h1>
        <p className="mt-10 ml-24 font-dongle text-3xl text-gray-400">This page doesn't exist.</p>
        <a href="/" className="mt-4 ml-24 font-dongle text-2xl text-gray-600 underline underline-offset-4 hover:text-gray-800 transition-colors w-fit">
          Go back home
        </a>
      </section>

      {/* Mobile */}
      <section className="md:hidden pb-10 px-10 pt-20">
        <h1 className="font-dongle text-3xl text-gray-300">404<br/><span className="font-bluffolk text-6xl text-gray-600">NOT FOUND</span></h1>
        <p className="pt-4 font-dongle text-2xl text-gray-400 leading-none">This page doesn't exist.</p>
        <a href="/" className="mt-4 block font-dongle text-xl text-gray-600 underline underline-offset-4">
          Go back home
        </a>
      </section>
    </>
  )
}

export default NotFound
