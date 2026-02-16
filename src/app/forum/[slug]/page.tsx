import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/forum';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ForumCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <nav className="mb-6 text-sm text-navy-muted" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-navy transition-colors">
                Forums
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-navy font-medium">{category.title}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl" aria-hidden>{category.icon}</span>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold text-navy">
              {category.title}
            </h1>
          </div>
          <p className="text-navy-muted">{category.description}</p>
        </header>

        <section className="bg-white border border-sand-dark rounded-lg overflow-hidden shadow-card">
          <div className="border-b border-sand-dark px-4 sm:px-6 py-3 bg-sand/50">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-navy">Threads</span>
              <span className="text-navy-muted">Replies · Last activity</span>
            </div>
          </div>
          <div className="divide-y divide-sand-dark min-h-[200px] flex items-center justify-center">
            <p className="text-navy-muted py-12 px-6 text-center">
              No threads yet. User signup and posting coming soon.
            </p>
          </div>
        </section>

        <p className="mt-6 text-sm text-navy-muted">
          <Link href="/" className="hover:text-navy transition-colors underline">
            ← Back to all forums
          </Link>
        </p>
      </div>
    </main>
  );
}
