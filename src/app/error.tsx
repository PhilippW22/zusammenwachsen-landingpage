"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: connect to an error reporting service (e.g., Sentry)
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefbe9] px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6" aria-hidden="true">
          😕
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Etwas ist schiefgelaufen
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut oder kehre zur
          Startseite zurück.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#c0897f] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Erneut versuchen
          </button>

          <ButtonLink href="/" variant="secondary">
            Zur Startseite
          </ButtonLink>
        </div>

        {error?.digest ? (
          <p className="mt-6 text-xs text-gray-500">
            Fehler-ID: <span className="font-mono">{error.digest}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
