import React from "react";
import "./ComingSoon.css";
import CreditCard from "../SVGIcons/creditCard";
import PaymentSelection from "../SVGIcons/paymentSelection";
import CardBrand1 from "../SVGIcons/cardBrand1";
import CardBrand2 from "../SVGIcons/cardBrand2";
import CardBrand3 from "../SVGIcons/cardBrand3";
import PiggyBank from "../SVGIcons/piggyBank";
import InfoIconLight from "../SVGIcons/infoIconLight";
import SubmitButton from "../SubmitButton/SubmitButton";
import ApplePay from "../SVGIcons/applePay";
import GooglePay from "../SVGIcons/googlePay";
import NonSelection from "../SVGIcons/nonSelection";

const ComingSoon = (props) => {
  return (
    <div className="paymentFormContainerComingSoon">
      <div className="paymentBoxComing">
        <div className="paymentBoxFirstRowContainer">
          <div className="paymentBoxFirstRow">
            {props?.apple ? <ApplePay /> : <GooglePay />}
            <p>Coming soon</p>
          </div>
          <div>
            <NonSelection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
