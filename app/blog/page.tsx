import Link from 'next/link';
import { Button } from '@/components/Button';
import { BlogCardImage } from '@/components/BlogCardImage';

export const metadata = {
  title: 'HOMA Health Blog | Metabolism, Diabetes & Natural Wellness',
  description: 'Expert articles by Dr. M. Surendra Nehru on metabolism management, diabetes reversal, nutrition, apple cider vinegar, PCOS, insulin resistance, and more.',
};

// Images from public/blog/ — use infographic (1)–(6).jpg, camp- (1).jpg, etc. (space in filename = %20 in path)
const BLOG_IMAGE = (name: string) => `/blog/${name}`;

type Article = {
  slug: string;
  title: string;
  teaser: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  externalHref?: string;
};

const articles: Article[] = [
  {
    slug: 'apple-cider-vinegar-metabolism',
    title: 'Apple Cider Vinegar for Metabolism & Blood Sugar Control',
    teaser: 'How 1–2 tbsp daily can improve insulin sensitivity, support weight loss, and aid digestion — evidence-based guide from a metabolism specialist.',
    image: '/blog/infographic-%20(1).jpg',
    date: 'March 15, 2026',
    readTime: '6 min',
    category: 'Nutrition & Remedies',
  },
  {
    slug: 'honey-vs-sugar-diabetes',
    title: 'Honey vs Sugar: Which is Better for Diabetes & Metabolism?',
    teaser: 'Raw honey vs refined sugar — glycemic impact, Ayurvedic view, and how to use honey safely in your diet plan.',
    image: '/blog/infographic-%20(3).jpg',
    date: 'March 12, 2026',
    readTime: '8 min',
    category: 'Nutrition & Remedies',
  },
  {
    slug: 'almonds-insulin-resistance',
    title: 'Why Almonds Are a Superfood for Insulin Resistance & PCOS',
    teaser: 'Rich in healthy fats, magnesium, and fiber — how 8–10 almonds daily can lower HOMA-IR and support hormonal balance.',
    image: '/blog/infographic-%20(4).jpg',
    date: 'March 10, 2026',
    readTime: '5 min',
    category: 'PCOS & Hormones',
  },
  {
    slug: 'cinnamon-glucose-control',
    title: 'Cinnamon for Glucose Control — How Much & Which Type?',
    teaser: 'Ceylon vs Cassia cinnamon: real effects on fasting glucose, HbA1c, and safe daily dosage for diabetics.',
    image: '/blog/infographic-%20(5).jpg',
    date: 'March 8, 2026',
    readTime: '7 min',
    category: 'Nutrition & Remedies',
  },
  {
    slug: 'intermittent-fasting-metabolism',
    title: 'Intermittent Fasting for Metabolism Boost — Safe or Risky?',
    teaser: '16:8 vs 5:2 — how fasting affects insulin, fat burning, and thyroid in Indian patients (with practical tips).',
    image: '/blog/infographic-%20(6).jpg',
    date: 'March 5, 2026',
    readTime: '9 min',
    category: 'Lifestyle & Fasting',
  },
  {
    slug: 'infographic-1',
    title: 'Metabolism & Health — Infographic 1',
    teaser: 'Visual guide to metabolism, blood sugar, and lifestyle — shareable infographic by Dr. M. Surendra Nehru.',
    image: '/blog/infographic-%20(1).jpg',
    date: 'March 2026',
    readTime: '2 min',
    category: 'Lifestyle & Fasting',
  },
  {
    slug: 'infographic-2',
    title: 'Metabolism & Health — Infographic 2',
    teaser: 'Second in our infographic series: key facts on diabetes, insulin resistance, and daily habits that help.',
    image: '/blog/infographic-%20(2).jpg',
    date: 'March 2026',
    readTime: '2 min',
    category: 'Lifestyle & Fasting',
  },
  {
    slug: 'dr-muddu-mvp-blog',
    title: 'Dr. Muddu MVP Blog',
    teaser: 'Latest articles on diabetes reversal, metabolism, calculators, and patient success stories by Dr. Surendra Nehru.',
    image: '/blog/infographic-%20(4).png',
    date: 'Ongoing',
    readTime: '—',
    category: 'External Blog',
    externalHref: 'https://dr-muddus-mvp-miracle-value-proposition-2l36.onrender.com/blog',
  },
  // Add more articles here (copy-paste format)
];

// Must match article.category values; "All" shows every article
const categories = ['All', 'Nutrition & Remedies', 'PCOS & Hormones', 'Lifestyle & Fasting', 'External Blog'];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            HOMA Health Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Evidence-based articles on metabolism, diabetes, PCOS, nutrition, natural remedies & lifestyle — written by Dr. M. Surendra Nehru
          </p>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-8 px-4 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full md:w-64 px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            const card = (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition h-full flex flex-col">
                <div className="relative h-48 shrink-0">
                  <BlogCardImage
                    src={article.image}
                    alt={article.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm text-primary font-medium">{article.category}</span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
                    {article.teaser}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>By Dr. M. Surendra Nehru</span>
                    <span>{article.readTime} • {article.date}</span>
                  </div>
                </div>
              </div>
            );
            return article.externalHref ? (
              <a
                key={article.slug}
                href={article.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {card}
              </a>
            ) : (
              <Link href={`/blog/${article.slug}`} key={article.slug} className="group block">
                {card}
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">Stay Updated on Metabolism Health</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            New articles every week — join 5,000+ readers who trust evidence-based insights.
          </p>
          <Button variant="primary" className="text-lg px-6 py-3">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
}
