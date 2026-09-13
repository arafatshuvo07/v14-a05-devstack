import type { ITech } from '../types/tech'

function TechCard({
  tech,
  isInStack,
  onAdd,
}: {
  tech: ITech
  isInStack: boolean
  onAdd: (tech: ITech) => void
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
        {tech.badge && (
          <span className="badge border-0 bg-pink-50 text-xs font-semibold text-pink-600">
            {tech.badge}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">
        {tech.description}
      </p>
      <div className="mt-4 flex items-center justify-between gap-2 text-xs">
        <span className="badge badge-sm border-gray-200 bg-white font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-sm font-semibold text-slate-900">
          <span className="text-xs text-slate-900">★</span> {tech.rating}
        </span>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={isInStack}
        className={
          isInStack
            ? 'btn mt-4 w-full cursor-default rounded-lg border-none bg-green-100 text-green-700'
            : 'btn-gradient btn mt-4 w-full rounded-lg border-none text-white'
        }
      >
        {isInStack ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}

export default TechCard
