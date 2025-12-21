import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type FAQItem = {
  q: string;
  a: string;
};

const FAQ: FAQItem[] = [
  {
    q: "Wie lang sind die Inhalte?",
    a: "Kurz und alltagstauglich – so, dass du sie auch zwischen Tür und Angel nutzen kannst.",
  },
  {
    q: "Für welches Alter ist die App gedacht?",
    a: "Für Familien von Baby bis Teenager – die Themen sind entsprechend vielfältig.",
  },
  {
    q: "Gibt es eine Suchfunktion?",
    a: "Ja. Du kannst gezielt nach Themen oder Situationen suchen, wenn du schnell etwas brauchst.",
  },
  {
    q: "Kann ich Inhalte speichern?",
    a: "Ja. Mit Favoriten/Merkliste findest du deine wichtigsten Impulse jederzeit wieder.",
  },
  {
    q: "Kann ich Impulse teilen?",
    a: "Ja. Inhalte lassen sich direkt mit Freund*innen oder Familie teilen.",
  },
  {
    q: "Kommen neue Inhalte dazu?",
    a: "Ja. Die App wächst regelmäßig mit neuen Themen und Impulsen weiter.",
  },
];

export default function FAQSection() {
  return (
    <Section id="faq" tone="soft" fade="both">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            FAQ
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            Antworten auf häufige Fragen – kurz, klar und ohne Umwege.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4">
        {FAQ.map((item) => (
          <Card key={item.q} className="p-0 overflow-hidden">
            <details className="group">
              <summary className="cursor-pointer list-none px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-gray-900">
                    {item.q}
                  </span>

                  {/* Chevron: pure CSS, kein Icon-Dependency */}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[#c0897f] transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </div>
              </summary>

              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            </details>
          </Card>
        ))}
      </div>
    </Section>
  );
}
