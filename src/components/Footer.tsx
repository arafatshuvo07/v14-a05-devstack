function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500 text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev <span className="text-gradient">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-5 text-sm font-medium text-slate-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#home" className="hover:text-slate-900">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
