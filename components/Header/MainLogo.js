import React from "react";
import logoWhite from "/public/images/logo-white.png"
import logoBlack from "/public/images/logo-black.png";
import Link from 'next/link';
import Image from 'next/image';

const MainLogo = ({ collapse, showMenu }) => {

  return (
  <div className="navbar-header">
    <button
      type="button"
      className={"navbar-toggle " + (collapse ? "collapsed" : "")}
      data-toggle="dropdown"
      data-target="#navbar-menu"
      onClick={showMenu}
    >
      <i className="icofont-navigation-menu"></i>
    </button>
    <div className="logo">
      <Link passHref={true} href="/">
        <a><Image className="logo logo-display" src={logoWhite} alt="" /></a>
      </Link>
      <Link passHref={true} href="/">
        <a><Image className="logo logo-scrolled" src={logoBlack} alt="" /></a>
      </Link>
    </div>
  </div>
)};

export default MainLogo;