export interface Quote {
  id: number;
  text: string;
  author: string;
  year?: number;  // Optional, falls wir später das Jahr hinzufügen möchten
  category?: 'security' | 'history' | 'economics' | 'freedom' | 'technology';  // Neue Kategorisierung
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "Es ist kein Zufall, dass das Jahrhundert des totalen Krieges mit dem Jahrhundert des Zentralbankwesens zusammenfiel.",
    author: "Ron Paul",
    category: "economics"
  },
  {
    id: 2,
    text: "Die Finanzkrise von 2008 war kein Versagen des Kapitalismus, sondern ein Versagen von sozialisierten, staatlich geförderten Unternehmen und der Zentralbank.",
    author: "Peter Schiff",
    category: "economics"
  },
  {
    id: 3,
    text: "Es ist eine Möglichkeit für Menschen, Geld in ihre eigenen Hände zu nehmen, ohne auf Banken oder Regierungen angewiesen zu sein.",
    author: "Satoshi Nakamoto",
    category: "freedom"
  },
  {
    id: 4,
    text: "Inflation ist Besteuerung ohne Gesetzgebung.",
    author: "Milton Friedman",
    category: "economics"
  },
  {
    id: 5,
    text: "Das System ist sicher, solange ehrliche Knoten kollektiv mehr Rechenleistung kontrollieren als jede kooperierende Gruppe von Angreiferknoten.",
    author: "Satoshi Nakamoto",
    category: "security"
  },
  {
    id: 6,
    text: "Die Technologie der digitalen Währung hat das Potenzial, die Art und Weise, wie wir Handel betreiben und Werte austauschen, zu revolutionieren.",
    author: "Hal Finney",
    category: "technology"
  },
  {
    id: 7,
    text: "Das Geheimnis von Bitcoins Erfolg ist, dass der hohe Ressourcenverbrauch und die schlechte rechnerische Skalierbarkeit etwas noch Wertvolleres kaufen: soziale Skalierbarkeit.",
    author: "Nick Szabo",
    category: "technology"
  },
  {
    id: 8,
    text: "Auf diese Weise kann die Regierung unbemerkt und unbemerkt den Reichtum der Menschen beschlagnahmen, und kein Mensch von einer Million wird den Diebstahl bemerken.",
    author: "John Maynard Keynes",
    category: "economics"
  },
  {
    id: 9,
    text: "Bitcoin ist wie digitales Gold und hat das Potenzial, nicht nur das Geld, sondern die Welt zu verändern.",
    author: "Roger Ver",
    category: "economics"
  },
  {
    id: 10,
    text: "Bitcoin repräsentiert die echte Trennung von Geld und Staat.",
    author: "Erik Voorhees",
    category: "freedom"
  },
  {
    id: 11,
    text: "Die Wirtschaftstheorie ist unser systematisches Wissen über das wirtschaftliche Leben der Menschen in der Gesellschaft.",
    author: "Eugen von Böhm-Bawerk",
    category: "economics"
  },
  {
    id: 12,
    text: "Das aktuelle System, bei dem jeder Benutzer ein Netzwerkknoten ist, ist nicht die beabsichtigte Konfiguration für große Maßstäbe.",
    author: "Satoshi Nakamoto",
    category: "technology"
  },
  {
    id: 13,
    text: "Bitcoin wurde entwickelt, um uns zu einer dezentralisierten Währung des Volkes zurückzubringen.",
    author: "Satoshi Nakamoto",
    category: "freedom"
  },
  {
    id: 21,
    text: "Mt. Gox, eine der frühesten und größten Bitcoin-Börsen, wird gestartet und wird zu einem wichtigen Zentrum für den Bitcoin-Handel.",
    author:"----",
    category: "history"
  },
  {
    id: 31,
    text:"Das Lightning Network ist eine Layer-2-Lösung, die auf der Bitcoin-Blockchain aufgebaut ist und darauf abzielt, schnelle und kostengünstige Transaktionen durch Zahlungskanäle zu ermöglichen.",
    author:"----",
    category: "technology"
  },
  {
    id: 32,
    text:"Das Bitcoin-Protokoll basiert auf einem kryptografischen Konzept, das als öffentliche Schlüssel-Kryptographie bezeichnet wird. Dieses Konzept umfasst einen öffentlichen Schlüssel (Bitcoin-Adresse) und einen privaten Schlüssel, um Transaktionen zu sichern."    ,
    author:"----",
    category: "technology"
  },
  {
    id: 33,
    text:"Der Bitcoin Improvement Proposal (BIP) Prozess ist ein Mechanismus, durch den Entwickler Protokollverbesserungen und -features vorschlagen und implementieren können.",
    author:"----",
    category: "technology"
  },
  {
    id: 34,
    text: "Segregated Witness (SegWit) ist ein Protokoll-Upgrade, das 2017 implementiert wurde. Es erhöht die Blockkapazität und verbessert die Manipulationssicherheit von Transaktionen.",
    author:"----",
    category: "technology"
  },
  {
    id: 35,
    text: "Die Blockchain ist ein verteiltes, öffentliches Hauptbuch, das jede Bitcoin-Transaktion aufzeichnet. Es wird von einem Netzwerk von Knotenpunkten gepflegt, die Transaktionen validieren und weiterleiten.",
    author:"----",
    category: "technology"
  },
  {
    id: 36,
    text: "Ein Bitcoin-Wallet ist eine Software- oder Hardwarelösung, die es den Nutzern ermöglicht, ihre öffentlichen und privaten Schlüssel zu verwalten, wodurch sie Bitcoin senden, empfangen und speichern können.",
    author:"----",
    category: "technology"
  },
  {
    id: 37,
    text: "Bitcoin verwendet den Elliptic Curve Digital Signature Algorithm (ECDSA) zur Signierung von Transaktionen, was die Authentizität des Absenders gewährleistet.",
    author:"----",
    category: "technology"
  },
  {
    id: 38,
    text: "Ein Brain Wallet ist eine Art von Bitcoin-Wallet, das private Schlüssel aus einer einprägsamen Passphrase generiert und eine Backup-Methode bietet, die sich ausschließlich auf das Gedächtnis verlässt.",
    author:"----",
    category: "technology"
  },
  {
    id: 39,
    text: "Der Blockbelohnung ist der Anreiz für Miner, das Netzwerk zu sichern. Sie wird ungefähr alle vier Jahre in einem Ereignis namens -Halving- halbiert.",
    author:"----",
    category: "technology"
  },
];
