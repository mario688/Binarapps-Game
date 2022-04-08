import React, { useState } from "react";

const NicknameContext = React.createContext({
  nickName: "",
  isRegistered: false,
  register: (nick: string) => {},
});

export const NicknameContextProvider: React.FC = (props) => {
  const [nickName, setNick] = useState("");

  const register = (nick: string) => {
    setNick(nick);
  };

  let isRegistered = !!nickName;

  return (
    <NicknameContext.Provider value={{ nickName, isRegistered, register }}>
      {props.children}
    </NicknameContext.Provider>
  );
};

export default NicknameContext;
