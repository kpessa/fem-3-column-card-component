import './css/Card.scss'

const Card = ({ imgSrc, h1, p, color }) => {
  return (
    <section className="ccard" style={{ background: color }}>
      <img src={imgSrc} alt="icon" />
      <h1>{h1}</h1>
      <p>{p}</p>
      <button style={{ color: color }}>Learn More</button>
    </section>
  );
};

export default Card;
