import Link from "next/link";
import { notFound } from "next/navigation";

const INFOGRAPHIC_POSTS: Record<
  string,
  { title: string; image: string; teaser: string }
> = {
  "infographic-1": {
    title: "Metabolism & Health — Infographic 1",
    image: "/blog/infographic-%20(1).jpg",
    teaser:
      "Visual guide to metabolism, blood sugar, and lifestyle — shareable infographic by Dr. M. Surendra Nehru.",
  },
  "infographic-2": {
    title: "Metabolism & Health — Infographic 2",
    image: "/blog/infographic-%20(2).jpg",
    teaser:
      "Second in our infographic series: key facts on diabetes, insulin resistance, and daily habits that help.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = INFOGRAPHIC_POSTS[slug];
  if (!post) return { title: "Blog | HOMA Clinics" };
  return {
    title: `${post.title} | HOMA Health Blog`,
    description: post.teaser,
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = INFOGRAPHIC_POSTS[slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="border-b border-gray-200 bg-white px-4 py-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Back to Blog
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            {post.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{post.teaser}</p>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-xl shadow-lg"
          />
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            By Dr. M. Surendra Nehru · HOMA Clinics
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
            >
              View all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
