import { useEffect, useState } from 'react'
import type { ITech } from '../types/tech'

function Technologies() {
  const [technologies, setTechnologies] = useState<ITech[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: ITech[]) => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Explore the <span className="text-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-600">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <div className="flex flex-col items-center py-24">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>
          <p className="mt-4 text-sm text-slate-500">Loading technologies...</p>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-600">
            {technologies.length} technologies are ready for the catalogue.
          </p>
        </div>
      )}
    </section>
  )
}

export default Technologies
