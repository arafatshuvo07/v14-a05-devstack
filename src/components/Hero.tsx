function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#technologies" className="btn-gradient btn rounded-lg px-6">
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="btn rounded-lg border-gray-200 bg-white px-6 text-slate-700 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="banner.png"
            alt="Developer stack illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
