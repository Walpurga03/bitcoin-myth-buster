import { useState, useEffect, useRef } from 'react';
import './SpeakerButton.scss';

interface SpeakerButtonProps {
  text: string;
}

// Liste von bekannten männlichen Stimmen
const MALE_VOICE_KEYWORDS = ['male', 'männlich', 'stefan', 'hans', 'michael', 'klaus'];

export const SpeakerButton = ({ text }: SpeakerButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [germanVoice, setGermanVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Funktion zum Laden der deutschen Männerstimme
    const loadGermanVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const germanVoices = voices.filter(voice => voice.lang.startsWith('de'));
      
      if (germanVoices.length > 0) {
        // Suche nach männlicher Stimme
        const maleVoice = germanVoices.find(voice => 
          MALE_VOICE_KEYWORDS.some(keyword => 
            voice.name.toLowerCase().includes(keyword)
          )
        );

        // Wenn keine explizit männliche Stimme gefunden wurde, 
        // bevorzuge Microsoft oder Google Stimmen
        const selectedVoice = maleVoice || germanVoices.find(
          voice => voice.name.includes('Microsoft') || voice.name.includes('Google')
        ) || germanVoices[0];
        
        setGermanVoice(selectedVoice);
        console.log('Selected German voice:', selectedVoice.name);
      }
    };

    // Lade Stimmen initial und wenn sie sich ändern
    loadGermanVoice();
    window.speechSynthesis.onvoiceschanged = loadGermanVoice;

    // Cleanup
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = () => {
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    // Stoppe vorherige Sprachausgabe
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 1.35; // Etwas langsamer sprechen
    utterance.pitch = 0.5; // Etwas tiefere Stimme für männlicheren Klang
    
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="speaker-controls">
      <button 
        className={`speaker-button ${isPlaying ? 'playing' : ''}`}
        onClick={isPlaying ? stopSpeaking : speak}
        aria-label={isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen'}
        title={isPlaying ? 'Stoppe Vorlesen' : 'Text vorlesen'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
    </div>
  );
};
