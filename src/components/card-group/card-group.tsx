import Card from '../sample-card';

const CardGroup = () => {
  // TODO call an API for a list
  const samples = ['/sounds/sad-violin.wav', '/sounds/sound1.wav'];
  const samples2 = ['/sounds/sad-violin.wav'];

  const cards = samples.map((sample, index) => (
    <Card key={index} samplePath={sample} />
  ));

  return <>{cards}</>;
};

export default CardGroup;
