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
    explanation: "Bitcoin wird für viele legale Zwecke verwendet, wie Investitionen, Überweisungen und Zahlungen. Illegale Aktivitäten machen nur einen kleinen Teil aus.",
    isMyth: false
  },
  {
    id: 2,
    text: "Wurde Bitcoin schon einmal gehackt?",
    explanation: "Das Bitcoin-Netzwerk selbst wurde noch nie gehackt. Probleme entstehen meist durch unsichere Wallets oder Börsen, nicht durch Bitcoin selbst.",
    isMyth: false
  },
  {
    id: 3,
    text: "Ist Bitcoin eine Blase?",
    explanation: "Bitcoin hat Preisschwankungen, aber auch echten Nutzen als Zahlungssystem und Wertspeicher. Eine Blase hat keinen echten Wert.",
    isMyth: false
  },
  {
    id: 4,
    text: "Verbraucht Bitcoin zu viel Energie?",
    explanation: "Bitcoin nutzt erneuerbare Energien und hilft sogar, Energieüberschüsse sinnvoll zu nutzen. Der Energieverbrauch sichert das Netzwerk.",
    isMyth: false
  },
  {
    id: 5,
    text: "Ist Bitcoin nur für Technik-Experten?",
    explanation: "Bitcoin wird immer benutzerfreundlicher. Heute kann jeder mit einem Smartphone Bitcoin nutzen, ohne technisches Wissen.",
    isMyth: false
  },
  {
    id: 6,
    text: "Hat Bitcoin einen echten Wert?",
    explanation: "Bitcoin hat Wert durch sein Netzwerk, Sicherheit, Knappheit und Nutzen als Zahlungssystem und Wertspeicher.",
    isMyth: true
  },
  {
    id: 7,
    text: "Kann Bitcoin von Regierungen verboten werden?",
    explanation: "Bitcoin ist ein dezentrales Netzwerk und kann nicht komplett verboten werden. Lokale Einschränkungen sind möglich.",
    isMyth: false
  },
  {
    id: 8,
    text: "Schwankt der Bitcoin-Preis zu stark für tägliche Nutzung?",
    explanation: "Die Preisschwankungen werden mit der Zeit geringer. Außerdem gibt es möglichkeiten für schnelle Umtauschmöglichkeiten für den Alltag.",
    isMyth: false
  },
  {
    id: 9,
    text: "Wird Bitcoin von großen Investoren kontrolliert?",
    explanation: "Nein, Bitcoin ist dezentral. Große Investoren (auch 'Wale' genannt) können zwar den Preis beeinflussen, haben aber keine Kontrolle über das Bitcoin-Netzwerk selbst.",
    isMyth: false
  },
  {
    id: 10,
    text: "Ist Bitcoin anonym?",
    explanation: "Bitcoin ist pseudonym, nicht anonym. Alle Transaktionen sind öffentlich nachverfolgbar.",
    isMyth: false
  },
  {
    id: 11,
    text: "Kann man Bitcoin einfach kopieren?",
    explanation: "Ja, aber obwohl der Bitcoin-Code frei verfügbar ist, können die wichtigsten Eigenschaften nicht kopiert werden: das riesige dezentrale Netzwerk, die Sicherheit durch tausende Miner und das Vertrauen der Nutzer.",
    isMyth: true
  },
  {
    id: 12,
    text: "Gibt es versteckte Codes im Bitcoin-Protokoll?",
    explanation: "Bitcoin ist Open Source, was bedeutet, dass der Code öffentlich und überprüfbar ist. Ein versteckter Code serait entdeckt worden.",
    isMyth: false
  },
  {
    id: 13,
    text: "Können Bitcoin-Transaktionen rückgängig gemacht werden?",
    explanation: "Nein, Bitcoin-Transaktionen sind endgültig und können nach der Bestätigung nicht mehr rückgängig gemacht werden. Dies macht das System sicher gegen nachträgliche Änderungen.",
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
    isMyth: true
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
    text: "Kann ich Bitcoin nur mit Internet nutzen?",
    explanation: "Nein, Bitcoin kann auch über alternative Wege wie SMS, Satellit (z.B. Blockstream Satellite) oder Radio-Übertragungen genutzt werden. Eine direkte Internet-Verbindung ist nicht zwingend erforderlich.",
    isMyth: false
  },
  {
    id: 20,
    text: "Kann ich mein Bitcoin-Wallet verlieren?",
    explanation: "Ja, wenn du die privaten Schlüssel verlierst, verlierst du den Zugriff auf dein Wallet und deine Bitcoins.",
    isMyth: true
  },
  {
    id: 21,
    text: "Sind Bitcoin wie echte Münzen die man besitzen kann?",
    explanation: "Nein, Bitcoin existieren nur als Einträge im Netzwerk. Man besitzt nur die privaten Schlüssel, die wie ein Passwort funktionieren und mit denen man die Bitcoin im Netzwerk kontrollieren kann.",
    isMyth: false
  },
  {
  id: 22,
  text: "Könnte Satoshi Nakamoto Bitcoin kontrollieren, wenn er zurückkehrt?",
  explanation: "Nein, selbst der Bitcoin-Erfinder Satoshi Nakamoto konnte das Netzwerk nicht kontrollieren. Das dezentrale System funktioniert unabhängig von einzelnen Personen.",
  isMyth: false
  },
  {
    id: 23,
    text: "Weiß man, wer Satoshi Nakamoto wirklich ist?",
    explanation: "Nein, die wahre Identität des Bitcoin-Erfinders ist bis heute unbekannt. Viele haben behauptet Satoshi zu sein, aber niemand konnte es bisher beweisen.",
    isMyth: false
  }
];

export default myths;
