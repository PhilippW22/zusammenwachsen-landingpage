import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false }, // Nicht in Google indexieren
};

export default function ImpressumPage() {
  return (
    <>
      <section className="w-full px-6 py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-block mb-8 text-[#c0897f] hover:underline"
            aria-label="Zurück zur Startseite"
          >
            ← Zurück zur Startseite
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-[#c0897f] mb-10">
            Impressum
          </h1>
          
          <div className="space-y-8 text-sm leading-relaxed">
            
            {/* Pflichtangaben */}
            <section>
              <h2 className="text-xl font-semibold text-[#c0897f] mb-3">Angaben gemäß § 5 TMG</h2>
              <div>
                <strong>Philipp Winkler</strong><br/>
                c/o Impressumservice Dein-Impressum
                <br/>
                Stettiner Straße 41<br/>
                35410 Hungen
                <br />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#c0897f] mb-3">Kontakt</h2>
              <div>
                <strong>E-Mail:</strong> info@zusammenwachsenapp.de
              </div>
              <div>
                <p>
                  Telefon: <span className="phone-number">269 417 97 6510</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#c0897f] mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div>
                Philipp Winkler<br />
                c/o Impressumservice Dein-Impressum
                <br/>
                Stettiner Straße 41<br/>
                35410 Hungen
                <br />
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section>
              <h2 className="text-xl font-semibold text-[#c0897f] mb-4">Haftungsausschluss</h2>
              
              <div className="space-y-6">
                
                {/* Inhaltliche Haftung */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Inhaltliche Haftung</h3>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <strong>Keine Gewähr für Inhalte:</strong>
                      <p>Die Inhalte der ZusammenWachsen App wurden nach bestem Wissen erstellt, stellen jedoch ausschließlich allgemeine Informationen dar. Für die Richtigkeit, Vollständigkeit, Aktualität oder Anwendbarkeit der Inhalte wird keine Haftung übernommen.</p>
                    </div>
                    
                    <div>
                      <strong>Ausschluss fachlicher Beratung:</strong>
                      <p>Die App-Inhalte ersetzen in keinem Fall professionelle Beratung durch Fachkräfte. Bei konkreten Problemen wendest du dich an qualifizierte Fachpersonen (Kinderärzt*innen, Psycholog*innen, Erziehungsberatungsstellen, Familientherapeut*innen).</p>
                    </div>
                    
                    <div>
                      <strong>Eigenverantwortliche Nutzung:</strong>
                      <p>Jede Anwendung der bereitgestellten Impulse und Vorschläge erfolgt auf deine eigene Verantwortung. Die Entscheidung über die Umsetzung liegt ausschließlich bei dir.</p>
                    </div>
                  </div>
                </div>

                {/* Haftungsausschluss für Schäden */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Haftungsausschluss für Schäden</h3>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <strong>Keine Haftung für Schäden:</strong>
                      <p>Jegliche Haftung für Schäden wird, soweit gesetzlich zulässig, ausgeschlossen, die durch die Nutzung der App oder die Anwendung der Inhalte entstehen könnten. Dies umfasst insbesondere:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Entwicklungsbedingte oder erzieherische Probleme</li>
                        <li>Familiäre Konflikte oder Beziehungsprobleme</li>
                        <li>Finanzielle Aufwendungen</li>
                        <li>Zeitverlust oder entgangene Möglichkeiten</li>
                        <li>Mittelbare oder unmittelbare Folgeschäden</li>
                      </ul>
                    </div>
                    
                    <div>
                      <strong>Gesetzliche Haftung:</strong>
                      <p>Dieser Haftungsausschluss gilt nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.</p>
                    </div>
                  </div>
                </div>

                {/* Grenzen der Anwendbarkeit */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Grenzen der Anwendbarkeit</h3>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <strong>Individuelle Umstände:</strong>
                      <p>Familiensituationen sind individuell. Was bei einem Kind funktioniert, muss bei einem anderen nicht geeignet sein. Du bist selbst dafür verantwortlich zu beurteilen, ob vorgeschlagene Maßnahmen für deine spezifische Situation angemessen sind.</p>
                    </div>
                    
                    <div>
                      <strong>Keine Krisenintervention:</strong>
                      <p className="mb-2">Bei akuten Krisen, Gewalt, Suizidgedanken oder anderen Notfällen wendest du dich umgehend an entsprechende Notdienste oder Fachstellen. Die App ist nicht für Krisensituationen konzipiert.</p>
                      
                      <div className="bg-red-50 border border-red-200 p-3 rounded">
                        <p className="font-medium mb-2">Wichtige Notrufnummern:</p>
                        <ul className="space-y-1">
                          <li>• Telefonseelsorge: 0800 111 0 111 oder 0800 111 0 222</li>
                          <li>• Nummer gegen Kummer (Elterntelefon): 0800 111 0 550</li>
                          <li>• Hilfetelefon Gewalt gegen Frauen: 116 016</li>
                          <li>• Allgemeiner Notruf: 110 oder 112</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <strong>Altersangemessenheit:</strong>
                      <p>Die Anwendung von Vorschlägen muss dem Entwicklungsstand und den individuellen Bedürfnissen deines Kindes entsprechen. Es liegt in deiner Verantwortung, dies individuell einzuschätzen und zu entscheiden.</p>
                    </div>
                  </div>
                </div>

                {/* Technische Haftung */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Technische Haftung</h3>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <strong>Verfügbarkeit:</strong>
                      <p>Eine ununterbrochene Verfügbarkeit der App kann nicht garantiert werden. Technische Störungen oder Ausfälle sind möglich.</p>
                    </div>
                    
                    <div>
                      <strong>Änderungsvorbehalt:</strong>
                      <p>Die Inhalte der App werden regelmäßig weiterentwickelt und ergänzt. Wir behalten uns vor, Inhalte jederzeit ohne vorherige Ankündigung zu ändern, zu ergänzen oder zu entfernen. Es besteht kein Anspruch auf dauerhafte Verfügbarkeit einzelner Inhalte.</p>
                    </div>
                    
                    <div>
                      <strong>Externe Verlinkungen:</strong>
                      <p>Für Inhalte externer Websites, auf die verlinkt wird, übernehmen wir keine Verantwortung.</p>
                    </div>
                  </div>
                </div>

                {/* Rechtliches */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-800">Rechtliches</h3>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <strong>Anwendbares Recht:</strong>
                      <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
                    </div>
                    
                    <div>
                      <strong>Salvatorische Klausel:</strong>
                      <p>Sollten einzelne Bestimmungen dieses Haftungsausschlusses unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold mb-3 text-gray-800">Weitere Informationen</h3>
              <div className="text-xs space-y-2">
                <p>
                  <strong>Datenschutz:</strong> Informationen zur Datenverarbeitung findest du in unserer{" "}
                  <Link href="/datenschutz" className="text-[#c0897f] hover:underline">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
            </section>
            
          </div>
        </div>
      </section>
    </>
  );
}