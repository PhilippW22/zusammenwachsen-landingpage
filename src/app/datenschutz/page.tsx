import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

function Datenschutz() {
  return (
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
          Datenschutzerklärung
        </h1>
        
        <div className="prose max-w-none text-gray-800 space-y-8">
          
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">1. Verantwortlicher</h2>
            <div className="text-sm leading-relaxed">
              <p className="mb-2">
                <strong>Philipp Winkler</strong><br/>
                c/o Impressumservice Dein-Impressum
                <br/>
                Stettiner Straße 41<br/>
                35410 Hungen<br/><br/>
                E-Mail: info@zusammenwachsenapp.de<br/>
              </p>
              <p>
                Wir nehmen den Schutz deiner persönlichen Daten sehr ernst und behandeln deine personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
          </section>

          {/* 2. Allgemeine Hinweise */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">2. Allgemeine Hinweise</h2>
            <div className="text-sm leading-relaxed space-y-3">
              <div>
                <h3 className="font-semibold mb-2">Unsere App und Website auf einen Blick:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Die ZusammenWachsen App ist vollständig kostenlos</strong> und erfordert keine Anmeldung</li>
                  <li><strong>Unsere Website dient ausschließlich</strong> der App-Vorstellung und freiwilligen Unterstützung</li>
                  <li><strong>Wir verwenden keine Werbe-Tracker</strong> oder Marketing-Cookies</li>
                  <li><strong>Die Unterstützung der App erfolgt freiwillig</strong> und ohne Gegenleistung</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Rechtsgrundlagen (DSGVO):</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Art. 6 Abs. 1 lit. a:</strong> Einwilligung für externe Analytics (soweit zukünftig verwendet)</li>
                  <li><strong>Art. 6 Abs. 1 lit. b:</strong> Vertragserfüllung bei freiwilligen Unterstützungen</li>
                  <li><strong>Art. 6 Abs. 1 lit. c:</strong> Rechtliche Verpflichtung (steuerliche Aufbewahrung)</li>
                  <li><strong>Art. 6 Abs. 1 lit. f:</strong> Berechtigte Interessen (technischer Betrieb, Fehlerbehebung, App-Verbesserung)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Datenverarbeitung Website */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">3. Datenverarbeitung auf unserer Website</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">3.1 Automatisch erhobene Daten</h3>
                <p className="text-sm mb-2">Bei jedem Aufruf unserer Website werden technisch notwendige Daten erfasst:</p>
                
                <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                  <p><strong>Welche Daten:</strong> IP-Adresse (anonymisiert nach 24 Stunden), Browser-Typ und -Version, Betriebssystem, Aufgerufene Seite und Uhrzeit, Referrer-URL</p>
                  <p><strong>Zweck:</strong> Technischer Betrieb der Website, Sicherheit</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                  <p><strong>Speicherdauer:</strong> 7 Tage, danach automatisch gelöscht</p>
                  <p><strong>Verarbeitung:</strong> Vercel (EU-Server, Frankfurt)</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3.2 Kontakt per E-Mail</h3>
                <p className="text-sm mb-2">Wenn du uns per E-Mail kontaktierst, speichern wir:</p>
                
                <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                  <p><strong>Welche Daten:</strong> E-Mail-Adresse, Name (falls angegeben), Nachrichteninhalt</p>
                  <p><strong>Zweck:</strong> Bearbeitung deiner Anfrage</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                  <p><strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung, maximal 2 Jahre</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Zahlungsabwicklung */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">4. Zahlungsabwicklung (Freiwillige Unterstützung)</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">4.1 In-App-Käufe (Apple App Store & Google Play Store)</h3>
                <div className="bg-gray-50 p-3 rounded text-xs space-y-2">
                  <p><strong>Welche Daten:</strong></p>
                  <p>Bei einem In-App-Kauf werden deine Zahlungsdaten (Kreditkarte, PayPal etc.) ausschließlich von Apple bzw. Google verarbeitet und NICHT an uns übermittelt.</p>
                  <p>Wir erhalten von Apple/Google nur:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Transaktions-ID (anonyme Kennung)</li>
                    <li>Produkt-ID (z.B. &quot;DONATION_499&quot;)</li>
                    <li>Kaufzeitpunkt</li>
                    <li>Betrag</li>
                    <li>Status (erfolgreich/fehlgeschlagen)</li>
                  </ul>
                  
                  <p><strong>Zweck:</strong> Abwicklung, Verifikation und Dokumentation der Zahlungsvorgänge (inkl. steuerlicher Zwecke)</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c DSGVO (steuerliche Aufbewahrungspflicht)</p>
                  
                  <p><strong>Empfänger:</strong></p>
                  <p>Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA<br/>
                  Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</p>
                  
                  <p>Apple und Google sind eigenständige Verantwortliche im Sinne der DSGVO für die Verarbeitung von Zahlungsdaten innerhalb ihrer Systeme. Weitere Informationen findest du in den Datenschutzerklärungen von Apple (<a href="https://www.apple.com/legal/privacy/" className="text-[#c0897f] hover:underline">https://www.apple.com/legal/privacy/</a>) und Google (<a href="https://policies.google.com/privacy" className="text-[#c0897f] hover:underline">https://policies.google.com/privacy</a>).</p>
                  
                  <p>Apple verarbeitet Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage des EU-US Data Privacy Framework. Zusätzlich nutzt Apple Standardvertragsklauseln der EU-Kommission.</p>
                  
                  <p><strong>Speicherdauer:</strong> Transaktionsdaten: 10 Jahre (steuerliche Aufbewahrungspflicht gem. § 147 AO)</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. App-Daten */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">5. Datenverarbeitung in der ZusammenWachsen App</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">5.1 Grundsätzliches zur App</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Keine Anmeldung erforderlich</strong></li>
                  <li><strong>Anonyme Nutzungsstatistiken</strong> zur App-Verbesserung (siehe Details unten)</li>
                  <li><strong>Lokale Datenspeicherung</strong> deiner Favoriten nur auf deinem Gerät</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.2 Technische Daten für App-Betrieb</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">Sentry (Fehlerbehebung)</h4>
                    <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                      <p><strong>Welche Daten:</strong></p>
                      <p>Bei kritischen App-Fehlern werden minimale technische Daten übertragen:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Fehlertyp und betroffene App-Funktion (z.B. "TabNavigator render failed")</li>
                        <li>Automatisch generierte, anonyme Event-ID</li>
                        <li>Zeitstempel</li>
                        <li>Betriebssystem-Typ (iOS/Android) und Version</li>
                        <li>App-Version</li>
                      </ul>
                      <p><strong>NICHT übermittelt werden:</strong> Name, E-Mail, Gerätekennungen (IDFA/Advertising-ID), Standort, gespeicherte Favoriten</p>
                      <p><strong>Zweck:</strong> Kritische App-Fehler beheben und Stabilität verbessern</p>
                      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                      <p><strong>Drittanbieter:</strong> Sentry (EU-Server)</p>
                      <p><strong>Speicherdauer:</strong> 30 Tage (automatische Löschung bei Sentry Free Plan)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Supabase (Content-Updates & Nutzungsstatistiken)</h4>
                    <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                      <p><strong>Welche Daten:</strong> Nach unserem Kenntnisstand und unserer Konfiguration verarbeitet Supabase ausschließlich anonyme Event-IDs, Zeitstempel sowie Question-IDs der geöffneten/gespeicherten Familienthemen (z.B. "q123"), Information über angezeigte Unterstützungs-Popups und Abfragen für neue App-Inhalte. Eine direkte Nutzeridentifikation ist technisch nicht vorgesehen, jedoch können Nutzungsmuster theoretisch erkennbar sein.</p>
                      <p><strong>Zweck:</strong> App-Verbesserung, Optimierung beliebter Familienthemen, Bereitstellung aktueller Inhalte</p>
                      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an App-Verbesserung)</p>
                      <p><strong>Drittanbieter:</strong> Supabase (EU-Server)</p>
                      <p><strong>Speicherdauer:</strong> Unbegrenzte Speicherung zur kontinuierlichen App-Verbesserung und Erkennung langfristiger Nutzungstrends</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Vercel (Update-Checks)</h4>
                    <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                      <p><strong>Welche Daten:</strong> Anonyme Anfragen für App-Updates (Versionsnummer) und Content-Updates</p>
                      <p><strong>Zweck:</strong> Bereitstellung von App-Updates und aktuellen Familienthemen</p>
                      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                      <p><strong>Drittanbieter:</strong> Vercel (EU-Server Frankfurt)</p>
                      <p><strong>Speicherdauer:</strong> Keine dauerhafte Speicherung</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.3 Anonyme Nutzungsstatistiken</h3>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                  <h4 className="font-semibold mb-2">Was wir sammeln:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-xs">
                    <li><strong>Event-IDs und Zeitstempel:</strong> Automatisch generierte Kennungen für statistische Auswertung</li>
                    <li><strong>Beliebte Familienthemen:</strong> Question-IDs (z.B. "q123") von geöffneten/gespeicherten Inhalten</li>
                    <li><strong>Popup-Anzeigen:</strong> Häufigkeit der Unterstützungs-Hinweise</li>
                    <li><strong>Keine Personalisierung:</strong> Alle Daten sind vollständig anonym und nicht mit dir verknüpfbar</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-3">Warum wir das sammeln:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-xs">
                    <li>Erkennen besonders hilfreicher Familienthemen</li>
                    <li>Optimierung der "Häufig gesuchte Themen"-Liste</li>
                    <li>Verbesserung der App-Navigation und -Inhalte</li>
                    <li>Anpassung der Häufigkeit von Unterstützungs-Hinweisen</li>
                  </ul>
                  
                  <div className="mt-3 text-xs">
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an App-Verbesserung)</p>
                    <p><strong>Deine Interessen:</strong> Eine kontinuierlich verbesserte, kostenlose Familienratgeber-App</p>
                    <p><strong>Speicherdauer:</strong> Unbegrenzte Speicherung zur kontinuierlichen App-Verbesserung und Erkennung langfristiger Nutzungstrends</p>
                    <p><strong>Anonymität:</strong> Da die Daten vollständig anonym erfasst werden (Question-IDs, Event-Zeitstempel), ist keine Zuordnung zu einzelnen Nutzern technisch möglich. Eine individuelle Löschung von Nutzungsdaten ist daher nicht durchführbar.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5.4 Lokale Datenspeicherung</h3>
                <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
                  <p><strong>Welche Daten:</strong> Deine gespeicherten Favoriten, App-Einstellungen</p>
                  <p><strong>Speicherort:</strong> Ausschließlich lokal auf deinem Gerät</p>
                  <p><strong>Zugriff:</strong> Nur du hast Zugriff, wir erhalten diese Daten nicht</p>
                  <p><strong>Löschung:</strong> Durch Entfernen einzelner Favoriten in der App (Herz-Symbol), komplette App-Löschung oder über die Smartphone-Einstellungen (App-Daten zurücksetzen)</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Deine Rechte */}
          <section>
            <h2 className="text-xl font-semibold text-[#c0897f] mb-3">6. Deine Rechte gemäß DSGVO</h2>
            
            <div className="text-sm leading-relaxed">
              <p className="mb-2">Du hast folgende Rechte:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Auskunft (Art. 15 DSGVO):</strong> Welche Daten wir über dich gespeichert haben</li>
                <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Korrektur falscher Daten</li>
                <li><strong>Löschung (Art. 17 DSGVO):</strong> "Recht auf Vergessenwerden" - WICHTIG: Bei anonymen Nutzungsdaten (Question-IDs, Event-Zeitstempel) ist eine individuelle Löschung technisch nicht möglich, da keine Zuordnung zu deiner Person erfolgt</li>
                <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung</li>
                <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Widerspruch gegen Verarbeitung auf Basis berechtigter Interessen (z.B. Nutzungsstatistiken)</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt deiner Daten in maschinenlesbarem Format</li>
                <li><strong>Beschwerde:</strong> Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde (z.B. Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstraße 219, 10969 Berlin oder Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden)</li>
              </ul>
              
              <p className="mt-4">Kontakt für Ausübung deiner Rechte: <strong>info@zusammenwachsenapp.de</strong></p>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
            <p><em>Letzte Aktualisierung: 01.10.2025</em></p>
            <p className="mt-2">Bei Fragen zum Datenschutz: <strong>info@zusammenwachsenapp.de</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datenschutz;