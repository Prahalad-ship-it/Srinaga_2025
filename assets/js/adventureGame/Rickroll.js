import RickRoll from './Rickroll.js';
import audioPath from '../audio/RickRollAudio.mp3';
class RickRoll {
    constructor(audioPath) {
      this.audio = new Audio(audioPath);
      this.audio.loop = true; // Loop the music continuously
    }
  
    play() {
      this.audio.play().catch(error => console.error("Audio playback failed:", error));
    }
  
    pause() {
      this.audio.pause();
    }
  
    stop() {
      this.audio.pause();
      this.audio.currentTime = 0; // Reset the audio to the start
    }
  }
  
  export default RickRoll;