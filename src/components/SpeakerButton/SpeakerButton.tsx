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
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Prüfe ob Speech Synthesis unterstützt wird
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      setIsSupported(true);
      
      const loadGermanVoice = () => {
        try {
          const voices = window.speechSynthesis.getVoices();
          
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

            // Versuche die beste Stimme zu finden
            const selectedVoice = maleVoice || 
              // Fallback: Versuche eine Stimme mit "Deutsch" im Namen zu finden
              germanVoices.find(voice => voice.name.toLowerCase().includes('deutsch')) || 
              // Sonst nimm die erste deutsche Stimme
              germanVoices[0];
            
            console.log('Verfügbare deutsche Stimmen:', germanVoices.map(v => v.name).join(', '));
            console.log('Gewählte Stimme:', selectedVoice.name);
            
            setGermanVoice(selectedVoice);
          } else {
            console.log('Keine deutsche Stimme gefunden');
          }
        } catch (error) {
          console.error('Fehler beim Laden der Stimmen:', error);
        }
      };

      // Versuche Stimmen sofort zu laden
      loadGermanVoice();

      // Registriere Event-Listener für das Laden der Stimmen
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadGermanVoice;
      }

      return () => {
        try {
          window.speechSynthesis.cancel();
          if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = null;
          }
        } catch (error) {
          console.error('Fehler beim Cleanup:', error);
        }
      };
    } else {
      console.log('Speech Synthesis wird nicht unterstützt');
    }
  }, []);

  const handlePlay = () => {
    if (!isSupported || !germanVoice) {
      setIsPlaying(!isPlaying);
      setTimeout(() => setIsPlaying(false), 500);
      return;
    }

    try {
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
        try {
          const utterance = new SpeechSynthesisUtterance(sentence.trim());
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

          utterance.onerror = (event) => {
            console.error('Fehler bei der Sprachausgabe:', event);
            setIsPlaying(false);
          };

          utteranceRef.current = utterance;
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error('Fehler beim Sprechen eines Satzes:', error);
          setIsPlaying(false);
        }
      };

      speakSentence(sentences[0]);
    } catch (error) {
      console.error('Fehler beim Starten der Sprachausgabe:', error);
      setIsPlaying(false);
    }
  };

  return (
    <div className="speaker-controls">
      <button 
        className={`speaker-button ${isPlaying ? 'playing' : ''} ${!isSupported || !germanVoice ? 'unsupported' : ''}`}
        onClick={handlePlay}
        aria-label={isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen'}
        title={!isSupported || !germanVoice ? 'Sprachausgabe nicht verfügbar' : (isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen')}
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
