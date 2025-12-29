import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefbe9] px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">
          🔍
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Seite nicht gefunden
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>

        <ButtonLink href="/" variant="primary">
          Zurück zur Startseite
        </ButtonLink>
      </div>
    </div>
  );
}
