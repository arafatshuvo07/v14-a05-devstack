import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import TechCard from './TechCard'
import YourStack from './YourStack'
import type { ITech } from '../types/tech'

function Technologies() {
  const [technologies, setTechnologies] = useState<ITech[]>([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState<ITech[]>([])

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: ITech[]) => {
        setTechnologies(data)
        setLoading(false)
      })
  }, [])

  const addToStack = (tech: ITech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`)
      return
    }
    setStack([...stack, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const removeFromStack = (id: string) => {
    const removed = stack.find((tech) => tech.id === id)
    if (!removed) return
    setStack(stack.filter((tech) => tech.id !== id))
    toast.info(`${removed.name} removed from your stack`)
  }

  const removeAll = () => {
    setStack([])
    toast.info('Your stack has been cleared')
  }

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        {!loading && (
          <p className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
            {stack.length} selected
          </p>
        )}
      </div>

      {loading ? (
        <div className="flex flex-col items-center py-24">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>
          <p className="mt-4 text-sm text-slate-500">Loading technologies...</p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isInStack={stack.some((item) => item.id === tech.id)}
                onAdd={addToStack}
              />
            ))}
          </div>
          <YourStack stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      )}
    </section>
  )
}

export default Technologies
