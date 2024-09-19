import "./style.scss";

function CardInfo({ icon, value, category }) {
  return (
    <article className="btn-container">
      <div className="container-icon">
        <img src={icon} alt="icon" />
      </div>

      <div>
        <p className="item-value">{value}</p>
        <p className="item-category">{category}</p>
      </div>
    </article>
  );
}

export default CardInfo;
