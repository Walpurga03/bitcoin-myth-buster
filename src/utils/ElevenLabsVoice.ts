export class ElevenLabsVoice {
  private apiKey: string;
  private voiceId: string;
  private audioContext: AudioContext | null = null;
  private audioBuffer: AudioBuffer | null = null;
  private source: AudioBufferSourceNode | null = null;
  private isPlaying = false;

  constructor(apiKey: string, voiceId: string) {
    this.apiKey = apiKey;
    this.voiceId = voiceId;
  }

  async speak(text: string) {
    if (this.isPlaying) {
      this.stop();
    }

    try {
      console.log('Calling ElevenLabs API with:', {
        voiceId: this.voiceId,
        apiKeyLength: this.apiKey.length,
        textLength: text.length
      });

      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${this.voiceId}/stream`,
        {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': this.apiKey,
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            }
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('ElevenLabs API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        });
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      
      if (!this.audioContext) {
        this.audioContext = new AudioContext();
      }

      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.source = this.audioContext.createBufferSource();
      this.source.buffer = this.audioBuffer;
      this.source.connect(this.audioContext.destination);
      
      this.source.onended = () => {
        this.isPlaying = false;
      };

      this.source.start();
      this.isPlaying = true;

    } catch (error) {
      console.error('Detailed error:', error);
      this.isPlaying = false;
      throw error;
    }
  }

  stop() {
    if (this.source) {
      this.source.stop();
      this.source = null;
    }
    this.isPlaying = false;
  }

  isCurrentlyPlaying() {
    return this.isPlaying;
  }
}
