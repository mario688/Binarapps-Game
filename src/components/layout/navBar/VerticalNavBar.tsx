import React from "react";
import Style from "./VerticalNavBar.module.scss";

const VerticalNavBar: React.FC<{
  isOpen: boolean;
  menuList: JSX.Element[];
  onClickHandler: () => void;
}> = (props) => {
  const { isOpen, menuList } = props;

  return (
    <>
      {isOpen && (
        <div onClick={props.onClickHandler} className={Style.backdrop}></div>
      )}
      <div
        className={`${Style.verticalNav} ${
          isOpen ? Style.navOpen : Style.navClose
        }`}
      >
        <ul className={Style.verticalBarList}>{menuList}</ul>
      </div>
    </>
  );
};
export default VerticalNavBar;
