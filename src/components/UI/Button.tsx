import Style from "./Button.module.scss";
const Button: React.FC<{ onClickHandler: () => void; disabled?: boolean }> = (
  props
) => {
  const { disabled } = props;

  const { onClickHandler } = props;
  return (
    <button className={Style.btn} onClick={onClickHandler} disabled={disabled}>
      {props.children}
    </button>
  );
};
export default Button;
