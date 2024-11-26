export class CustomVoice {
  private audioContext: AudioContext;
  private audioBuffer: AudioBuffer | null = null;
  private source: AudioBufferSourceNode | null = null;
  private isPlaying = false;

  constructor(audioUrl: string) {
    this.audioContext = new AudioContext();
    this.loadAudio(audioUrl);
  }

  private async loadAudio(url: string) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      this.audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  }

  play(text: string) {
    if (this.isPlaying) {
      this.stop();
    }

    if (!this.audioBuffer) {
      console.error('Audio not loaded yet');
      return;
    }

    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.connect(this.audioContext.destination);
    
    this.source.onended = () => {
      this.isPlaying = false;
    };

    this.source.start();
    this.isPlaying = true;
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
