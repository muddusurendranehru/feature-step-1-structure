import { Button } from "./Button";

interface HeroProps {
  headline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function Hero({
  headline = "Welcome",
  ctaLabel = "Get started",
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
            <Button onClick={onCtaClick}>{ctaLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
