import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

type DisplayCardProps = {
  src: string;
  isPlaying: boolean;
  name: string;
};
const DisplayCard = (props: DisplayCardProps) => {
  return (
    <>
      <div className="h-32 w-32">
        <FontAwesomeIcon
          className="h-28 w-28"
          icon={props.isPlaying ? faPause : faPlay}
        />
      </div>
      {/* <div className="bg-stone-300">{props.name}</div> */}
    </>
  );
};

export default DisplayCard;
