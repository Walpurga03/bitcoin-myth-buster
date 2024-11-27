export interface ResourceLink {
  title: string;
  description: string;
  url: string;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  type: 'youtube' | 'podcast' | 'blog' | 'website';
  resources: ResourceLink[];
}

export const sources: Source[] = [
  {
    id: 'aantonop',
    name: 'Andreas M. Antonopoulos',
    description: 'Bitcoin Grundlagen Erklärung',
    type: 'youtube',
    resources: [
      {
        title: 'Bitcoin verstehen',
        description: 'Ausführliche Bitcoin-Einführung vom Experten',
        url: 'https://www.youtube.com/watch?v=l1si5ZWLgy0'
      }
    ]
  },
  {
    id: 'blocktrainer',
    name: 'Blocktrainer',
    description: 'Bitcoin Einsteiger Artikel',
    type: 'website',
    resources: [
      {
        title: 'Einsteiger Artikel',
        description: 'Bitcoin Grundlagen für Anfänger',
        url: 'https://www.blocktrainer.de/wissen/artikel-fuer-einsteiger'
      }
    ]
  },
  {
    id: 'aprycot',
    name: 'Aprycot Media',
    description: 'Bitcoin Bildungsplattform',
    type: 'website',
    resources: [
      {
        title: 'Bitcoin lernen',
        description: 'Deutschsprachige Bitcoin-Bildungsinhalte',
        url: 'https://aprycot.media/thek/'
      }
    ]
  },
  {
    id: 'einundzwanzig',
    name: 'Einundzwanzig',
    description: 'Der Bitcoin Podcast',
    type: 'podcast',
    resources: [
      {
        title: 'Bitcoin Podcast',
        description: 'Deutschsprachiger Bitcoin-Podcast',
        url: 'https://einundzwanzig.space/podcast'
      }
    ]
  },
  {
    id: 'bitcoinpodcast',
    name: 'Florian Bruce Boye',
    description: 'Bitcoin News & Interviews',
    type: 'youtube',
    resources: [
      {
        title: 'Bitcoin News',
        description: 'Aktuelle Bitcoin Themen',
        url: 'https://www.youtube.com/@DerBitcoinPodcast'
      }
    ]
  }
];
