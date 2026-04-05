import Link from "next/link";
import { Button } from "../ui/Button";

interface HeroProps {
  headline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const ctaButtonClass =
  "inline-flex items-center justify-center rounded-xl font-medium px-4 py-2.5 sm:px-5 sm:py-3 bg-primary hover:bg-primary-dark text-white shadow-sm transition-colors";

export function Hero({
  headline = "Welcome",
  ctaLabel = "Get started",
  ctaHref,
  onCtaClick,
}: HeroProps) {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
        {ctaLabel && (
          <div className="mt-6 sm:mt-8">
            {ctaHref ? (
              <Link href={ctaHref} className={ctaButtonClass}>
                {ctaLabel}
              </Link>
            ) : (
              <Button onClick={onCtaClick}>{ctaLabel}</Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
