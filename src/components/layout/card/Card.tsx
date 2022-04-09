import Style from "./Card.module.scss";
const Card: React.FC = (props) => {
  return <div className={Style.cardContainer}>{props.children}</div>;
};
export default Card;
