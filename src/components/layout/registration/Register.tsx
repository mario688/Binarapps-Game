import Input from "../../UI/Input";
import { useRef, useState, useContext } from "react";
import Button from "../../UI/Button";
import { useNavigate } from "react-router";
import Modal from "../../UI/modal/Modal";
import NicknameContext from "../../../context/RegisterNicknameContext";
import Style from "./Register.module.scss";
const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const refNick = useRef<HTMLInputElement>();
  const NicknamCtx = useContext(NicknameContext);
  const navigate = useNavigate();
  const registerHandler = () => {
    const nickLength: number = refNick.current!.value!.trim().length;
    if (nickLength < 1) {
      setShowModal(true);
      return;
    }
    NicknamCtx.register(refNick.current!.value.trim());
    navigate("/play");
  };
  return (
    <div className={Style.formContainer}>
      {showModal && (
        <Modal
          onClickHandler={() => {
            setShowModal((prev) => !prev);
          }}
          title="INFO"
          message="Please insert nick"
        />
      )}
      <Input
        ref={refNick}
        label={"Nick: "}
        input={{
          type: "text",
          id: "nickName",
          required: true,
          minLength: 3,
          placeholder: "Enter your nickname here...",
        }}
      />
      <Button onClickHandler={registerHandler}>Play</Button>
    </div>
  );
};
export default Register;
