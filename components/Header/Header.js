import React, { useState, useEffect, useCallback } from "react";
import dataNav from "../../data/nav-header-data.json";
import AttributeNav from "../Navs/AttributeNav";
import SocialNav from "../Navs/SocialNav";
import MainLogo from "./MainLogo";
import Link from "next/link";

const Header = ({ social }) => {
  const [fixed, setFixed] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const showMenu = () => {
    setCollapse(!collapse);
    const menu = document.getElementById("navbar-menu");
    collapse ? menu.classList.remove("in") : menu.classList.add("in");
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 34) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={
          "navbar-scrollspy navbar navbar-default navbar-fixed white bootsnav on no-full " +
          (fixed ? "" : "navbar-transparent")
        }
        data-minus-value-desktop="70"
        data-minus-value-mobile="55"
        data-speed="1000"
      >
        <div className="container">
          <AttributeNav>
            <SocialNav items={social} />
          </AttributeNav>
          <MainLogo showMenu={showMenu} />
          <div
            className="navbar-collapse collapse"
            id="navbar-menu"
            aria-expanded="false"
          >
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInLeft"
            >
              {dataNav.map((item) => (
                <li className="scroll" key={item.id}>
                  <Link
                    href={'/' + item.link}
                    onClick = {(e) => showMenu() }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;