import './css/App.scss';
import Card from './Card';

// Images
import icon_sedans from './images/icon-sedans.svg';
import icon_luxury from './images/icon-luxury.svg';
import icon_suvs from './images/icon-suvs.svg';

function App() {
  const data = [
    {
      imgSrc: icon_sedans,
      h1: 'Sedans',
      p: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      color: 'hsl(31, 77%, 52%)',
    },
    {
      imgSrc: icon_suvs,
      h1: 'SUVs',
      p: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      color: 'hsl(184, 100%, 22%)',
    },
    {
      imgSrc: icon_luxury,
      h1: 'Luxury',
      p: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      color: 'hsl(179, 100%, 13%)',
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="kcontainer">
        <div className="card-container">
          {data.map(({ imgSrc, h1, p, color }, i) => {
            return <Card imgSrc={imgSrc} h1={h1} p={p} color={color} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
