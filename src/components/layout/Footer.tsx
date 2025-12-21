import Link from "next/link";

export default function Footer() {
  return (
    <footer
    id="site-footer"
      className="mt-20 mb-6 text-sm text-gray-500 text-center px-4"
      role="contentinfo"
      aria-label="Webseiteninfos und rechtliche Links"
    >
      <div aria-label="Copyright-Information">
        © 2025 ZusammenWachsen – Familienratgeber App.
      </div>

      <nav aria-label="Rechtliche Informationen">
        <Link
          href="/impressum"
          className="underline text-gray-600 hover:text-[#c0897f] mx-2"
          aria-label="Zum Impressum mit Anbieterdaten navigieren"
        >
          Impressum
        </Link>
        <Link
          href="/datenschutz"
          className="underline text-gray-600 hover:text-[#c0897f] mx-2"
          aria-label="Zur Datenschutzerklärung navigieren"
        >
          Datenschutz
        </Link>
      </nav>
    </footer>
  );
}
