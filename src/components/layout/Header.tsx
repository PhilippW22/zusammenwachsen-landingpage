import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container size="wide" className="h-16 flex items-center justify-between">
        <Link href="/#top" className="font-semibold text-gray-900">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/#funktionen" className="hover:text-[#c0897f]">
            Über die App
          </Link>
          <Link href="/#testimonials" className="hover:text-[#c0897f]">
            Bewertungen
          </Link>
          <Link href="/#einblicke" className="hover:text-[#c0897f]">
            Einblicke
          </Link>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={siteConfig.androidStoreUrl} variant="primary" size="sm">
            Download
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
