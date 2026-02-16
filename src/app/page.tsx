import { FORUM_CATEGORIES } from '@/lib/forum';
import ForumCategoryCard from '@/components/ForumCategoryCard';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-navy mb-3">
            Nantucket Real Estate Information Exchange
          </h1>
          <p className="text-navy-muted max-w-2xl mx-auto">
            Connect with fellow brokers. Share off-market listings, post buyer needs, and stay in the loop on island real estate.
          </p>
        </div>

        <section className="space-y-4" aria-label="Forum categories">
          {FORUM_CATEGORIES.map((category) => (
            <ForumCategoryCard key={category.slug} category={category} />
          ))}
        </section>

        <p className="text-center text-sm text-navy-muted mt-12">
          User signup and account management coming soon.
        </p>
      </div>
    </main>
  );
}
