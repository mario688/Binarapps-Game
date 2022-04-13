import React, { useState } from "react";
import VerticalNavBar from "./VerticalNavBar";
import Style from "./NavBar.module.scss";
import { ReactComponent as HamburgerIcon } from "../../../svg/hamburger.svg";
import { NavLink } from "react-router-dom";

const NavBar: React.FC<{ menuElements: String[]; menuLinks: String[] }> = (
  props
) => {
  const [showMenu, setshowMenu] = useState(false);

  const showMenuHandler = () => {
    setshowMenu((prevState) => !prevState);
  };

  const liList = props.menuElements.map((el, id) => (
    <NavLink className={Style.navlink} key={id} to={`${props.menuLinks[id]}`}>
      <li key={id}>{el}</li>
    </NavLink>
  ));
  const verticalList = [...liList];
  verticalList.unshift(
    <NavLink className={Style.navlink} key={"homeV"} to={`/`}>
      <li className={Style.homeIcon} key={"homeV"}>
        home
      </li>
    </NavLink>
  );

  liList.unshift(
    <NavLink className={Style.navlink} key={"home"} to={`/`}>
      <li className={Style.homeIcon} key={"home"}></li>
    </NavLink>
  );

  return (
    <>
      <VerticalNavBar
        onClickHandler={showMenuHandler}
        isOpen={showMenu}
        menuList={verticalList}
      />
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
