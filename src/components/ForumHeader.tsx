import Link from 'next/link';

export default function ForumHeader() {
  return (
    <header className="border-b border-sand-dark bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-xl font-semibold text-navy group-hover:text-navy-muted transition-colors">
              Acklistings
            </span>
            <span className="text-xs text-navy-muted/70 uppercase tracking-widest">
              Nantucket
            </span>
          </Link>
          <p className="text-sm text-navy-muted hidden sm:block">
            Information exchange for island brokers
          </p>
        </div>
      </div>
    </header>
  );
}
