export type ForumCategorySlug = 'off-market-listings' | 'off-market-needs' | 'miscellaneous';

export interface ForumCategory {
  slug: ForumCategorySlug;
  title: string;
  description: string;
  icon: string;
}

export const FORUM_CATEGORIES: ForumCategory[] = [
  {
    slug: 'off-market-listings',
    title: 'Off-market Listings',
    description: 'Share and discover exclusive listings not on the open market.',
    icon: '🏠',
  },
  {
    slug: 'off-market-needs',
    title: 'Off-market Needs',
    description: 'Post buyer or tenant needs. Connect with brokers who have matching inventory.',
    icon: '🔍',
  },
  {
    slug: 'miscellaneous',
    title: 'Miscellaneous',
    description: 'General discussion, referrals, market insights, and industry news.',
    icon: '💬',
  },
];

export function getCategoryBySlug(slug: string): ForumCategory | undefined {
  return FORUM_CATEGORIES.find((c) => c.slug === slug);
}
