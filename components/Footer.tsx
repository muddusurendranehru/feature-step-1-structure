import Link from "next/link";

const quickLinks = [
  { label: "Education", href: "/education" },
  { label: "Community", href: "/community" },
  { label: "Investors", href: "/investors" },
  { label: "Content Studio", href: "/content-studio" },
  { label: "Doctor Training", href: "/doctor-training" },
  { label: "Medical Camps", href: "/medical-camps" },
  { label: "Donations", href: "/donations" },
  { label: "Join us", href: "/join-us" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
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
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href="mailto:surendra.muddu@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  surendra.muddu@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919963721999"
                  className="hover:text-primary transition-colors"
                >
                  +91 9963721999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 dark:border-gray-900">
          <p className="text-center text-sm text-gray-400">
            © 2026 ClinicFranchise Nexus
          </p>
        </div>
      </div>
    </footer>
  );
}
