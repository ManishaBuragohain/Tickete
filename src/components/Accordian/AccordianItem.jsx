import React, { useState } from "react";
import "./AccordianItem.css";
import PlusIcon from "../SVGIcons/plusIcon";
import CrossIcon from "../SVGIcons/crossIcon";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordionItem" onClick={() => setIsOpen(!isOpen)}>
      <div className="accordionTitle">
        <span>{isOpen ? <CrossIcon /> : <PlusIcon />}</span>
        <p className="question">{question}</p>
      </div>
      {isOpen && <div className="accordionContent">{answer}</div>}
    </div>
  );
};

export default AccordionItem;
