import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Apps", href: "/apps" },
  { label: "Blog", href: "/blog" },
  { label: "Celebrities & Events", href: "/celebrities-events-community" },
  { label: "Education", href: "/education" },
  { label: "Community", href: "/community" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Investors", href: "/investors" },
  { label: "Content Studio", href: "/content-studio" },
  { label: "Doctor Training", href: "/doctor-training" },
  { label: "Medical Camps", href: "/medical-camps" },
  { label: "Donations", href: "/donations" },
  { label: "Join us", href: "/join-us" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  { label: "Franchise Agreement", href: "/franchise-agreement" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300 sm:py-16 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3 sm:gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 sm:gap-2">
              <li>
                <a
                  href="mailto:surendra.muddu@gmail.com"
                  className="inline-block min-h-[44px] py-2 hover:text-primary transition-colors sm:min-h-0 sm:py-0"
                >
                  surendra.muddu@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919963721999"
                  className="inline-block min-h-[44px] py-2 hover:text-primary transition-colors sm:min-h-0 sm:py-0"
                >
                  +91 9963721999
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-3 sm:gap-2">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 dark:border-gray-900">
          <p className="text-center text-sm text-gray-500">
            Dr. M. Surendra Nehru, MD • HOMA Healthcare Center • Plot 140, Vinayak Nagar, Gachibowli, Hyderabad • Registration valid until October 2028
          </p>
        </div>
        <div className="mt-4 border-t border-gray-800 pt-6 dark:border-gray-900">
          <p className="text-center text-sm text-gray-400">
            © 2026 ClinicFranchise Nexus
          </p>
        </div>
      </div>
    </footer>
  );
}
