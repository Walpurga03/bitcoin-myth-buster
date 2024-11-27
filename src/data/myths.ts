 export interface Myth {
  id: number;
  text: string;
  explanation: string;
  isMyth: boolean;
}

export const myths: Myth[] = [
  {
    id: 1,
    text: "Ist Bitcoin nur für illegale Aktivitäten?",
    explanation: "Nein, Bitcoin wird für viele legale Zwecke verwendet, wie Investitionen, Überweisungen und Zahlungen. Laut Chainalysis machen illegale Aktivitäten weniger als 1% aller Bitcoin-Transaktionen aus. Die Transparenz der Blockchain macht Bitcoin sogar weniger attraktiv für kriminelle Aktivitäten als Bargeld.",
    isMyth: false
  },
  {
    id: 2,
    text: "Wurde Bitcoin schon einmal gehackt?",
    explanation: "Das Bitcoin-Netzwerk selbst wurde noch nie gehackt. Was manchmal gehackt wird, sind Kryptobörsen oder individuelle Wallets aufgrund schwacher Sicherheitsmaßnahmen. Das Bitcoin-Protokoll hat sich seit über 14 Jahren als sicher erwiesen.",
    isMyth: false
  },
  {
    id: 3,
    text: "Ist Bitcoin ein sicheres Zahlungssystem?",
    explanation: "Ja, Bitcoin ist eines der sichersten Zahlungssysteme der Welt. Das Netzwerk wird durch tausende Computer gesichert, verwendet modernste Kryptographie und wurde in über 14 Jahren noch nie erfolgreich gehackt. Die Blockchain macht jede Transaktion transparent und unveränderlich.",
    isMyth: true
  },
  {
    id: 4,
    text: "Verbraucht Bitcoin zu viel Energie?",
    explanation: "Nein, Bitcoin nutzt hauptsächlich überschüssige und erneuerbare Energien. Laut Studien stammen über 50% der Mining-Energie aus erneuerbaren Quellen. Das Mining hilft sogar dabei, erneuerbare Energieprojekte profitabel zu machen und das Stromnetz zu stabilisieren. Der Energieverbrauch sichert das Netzwerk und macht Bitcoin zu einem robusten, manipulationssicheren System.",
    isMyth: false
  },
  {
    id: 5,
    text: "Ist Bitcoin nur für Technik-Experten?",
    explanation: "Nein, Bitcoin wird immer benutzerfreundlicher. Heute kann jeder mit einem Smartphone Bitcoin über Apps wie Strike oder Cash App nutzen, ohne technisches Wissen. Die Technologie wird ähnlich wie das Internet immer zugänglicher, während die komplexe Technik im Hintergrund läuft.",
    isMyth: false
  },
  {
    id: 6,
    text: "Hat Bitcoin einen echten Wert?",
    explanation: "Ja, Bitcoin hat einen realen Wert durch sein Netzwerk, Sicherheit und Knappheit. Als erstes digitales, knappes Gut bietet es einzigartige Eigenschaften: unveränderliche Geldpolitik, globale Übertragbarkeit und dezentralisierte Kontrolle. Der Wert entsteht durch diese Eigenschaften und das Vertrauen der Nutzer.",
    isMyth: true
  },
  {
    id: 7,
    text: "Kann Bitcoin von Regierungen verboten werden?",
    explanation: "Ja, eine Regierung kann Bitcoin in ihrem Land verbieten - wie China es 2021 getan hat. Aber das bedeutet nicht, dass Bitcoin aufhört zu existieren. Aufgrund seiner dezentralen Natur läuft das Bitcoin-Netzwerk weiter, solange es irgendwo auf der Welt Internet und Computer gibt. Selbst in Ländern mit Verboten finden Menschen Wege, Bitcoin zu nutzen - sei es durch VPNs oder P2P-Handel.",
    isMyth: true
  },
  {
    id: 8,
    text: "Wird Bitcoin immer wertvoller durch seine begrenzte Menge?",
    explanation: "Ja, Bitcoin hat eine fest begrenzte Menge von 21 Millionen Coins. Diese künstliche Knappheit, kombiniert mit steigender Nachfrage und dem Halving-Mechanismus, führt langfristig zu Wertsteigerung. Ähnlich wie bei Gold macht die Knappheit Bitcoin zu einem wertvollen Gut.",
    isMyth: true
  },
  {
    id: 9,
    text: "Wird Bitcoin von großen Investoren kontrolliert?",
    explanation: "Nein, Bitcoin ist dezentral. Große Investoren (auch 'Wale' genannt) können zwar kurzfristig den Preis beeinflussen, haben aber keine Kontrolle über das Bitcoin-Netzwerk selbst. Die Regeln des Netzwerks werden durch Konsens aller Teilnehmer bestimmt.",
    isMyth: false
  },
  {
    id: 10,
    text: "Ist Bitcoin anonym?",
    explanation: "Nein, Bitcoin ist pseudonym, nicht anonym. Alle Transaktionen sind öffentlich in der Blockchain nachverfolgbar. Während Adressen nicht direkt Namen zugeordnet sind, können Transaktionen durch Analyse-Methoden oft zurückverfolgt werden. Für mehr Privatsphäre gibt es Layer-2-Lösungen und Privacy-Techniken.",
    isMyth: false
  },
  {
    id: 11,
    text: "Kann man Bitcoin einfach kopieren?",
    explanation: "Ja, technisch gesehen kann jeder den Bitcoin-Code kopieren, da er open source ist. Aber eine erfolgreiche Kopie zu erstellen ist extrem unwahrscheinlich. Der wahre Wert von Bitcoin liegt nicht im Code, sondern im riesigen dezentralen Netzwerk, der Sicherheit durch tausende Miner, der aktiven Entwickler-Community und dem Vertrauen der Nutzer. Von den tausenden existierenden Bitcoin-Kopien hat keine auch nur annähernd Bitcoins Erfolg erreicht.",
    isMyth: true
  },
  {
    id: 12,
    text: "Gibt es versteckte Codes im Bitcoin-Protokoll?",
    explanation: "Nein, Bitcoin ist Open Source, was bedeutet, dass der Code öffentlich und von tausenden Entwicklern überprüfbar ist. Ein versteckter Code wäre längst entdeckt worden. Jede Änderung am Code wird intensiv geprüft und muss von der Community akzeptiert werden.",
    isMyth: false
  },
  {
    id: 13,
    text: "Ist es unmöglich, Bitcoin sicher zu kaufen?",
    explanation: "Ja, Bitcoin kann sehr sicher gekauft werden, wenn man die richtigen Vorsichtsmaßnahmen trifft. Nutzen Sie regulierte Börsen wie Kraken, Coinbase oder Bison, die in Deutschland/EU lizenziert sind. Aktivieren Sie immer die Zwei-Faktor-Authentifizierung (2FA) und verwenden Sie sichere Passwörter. Für größere Beträge empfiehlt sich die Nutzung eines Hardware Wallets (z.B. Ledger, Trezor). Achten Sie auf eine sichere Aufbewahrung Ihrer Backup-Phrasen und dokumentieren Sie Ihre Transaktionen.",
    isMyth: true
  },
  {
    id: 14,
    text: "Wird Bitcoin von einer zentralen Behörde kontrolliert?",
    explanation: "Nein, Bitcoin ist ein dezentrales Netzwerk ohne zentrale Kontrolle. Änderungen am Protokoll erfordern einen Konsens der Nutzer, Miner und Entwickler. Keine einzelne Person oder Organisation kann Regeln ändern oder Transaktionen kontrollieren.",
    isMyth: false
  },
  {
    id: 15,
    text: "Sind Bitcoin-Gewinne überall gleich besteuert?",
    explanation: "Nein, die Besteuerung von Bitcoin-Gewinnen unterscheidet sich stark von Land zu Land. In Deutschland sind Gewinne nach einem Jahr Haltefrist steuerfrei, während in den USA jeder Verkauf steuerpflichtig ist. Portugal erhebt gar keine Steuern auf private Krypto-Gewinne, und Japan besteuert sie als 'Verschiedenes Einkommen'. Die Schweiz behandelt Bitcoin als steuerfreies Privatvermögen, solange man nicht als gewerblicher Händler eingestuft wird. Es ist wichtig, sich über die spezifischen Steuerregeln im eigenen Land zu informieren und diese genau zu befolgen. In Deutschland müssen Gewinne innerhalb der ersten 12 Monate (bei Staking/Lending 10 Jahre) als private Veräußerungsgeschäfte versteuert werden, mit einer Freigrenze von 600€ pro Jahr.",
    isMyth: false
  },
  {
    id: 16,
    text: "Kann jeder am Bitcoin-Netzwerk teilnehmen?",
    explanation: "Ja, Bitcoin ist ein offenes Netzwerk. Jeder mit Internet kann Bitcoin auf verschiedene Weisen nutzen: als Nutzer für Transaktionen, als Miner zur Netzwerksicherung, oder als Node-Betreiber zur Validierung. Es gibt keine Zugangsbeschränkungen oder Genehmigungen.",
    isMyth: true
  },
  {
    id: 17,
    text: "Bietet Bitcoin Schutz vor Inflation?",
    explanation: "Ja, Bitcoin ist ein effektiver Schutz vor Inflation. Die begrenzte Menge von 21 Millionen macht es zu einem deflationären Gut. Anders als staatliche Währungen kann Bitcoin nicht beliebig vermehrt werden. In Ländern mit hoher Inflation nutzen Menschen Bitcoin bereits als Wertspeicher.",
    isMyth: true
  },
  {
    id: 18,
    text: "Muss ich ganze Bitcoins kaufen?",
    explanation: "Nein, Bitcoin ist bis auf 8 Dezimalstellen teilbar. Die kleinste Einheit, ein Satoshi (0,00000001 BTC), ermöglicht auch kleine Investitionen und Zahlungen. Man kann für wenige Euro Bitcoin kaufen und nutzen.",
    isMyth: false
  },
  {
    id: 19,
    text: "Sind Bitcoin-Transaktionen sofort bestätigt?",
    explanation: "Nein, Bitcoin-Basistransaktionen benötigen etwa 10-60 Minuten für sichere Bestätigung. Für Sofortzahlungen gibt es das Lightning Network als zweite Ebene, das sofortige, fast kostenlose Transaktionen ermöglicht. Die Bestätigungszeit der Basis-Chain gewährleistet die Sicherheit des Systems.",
    isMyth: false
  },
  {
    id: 20,
    text: "Kann ich Bitcoin nur mit Internet nutzen?",
    explanation: "Nein, Bitcoin kann auch über Satellit (Blockstream Satellite), Radio, SMS oder Mesh-Netzwerke genutzt werden. In Ländern mit eingeschränktem Internet gibt es kreative Lösungen wie portable Nodes oder Paper Wallets. Eine direkte Internet-Verbindung ist nicht zwingend erforderlich.",
    isMyth: false
  },
  {
    id: 21,
    text: "Kann ich mein Bitcoin-Wallet verlieren?",
    explanation: "Ja, wenn man seine privaten Schlüssel (Seed-Phrase) verliert, ist der Zugriff auf die Bitcoin permanent verloren. Deshalb ist sichere Backup-Aufbewahrung essentiell. Es gibt verschiedene Methoden wie Hardware-Wallets, Multi-Sig und Vererbungslösungen, um das Verlustrisiko zu minimieren.",
    isMyth: true
  },
  {
    id: 22,
    text: "Sind Bitcoin wie echte Münzen die man besitzen kann?",
    explanation: "Nein, Bitcoin existieren nur als Einträge in der Blockchain. Was man 'besitzt', sind die privaten Schlüssel, die Kontrolle über bestimmte Bitcoin-Adressen gewähren. Diese Schlüssel funktionieren wie digitale Signaturen und ermöglichen das Senden von Bitcoin im Netzwerk.",
    isMyth: false
  },
  {
    id: 23,
    text: "Könnte Satoshi Nakamoto Bitcoin kontrollieren, wenn er zurückkehrt?",
    explanation: "Nein, selbst der Bitcoin-Erfinder hätte keine besondere Kontrolle über das Netzwerk. Bitcoin ist so dezentral gestaltet, dass keine einzelne Person - nicht einmal Satoshi - das System kontrollieren kann. Änderungen erfordern den Konsens der gesamten Community.",
    isMyth: false
  },
  {
    id: 24,
    text: "Weiß man, wer Satoshi Nakamoto wirklich ist?",
    explanation: "Nein, die wahre Identität des Bitcoin-Erfinders ist bis heute unbekannt. Viele haben behauptet Satoshi zu sein, aber niemand konnte es bisher kryptographisch beweisen. Die Anonymität des Erfinders unterstreicht den dezentralen Charakter von Bitcoin.",
    isMyth: false
  },
  {
    id: 25,
    text: "Brauche ich ein Bankkonto für Bitcoin?",
    explanation: "Nein, Bitcoin funktioniert komplett unabhängig vom traditionellen Bankensystem. Man kann Bitcoin direkt von anderen Nutzern kaufen, durch Mining verdienen oder für Dienstleistungen erhalten. Allerdings nutzen viele Einsteiger Kryptobörsen, die oft ein Bankkonto für Ein- und Auszahlungen verlangen.",
    isMyth: false
  },
  {
    id: 26,
    text: "Verliere ich meine Bitcoin, wenn mein Computer kaputt geht?",
    explanation: "Nein, Bitcoin werden nicht auf dem Computer gespeichert, sondern existieren in der Blockchain. Solange Sie Ihre Seed-Phrase (12-24 Wörter) sicher aufbewahrt haben, können Sie von jedem Gerät aus auf Ihre Bitcoin zugreifen. Der Computer oder das Handy sind nur Werkzeuge zum Zugriff auf die Blockchain.",
    isMyth: false
  },
  {
    id: 27,
    text: "Wird Bitcoin die Zukunft des Geldes?",
    explanation: "Ja, Bitcoin entwickelt sich zunehmend zu einer globalen Geldform. Immer mehr Menschen, Unternehmen und sogar Länder integrieren Bitcoin. Mit Innovationen wie dem Lightning Network wird Bitcoin sowohl als Wertspeicher als auch für alltägliche Zahlungen immer praktischer.",
    isMyth: true
  },
  {
    id: 28,
    text: "Muss ich mich mit komplizierter Technik auskennen?",
    explanation: "Nein, moderne Bitcoin-Apps sind so einfach zu bedienen wie Banking-Apps. Während die Technologie im Hintergrund komplex ist, wurde die Benutzeroberfläche für Anfänger optimiert. Sie müssen die technischen Details nicht verstehen, um Bitcoin sicher nutzen zu können.",
    isMyth: false
  },
  {
    id: 29,
    text: "Kann ich meine Bitcoin zurückholen, wenn ich sie an die falsche Adresse schicke?",
    explanation: "Nein, Bitcoin-Transaktionen sind nicht umkehrbar. Überprüfen Sie daher immer sorgfältig die Empfängeradresse, bevor Sie Bitcoin versenden. Viele Wallets haben eingebaute Sicherheitsfunktionen wie QR-Code-Scanner und Adressvalidierung, um Fehler zu vermeiden.",
    isMyth: false
  },
  {
    id: 30,
    text: "Sind Bitcoin-Gewinne steuerfrei?",
    explanation: "Nein, in den meisten Ländern müssen Bitcoin-Gewinne versteuert werden. In Deutschland sind Gewinne nach einer Haltefrist von einem Jahr steuerfrei. Führen Sie Buch über Ihre Transaktionen und konsultieren Sie einen Steuerberater für individuelle Beratung.",
    isMyth: false
  },
  {
    id: 31,
    text: "Lohnt sich langfristiges Halten von Bitcoin?",
    explanation: "Ja, das langfristige Halten (HODLen) von Bitcoin hat sich historisch als erfolgreiche Strategie erwiesen. Die Knappheit, wachsende Adoption und technologische Entwicklung sprechen für eine positive langfristige Wertentwicklung. Viele Investoren nutzen Bitcoin als digitales Gold.",
    isMyth: true
  }
];

export default myths;
