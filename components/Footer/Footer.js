import React from "react";
import logoFooter from "../../public/images/logo-footer.png";
import FooterCopyright from "./FooterCopyright";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Elements/Icon";

const Footer = () => (
  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <Link passHref href={`/`}>
                    <a>
                    <Image
                      className="logo logo-display"
                      src={logoFooter}
                      alt=""
                    /></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Nuestros canales</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <Link passHref href="https://www.google.com/maps/place/SOMOSGAY/@-25.288928,-57.638126,15z/data=!4m5!3m4!1s0x0:0xf7300d3e84206a7d!8m2!3d-25.288928!4d-57.638126">Independencia Nacional 1032 c/ Manduvirá</Link>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <Link passHref href="tel:+595986173200">+595 986 173 200</Link>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <Link passHref href="mailto:hola@somosgay.org">hola@somosgay.org</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <div className="footer-height" style={{ height: "463px" }}></div>
  </>
);

export default Footer;
