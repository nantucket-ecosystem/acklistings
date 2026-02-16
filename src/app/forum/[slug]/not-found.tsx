import Link from 'next/link';

export default function ForumNotFound() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-2xl font-semibold text-navy mb-2">
          Forum not found
        </h1>
        <p className="text-navy-muted mb-6">
          The forum category you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-muted font-medium transition-colors"
        >
          ← Back to forums
        </Link>
      </div>
    </main>
  );
}
