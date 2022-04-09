import React, { useState } from "react";
import VerticalNavBar from "./VerticalNavBar";
import Style from "./NavBar.module.scss";
import { ReactComponent as HamburgerIcon } from "../../../svg/hamburger.svg";

const NavBar: React.FC<{ menuElements: String[] }> = (props) => {
  const [showMenu, setshowMenu] = useState(false);

  const showMenuHandler = () => {
    setshowMenu((prevState) => !prevState);
  };
  const liList = props.menuElements.map((el, id) => <li key={id}>{el}</li>);

  return (
    <>
      <VerticalNavBar isOpen={showMenu} menuList={liList} />
      <nav className={Style.navBar}>
        <ul className={Style.navBarList}>
          {liList.slice(0, liList.length - 1)}
          <div className={Style.lastElement}>{liList[liList.length - 1]}</div>
        </ul>
        <HamburgerIcon
          className={Style.hamburegeMenuIcon}
          onClick={showMenuHandler}
        />
      </nav>
    </>
  );
};
export default NavBar;
