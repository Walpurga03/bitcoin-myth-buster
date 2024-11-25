export interface Myth {
  id: number;
  text: string;
  explanation: string;
  isMyth: boolean; 
}

export const myths: Myth[] = [
  {
    id: 1,
    text: "Kann man Bitcoin nur für illegale Dinge nutzen?",
    explanation: "Bitcoin ist wie das Internet oder Bargeld: Es kann für legale und illegale Zwecke verwendet werden. Die meisten Bitcoin-Transaktionen sind jedoch legal und transparent nachvollziehbar.",
    isMyth: false
  },
  {
    id: 2,
    text: "Hat Bitcoin überhaupt einen Wert?",
    explanation: "Ja, Bitcoin hat einen Wert, weil es ein knappes digitales Gut ist. Es bietet ein globales Zahlungssystem und kann als Wertspeicher genutzt werden, ähnlich wie Gold.",
    isMyth: true
  },
  {
    id: 3,
    text: "Verbraucht Bitcoin viel Energie?",
    explanation: "Bitcoin verbraucht Energie, aber das traditionelle Finanzsystem tut das auch. Bitcoin fördert die Nutzung erneuerbarer Energien und nutzt oft überschüssige Energie.",
    isMyth: false
  },
  {
    id: 4,
    text: "Ist Bitcoin zu unsicher für den täglichen Gebrauch?",
    explanation: "Bitcoin kann schwanken, aber mit zunehmender Nutzung stabilisiert sich der Preis. Es gibt Lösungen, um die Schwankungen für den täglichen Gebrauch auszugleichen.",
    isMyth: false
  },
  {
    id: 5,
    text: "Wurde Bitcoin jemals gehackt?",
    explanation: "Das Bitcoin-Netzwerk selbst wurde noch nie gehackt. Probleme entstehen meist durch unsichere Aufbewahrung oder Betrug, nicht durch das Bitcoin-Protokoll.",
    isMyth: false
  },
  {
    id: 6,
    text: "Ist Bitcoin komplett anonym?",
    explanation: "Bitcoin-Transaktionen sind pseudonym, nicht anonym. Alle Transaktionen sind öffentlich und können zu Adressen zurückverfolgt werden.",
    isMyth: false
  },
  {
    id: 7,
    text: "Kann Bitcoin inflationär werden?",
    explanation: "Bitcoin ist deflationär, da es nur 21 Millionen Coins geben wird. Es ist vor Inflation geschützt, anders als Fiat-Währungen.",
    isMyth: false
  },
  {
    id: 8,
    text: "Ist Bitcoin nur eine Blase?",
    explanation: "Bitcoin hat in der Vergangenheit Schwankungen erlebt, aber es hat sich immer wieder erholt und neue Höchststände erreicht.",
    isMyth: false
  },
  {
    id: 9,
    text: "Können Regierungen Bitcoin verbieten?",
    explanation: "Regierungen können den Handel mit Bitcoin einschränken, aber das Netzwerk selbst ist schwer zu verbieten, da es dezentralisiert ist.",
    isMyth: false
  },
  {
    id: 10,
    text: "Ist Bitcoin nur für Technik-Experten?",
    explanation: "Es gibt viele benutzerfreundliche Plattformen, die Bitcoin für jedermann zugänglich machen, auch ohne technisches Wissen.",
    isMyth: false
  },
  {
    id: 11,
    text: "Kann Bitcoin wertlos werden?",
    explanation: "Es ist unwahrscheinlich, dass Bitcoin wertlos wird, da es eine große Nutzerbasis und begrenzte Versorgung hat, die seinen Wert stützt.",
    isMyth: false
  },
  {
    id: 12,
    text: "Gibt es versteckte Codes im Bitcoin-Protokoll?",
    explanation: "Bitcoin ist Open Source, was bedeutet, dass der Code öffentlich und überprüfbar ist. Ein versteckter Code wäre entdeckt worden.",
    isMyth: false
  },
    {
      id: 13,
      text: "Sind Bitcoin-Transaktionen reversibel?",
      explanation: "Nein, Bitcoin-Transaktionen sind endgültig und können nach Bestätigung nicht rückgängig gemacht werden. Dies stellt sicher, dass keine Rückbuchungen erfolgen können.",
      isMyth: false
    },
    {
      id: 14,
      text: "Wird Bitcoin von einer zentralen Behörde kontrolliert?",
      explanation: "Nein, Bitcoin ist ein dezentrales Netzwerk, das von einem globalen Netzwerk von Computern verwaltet wird, ohne zentrale Autorität.",
      isMyth: false
    },
    {
      id: 15,
      text: "Kann jeder am Bitcoin-Netzwerk teilnehmen?",
      explanation: "Ja, jeder mit einem Computer und Internetverbindung kann am Bitcoin-Netzwerk teilnehmen, sei es als Nutzer, Miner oder Knoten.",
      isMyth: false
    },
    {
      id: 16,
      text: "Ist Bitcoin nur für digitale Zahlungen nützlich?",
      explanation: "Nein, Bitcoin kann auch als Wertspeicher und Absicherung gegen Inflation genutzt werden, ähnlich wie Gold.",
      isMyth: false
    },
    {
      id: 17,
      text: "Muss ich ganze Bitcoins kaufen?",
      explanation: "Nein, Bitcoin kann in sehr kleine Bruchteile aufgeteilt werden, bis hin zu einem Satoshi, der ein Hundertmillionstel eines Bitcoins darstellt.",
      isMyth: false
    },
    {
      id: 18,
      text: "Sind Bitcoin-Transaktionen sofort bestätigt?",
      explanation: "Nein, Bitcoin-Transaktionen benötigen Zeit, um von Minern bestätigt zu werden, was je nach Netzwerkbelastung variieren kann.",
      isMyth: false
    },
    {
      id: 19,
      text: "Kann Bitcoin beliebig oft kopiert werden?",
      explanation: "Nein, Bitcoin kann nicht kopiert werden, da jede Transaktion im Blockchain-Ledger erfasst wird, das unveränderlich ist.",
      isMyth: false
    },
    {
      id: 20,
      text: "Kann ich Bitcoin ohne Internet nutzen?",
      explanation: "Nein, du benötigst eine Internetverbindung, um Bitcoin-Transaktionen durchzuführen, da sie über das Netzwerk abgewickelt werden.",
      isMyth: false
    },
    {
      id: 21,
      text: "Kann ich mein Bitcoin-Wallet verlieren?",
      explanation: "Ja, wenn du die privaten Schlüssel verlierst, verlierst du den Zugriff auf dein Wallet und deine Bitcoins.",
      isMyth: false
    },
    {
      id: 22,
      text: "Sind Bitcoin-Zahlungen anonym?",
      explanation: "Bitcoin-Zahlungen sind pseudonym, da Adressen verwendet werden, die nicht direkt mit einer Person verknüpft sind, aber Transaktionen sind öffentlich einsehbar.",
      isMyth: false
    }
];
