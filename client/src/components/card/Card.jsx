import "./card.css";
import Button from "../button/Button";
import star from "../../assets/icons/star.svg";

/* eslint-disable react/prop-types */
const Card = ({
  className,
  image,
  title,
  info,
  price,
  showRating = false,
  showPrice = false,
  showButton = false,
  onOrder,
}) => {
  return (
    <div className={className}>
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>
      <h4 className="cardTitle">{title}</h4>
      {info && <p className="cardInfo">{info}</p>}
      {showRating && (
        <div className="cardRating">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="starIcon">
              <img src={star} alt="starIcon" />
            </div>
          ))}
        </div>
      )}

      <div className="cardFooter">
        {showPrice && <span className="cardPrice">${price}</span>}

        {showButton && (
          <Button
            className="cardButton"
            content="Order Now"
            onClick={onOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
