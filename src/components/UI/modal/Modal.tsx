import ReactDOM from "react-dom";
import Style from "./Modal.module.scss";
import { useState } from "react";
const Modal: React.FC<{
  title: string;
  message: string;
  onClickHandler: () => void;
}> = (props) => {
  const [close, setClose] = useState(true);
  const Backdrop = () => {
    return (
      <div
        className={Style.backdrop}
        onClick={() => {
          setClose((prev) => !prev);
        }}
      ></div>
    );
  };
  const ModalOverlay = () => {
    return (
      <div className={Style.modal}>
        <div className={Style.title}>{props.title}</div>
        <div className={Style.message}>{props.message}</div>
      </div>
    );
  };
  return (
    <div onClick={props.onClickHandler}>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
    </div>
  );
};
export default Modal;
