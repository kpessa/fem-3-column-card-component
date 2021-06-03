import { useState } from 'react';

import './css/Card.scss';

const Card = ({ imgSrc, h1, p, color }) => {
  const [hover, setHover] = useState(false);

  const mouseOverHandler = () => setHover(true);
  const mouseOutHandler = () => setHover(false);

  return (
    <section className="ccard" style={{ background: color }}>
      <img src={imgSrc} alt="icon" />
      <h1>{h1}</h1>
      <p>{p}</p>
      <button style={{ color: !hover && color, background: hover && color }} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        Learn More
      </button>
    </section>
  );
};

export default Card;
