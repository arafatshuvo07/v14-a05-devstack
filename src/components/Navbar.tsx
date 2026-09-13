import { useState } from 'react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <a href="#home" className="hidden items-center gap-2 lg:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500 text-sm font-bold text-white">
              DS
            </span>
            <span className="text-lg font-bold text-slate-900">
              Dev <span className="text-gradient">Stack</span>
            </span>
          </a>
        </div>

        <ul className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={
                  link.name === 'Home'
                    ? 'text-sm font-semibold text-pink-500'
                    : 'text-sm font-medium text-slate-600 hover:text-slate-900'
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap lg:hidden"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-pink-500 text-[10px] font-bold text-white">
            DS
          </span>
          <span className="text-sm font-bold text-slate-900">
            Dev <span className="text-gradient">Stack</span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-xs px-1 text-xs text-slate-600 sm:btn-sm sm:px-3 sm:text-sm">
            Sign In
          </button>
          <button className="btn-gradient btn btn-xs rounded-full border-none px-2 text-xs text-white sm:btn-sm sm:px-5 sm:text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
