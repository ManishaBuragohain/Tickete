import React, { useEffect, useState } from "react";
import "./Faq.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import ChatIcon from "../SVGIcons/chatIcon";
import AccordionItem from "../Accordian/AccordianItem";

const Faq = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const faqItems = [
    {
      question: "What should I do on my first trip to Rome?",
      answer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      question: "What are some hidden gems to see in Rome?",
      answer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      question: "How much time should I spend in Rome?",
      answer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      question: "What food is Rome known for?",
      answer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      question: "What is the best way to get around Rome?",
      answer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
  ];
  return (
    <div className="faqContainer">
      <div className="faqFirst">
        <p className="faqFirstPara">Frequently asked questions</p>
        <p className="faqSecondPara">
          Here are some of our most asked questions.
        </p>
        {!isMobile && (
          <div className="stillNeedHelp">
            <div>
              <p>
                Still need help?
                <br />
                We're here for you.
              </p>
              <SubmitButton isChat={true} />
            </div>
            <div>
              <ChatIcon />
            </div>
          </div>
        )}
      </div>
      <div className="faqSecond">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
        {isMobile && (
          <div className="stillNeedHelp">
            <div>
              <p>
                Still need help?
                <br />
                We're here for you.
              </p>
              <SubmitButton isChat={true} />
            </div>
            <div>
              <ChatIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
