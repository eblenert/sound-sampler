import { isPlayerPlaying, pauseAudio, resetAudio } from '../../lib/audio-utils';

const stopAudio = (ap: HTMLAudioElement) => {
  pauseAudio(ap);
  resetAudio(ap);
};

const playAudio = (ap: HTMLAudioElement) => {
  ap.play();
};
export function toggleAudio(ap: HTMLAudioElement): boolean {
  if (isPlayerPlaying(ap)) {
    stopAudio(ap);
  } else {
    playAudio(ap);
  }

  return isPlayerPlaying(ap);
}
