import React from "react";
import "./PaymentForm.css";
import CreditCard from "../SVGIcons/creditCard";
import PaymentSelection from "../SVGIcons/paymentSelection";
import CardBrand1 from "../SVGIcons/cardBrand1";
import CardBrand2 from "../SVGIcons/cardBrand2";
import CardBrand3 from "../SVGIcons/cardBrand3";
import PiggyBank from "../SVGIcons/piggyBank";
import InfoIconLight from "../SVGIcons/infoIconLight";
import SubmitButton from "../SubmitButton/SubmitButton";

const PaymentForm = () => {
  return (
    <div className="paymentFormContainer">
      <p className="formHeader">Select your mode of payment</p>
      <p className="formDescription">
        Payments with Tickete are secure and encrypted.
      </p>
      <div className="paymentBox">
        <div className="paymentBoxFirstRowContainer">
          <div className="paymentBoxFirstRow">
            <CreditCard />
            <p>Credit & debit card</p>
          </div>
          <div>
            <PaymentSelection />
          </div>
        </div>
        <div className="secondRowContainer">
          <CardBrand1 />
          <CardBrand2 />
          <CardBrand3 />
        </div>
        <div className="formFieldsContainer bottomRow">
          <input
            className="inputField twoItemsMain"
            type="text"
            placeholder="Name on card *"
          />
          <input
            className="inputField twoItemsMain"
            type="text"
            placeholder="Card number *"
          />
        </div>
        <div className="formFieldsContainer bottomRow">
          <input
            className="inputField twoItemsMain"
            type="text"
            placeholder="Expiry date *"
          />
          <input
            className="inputField twoItemsMain"
            type="text"
            placeholder="CVV *"
          />
        </div>
        <div class="straightLine"></div>
        <div className="totalPayableDiv">
          <div className="paymentBoxFirstRow">
            <p>Total payable: $XXX</p>
          </div>
          <div className="youSaveContainer">
            <p>
              <span className="piggyBank">
                <PiggyBank />
              </span>
              You save {`<price>`}
            </p>
          </div>
        </div>
        <div>
          <div className="paymentBoxFirstRow infoContainer">
            <p className="infoText">You will be charged in AED</p>
            <span className="infoIcon">
              <InfoIconLight />
            </span>
          </div>
          <div className="paymentBoxFirstRow infoContainerTerms">
            <p className="infoTerms">
              By clicking “confirm & pay”, you agree to{" "}
              <span className="infoTermsSpan">
                Tickete’s general terms and conditions
              </span>{" "}
              and <span className="infoTermsSpan">cancellation policy.</span>
            </p>
          </div>
          <div className="submitButtonContainer">
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
