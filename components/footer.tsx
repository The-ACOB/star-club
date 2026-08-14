export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <a href="#top" className="flex items-center gap-2 text-sm text-star">
            <span className="font-display font-medium">ACOB</span>
            <span className="text-violet">★</span>
            <span className="text-mist">Star Club</span>
          </a>
          <p className="text-xs text-ash">A constellation of curious minds.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://acob.org"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-mist transition-colors hover:text-star"
          >
            ACOB
          </a>
          <a
            href="mailto:hello@acob.org"
            className="text-xs text-mist transition-colors hover:text-star"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-xs text-mist transition-colors hover:text-star"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-xs text-mist transition-colors hover:text-star"
          >
            LinkedIn
          </a>
        </div>

        <span className="mono-meta text-[10px] text-ash">&copy; 2026 ACOB</span>
      </div>
    </footer>
  );
}
