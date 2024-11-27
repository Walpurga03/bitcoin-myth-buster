import { useState, useEffect, useRef } from 'react';
import './SpeakerButton.scss';

interface SpeakerButtonProps {
  text: string;
}

// Liste bekannter männlicher Stimmen
const MALE_VOICE_NAMES = [
  'deutsch male', 'german male',
  'markus', 'hans', 'stefan', 'klaus',
  'microsoft stefan', 'microsoft markus',
  'google deutsch männlich'
];

export const SpeakerButton = ({ text }: SpeakerButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [germanVoice, setGermanVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadGermanVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);

      // Filter für deutsche Stimmen
      const germanVoices = voices.filter(voice => 
        voice.lang.startsWith('de') || 
        voice.lang.startsWith('de-DE')
      );
      
      if (germanVoices.length > 0) {
        // Suche nach männlicher Stimme
        const maleVoice = germanVoices.find(voice => 
          MALE_VOICE_NAMES.some(name => 
            voice.name.toLowerCase().includes(name.toLowerCase())
          )
        );

        // Wenn keine explizit männliche Stimme gefunden wurde,
        // versuche eine tiefere Stimme zu finden oder nehme die erste
        const selectedVoice = maleVoice || germanVoices[0];
        
        console.log('Verfügbare Stimmen:', germanVoices.map(v => v.name));
        console.log('Gewählte Stimme:', selectedVoice.name);
        
        setGermanVoice(selectedVoice);
      }
    };

    loadGermanVoice();
    window.speechSynthesis.onvoiceschanged = loadGermanVoice;

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Debug-Funktion zum Anzeigen aller verfügbaren Stimmen
  const logAvailableVoices = () => {
    console.log('Alle verfügbaren Stimmen:');
    availableVoices.forEach(voice => {
      console.log(`Name: ${voice.name}, Sprache: ${voice.lang}, Geschlecht: ${voice.name.toLowerCase().includes('male') ? 'männlich' : 'unbekannt'}`);
    });
  };

  const handlePlay = () => {
    if (!germanVoice) return;

    // Für Debug-Zwecke
    logAvailableVoices();

    // Stoppe vorherige Wiedergabe
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    // Text in Sätze aufteilen für natürlichere Pausen
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let currentSentence = 0;

    const speakSentence = (sentence: string) => {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.voice = germanVoice;
      
      // Optimierte Einstellungen für männlichere Stimme
      utterance.rate = 0.85;    // Etwas langsamer
      utterance.pitch = 0.8;    // Tiefere Stimme
      utterance.volume = 1.0;   // Volle Lautstärke

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        currentSentence++;
        if (currentSentence < sentences.length) {
          // Kurze Pause zwischen Sätzen
          setTimeout(() => {
            speakSentence(sentences[currentSentence]);
          }, 300);
        } else {
          setIsPlaying(false);
        }
      };

      utterance.onerror = () => {
        console.error('Fehler bei der Sprachausgabe');
        setIsPlaying(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    };

    speakSentence(sentences[0]);
  };

  return (
    <div className="speaker-controls">
      <button 
        className={`speaker-button ${isPlaying ? 'playing' : ''}`}
        onClick={handlePlay}
        aria-label={isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen'}
        title={isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen'}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isPlaying ? (
            // Pause Icon
            <>
              <line x1="6" y1="4" x2="6" y2="20" />
              <line x1="18" y1="4" x2="18" y2="20" />
            </>
          ) : (
            // Speaker Icon
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
};
