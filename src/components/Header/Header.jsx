import React, { useEffect, useState } from "react";
import "./Header.css";
import TicketeLogo from "../SVGIcons/ticketeLogo";
import Checkout from "../SVGIcons/checkout";
import Help from "../SVGIcons/help";
import BackArrow from "../SVGIcons/backArrow";
import HelpSmall from "../SVGIcons/helpSmall";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="headerContainer">
      <div>{isMobile ? <BackArrow /> : <TicketeLogo />}</div>
      <div>
        <Checkout />
      </div>
      <div>{isMobile ? <HelpSmall /> : <Help />}</div>
    </div>
  );
};

export default Header;
