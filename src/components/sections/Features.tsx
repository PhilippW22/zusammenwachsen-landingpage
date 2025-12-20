import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const FEATURES = [
  {
    title: "Über 320 Alltagsthemen in 12 Kategorien",
    text: "Von Baby bis Teenager: ZusammenWachsen begleitet Familien durch alle Phasen des Alltags. Über 320 Themen sind übersichtlich in 12 Kategorien geordnet – für schnelle Orientierung statt langem Suchen.",
  },
  {
    title: "Über 2.500 kurze Impulse & Beispielsätze",
    text: "Zu jeder Situation findest du kurze, klare Impulse mit konkreten Beispielsätzen. Niedrigschwellig, alltagstauglich und direkt umsetzbar – auch zwischen Tür und Angel.",
  },
  {
    title: "Bindungs- & bedürfnisorientierte Haltung",
    text: "Unsere Inhalte sind einfühlsam, liebevoll und bindungsorientiert. Inspiriert von gewaltfreier Kommunikation, selbstbestimmtem Lernen und einem Menschenbild, das Kinder ernst nimmt.",
  },
  {
    title: "Stärkung statt Bewertung",
    text: "ZusammenWachsen arbeitet ohne erhobenen Zeigefinger. Es geht nicht darum, was du nicht tun sollst – sondern um Impulse, die dich im Familienalltag stärken und unterstützen.",
  },
] as const;

export default function Features() {
  return (
    <Section id="funktionen">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Ein Familienratgeber für den Alltag
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
          ZusammenWachsen schenkt dir kurze, liebevolle Impulse für herausfordernde
          Situationen im Familienleben – nahbar, bindungsorientiert und ohne Bewertung.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="p-6 md:p-7">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {feature.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
