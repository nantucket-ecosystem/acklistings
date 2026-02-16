import Link from 'next/link';
import type { ForumCategory } from '@/lib/forum';

interface ForumCategoryCardProps {
  category: ForumCategory;
  threadCount?: number;
}

export default function ForumCategoryCard({ category, threadCount = 0 }: ForumCategoryCardProps) {
  return (
    <Link
      href={`/forum/${category.slug}`}
      className="block group"
    >
      <article className="relative bg-white border border-sand-dark rounded-lg p-6 shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all duration-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl flex-shrink-0" aria-hidden>
            {category.icon}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-xl font-semibold text-navy group-hover:text-gold transition-colors mb-1">
              {category.title}
            </h2>
            <p className="text-sm text-navy-muted leading-relaxed mb-3">
              {category.description}
            </p>
            {threadCount > 0 && (
              <p className="text-xs text-navy-muted/80">
                {threadCount} {threadCount === 1 ? 'thread' : 'threads'}
              </p>
            )}
          </div>
          <span className="flex-shrink-0 text-navy-muted/50 group-hover:text-gold transition-colors" aria-hidden>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
