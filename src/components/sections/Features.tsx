import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ValuesSlideshow from "./ValuesSlideshow";

const STATS = [
  {
    number: "320+",
    label: "Alltagsthemen",
    detail: "in 12 Kategorien",
  },
  {
    number: "2.500+",
    label: "Impulse",
    detail: "mit Beispielsätzen",
  },
  {
    number: "100%",
    label: "Kostenlos",
    detail: "ohne Werbung",
  },
] as const;

export default function Features() {
  return (
    <Section id="funktionen">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Ein Familienratgeber für den Alltag
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
          ZusammenWachsen schenkt dir kurze, liebevolle Impulse für herausfordernde
          Situationen im Familienleben – nahbar, bindungsorientiert und ohne Bewertung.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {STATS.map((stat) => (
          <Card key={stat.label} variant="gradient" className="text-center p-6 md:p-8">
            <div className="text-3xl md:text-4xl font-bold text-[#c0897f]">
              {stat.number}
            </div>
            <div className="mt-2 text-base md:text-lg font-semibold text-gray-900">
              {stat.label}
            </div>
            <div className="mt-1 text-sm text-gray-600">{stat.detail}</div>
          </Card>
        ))}
      </div>

      {/* Values Slideshow */}
      <div className="mt-12">
        <ValuesSlideshow />
      </div>
    </Section>
  );
}