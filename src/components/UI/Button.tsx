import Style from "./Button.module.scss";
const Button: React.FC<{ onClickHandler: () => void }> = (props) => {
  const { onClickHandler } = props;
  return (
    <button className={Style.btn} onClick={onClickHandler}>
      {props.children}
    </button>
  );
};
export default Button;
