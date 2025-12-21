import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type Testimonial = {
  quote: string;
  name: string;
  source: "App Store" | "Google Play";
  rating: 5 | 4 | 3 | 2 | 1;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Endlich eine App, die mich im Alltag wirklich abholt. Kurze Impulse, die sofort umsetzbar sind – genau das hat mir gefehlt.",
    name: "App Store Nutzer:in",
    source: "App Store",
    rating: 5,
  },
  {
    quote:
      "Liebevoll formuliert und ohne erhobenen Zeigefinger. Ich nutze die Merkliste ständig und finde dank Suche schnell das passende Thema.",
    name: "App Store Nutzer:in",
    source: "App Store",
    rating: 5,
  },
  {
    quote:
      "Sehr übersichtlich – und die Inhalte fühlen sich nahbar an. Ich habe schon mehrmals etwas an Freund*innen geteilt.",
    name: "App Store Nutzer:in",
    source: "App Store",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} von 5 Sternen`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < rating ? "text-[#c0897f]" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs text-gray-700">
      {children}
    </span>
  );
}

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="soft" fade="both">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Das sagen Nutzer*innen
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            Kurze Auszüge aus Bewertungen — später ersetzt du die Dummy-Texte durch deine echten App-Store-Reviews.
          </p>
        </div>
        <Badge>★★★★★ im App Store</Badge>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <Card key={idx} variant="gradient" className="p-6">
            <Stars rating={t.rating} />
            <p className="mt-4 text-gray-800 leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 text-sm text-gray-600">
              <span className="font-medium text-gray-900">{t.name}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span>{t.source}</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}