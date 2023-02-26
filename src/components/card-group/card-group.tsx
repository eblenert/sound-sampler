import SampleCard from '../sample-card';

const CardGroup = () => {
  // TODO call an API for a list
  const samples = [
    '/sounds/sad-violin.wav',
    '/sounds/sound1.wav',
    '/sounds/guess-whos-back.mp3',
    '/sounds/cafeluta.mp3',
  ];

  const cards = samples.map((sample, index) => (
    <SampleCard key={index} samplePath={sample} />
  ));

  return <>{cards}</>;
};

export default CardGroup;
