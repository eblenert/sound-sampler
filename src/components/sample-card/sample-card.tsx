import React, { useRef, useState } from 'react';
import DisplayCard from '../display-card';
import { toggleAudio } from './toggle-audio';

type SampleCardInput = {
  samplePath: string;
};

const SampleCard = (props: SampleCardInput) => {
  const audioPlayer = useRef(new Audio(props.samplePath));
  const [isPlaying, setPlayingState] = useState(false);

  const onClickHandler = () => {
    const toggledPlayingState = toggleAudio(audioPlayer.current);

    setPlayingState(toggledPlayingState);
  };

  audioPlayer.current.addEventListener('ended', () => {
    setPlayingState(false);
  });

  return (
    <div
      onClick={onClickHandler}
      className="box-border border-4 h-32 w-32 mx-auto"
    >
      <DisplayCard isPlaying={isPlaying} src="" name="Sad Violin" />
      {/* {isPlaying ? 'Sound Is Playing' : ''} */}
    </div>
  );
};
export default SampleCard;
