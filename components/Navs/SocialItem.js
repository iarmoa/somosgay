import React from "react";
import Link from "next/link";
import Icon from "../Elements/Icon";

const SocialItem = ({ icon, link }) => (
  <li>
    <Link passHref href={link}>
      <a><Icon className={icon} icon={icon} /></a>
    </Link>
  </li>
);

export default SocialItem;