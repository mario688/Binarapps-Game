import Input from "../../UI/Input";
import { useRef, useContext } from "react";
import Button from "../../UI/Button";
import NicknameContext from "../../../context/RegisterNicknameContext";
import Style from "./Register.module.scss";
const Register = () => {
  const refNick = useRef<HTMLInputElement>();
  const NicknamCtx = useContext(NicknameContext);

  const registerHandler = () => {
    const nickLength: number = refNick.current!.value!.trim().length;
    if (nickLength < 1) {
      return;
    }
    NicknamCtx.register(refNick.current!.value);
  };
  return (
    <div className={Style.formContainer}>
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
