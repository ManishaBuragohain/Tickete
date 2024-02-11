import React, { useEffect, useState } from "react";
import "./Footer.css";
import LogoWhite from "../SVGIcons/ticketeLogoWhite";
import WhiteSmall from "../SVGIcons/whiteLogoSmall";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="footerContainer">
      <div>{isMobile ? <WhiteSmall /> : <LogoWhite />}</div>
      <div class="straightLineFooter"></div>
      <div className="footerLinks">
        <p
          className="linkText"
          style={{ fontSize: isMobile ? "11px" : "15px" }}
        >
          Made with ❤️ &nbsp;•&nbsp; Privacy policy &nbsp;•&nbsp; Terms of usage
          &nbsp;•&nbsp; Cancellation policy &nbsp;•&nbsp; sitemap
        </p>
      </div>
    </div>
  );
};

export default Footer;
