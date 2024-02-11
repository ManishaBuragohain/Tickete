import React from "react";
import "./PageBody.css";
import InfoIcon from "../SVGIcons/infoIcon";
import DetailsForm from "../DetailsForm/DetailsForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Carousel from "../CarouselContainer/CarouselContainer";
import Star from "../SVGIcons/star";
import Calendar from "../SVGIcons/calendar";
import Ticket from "../SVGIcons/ticket";
import Time from "../SVGIcons/time";
import Guests from "../SVGIcons/guests";
import PiggyBank from "../SVGIcons/piggyBank";
import InfoIconLight from "../SVGIcons/infoIconLight";
import SubmitButton from "../SubmitButton/SubmitButton";
import Faq from "../FAQ/Faq";
import ComingSoon from "../ComingSoon/ComingSoon";
import InfoDark from "../SVGIcons/infoDark";

const PageBody = () => {
  return (
    <>
      <div className="mainContainer">
        {/*  */}
        <div className="confirmAndPayContainer">
          <span className="confirmTextDeskTop">Confirm & pay</span>
          <div className="freeCancellationContainer">
            <div className="freeCancellationFirstRow">
              <p className="freeCancellationFirstRowPara">Free cancellation</p>
              <p>
                <InfoIcon />
              </p>
            </div>
            <div className="freeCancellationSecondRow">
              <p>Tickets can be cancelled by 13th December, 2022.</p>
            </div>
          </div>
          <DetailsForm />
          <PaymentForm />
          <ComingSoon />
          <ComingSoon />
          <div className="straightLine"></div>
          <div className="totalPayable">
            <p>Total payable: $XXX</p>
          </div>
          <div className="chargedIn">
            <div>
              <InfoDark />
            </div>
            <p>
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
          <div className="straightLine"></div>
        </div>
        {/*  */}
        <div className="carouselContainer">
          <span className="confirmTextMobile">Confirm & pay</span>
          <div className="carouselInnerContainer">
            <div className="carouselBody">
              <Carousel />
              <div className="carouselBodyText">
                <div className="star">
                  <Star />
                </div>
                <p className="ratingText">4.9 (4.5k) • {`<category>`}</p>
              </div>
              <div className="carouselDescription">
                <p>
                  Amsterdam open boat canal cruise - Live Guiye - from Anne
                  Frank Housef
                </p>
              </div>
              <div className="carouselSpecifications">
                <div className="specificationTextContainer">
                  <div>
                    <Ticket />
                  </div>
                  <div className="specificationText">
                    <p className="specificationMainText">{`<ticket type - variant>`}</p>
                    <p className="specificationSubText">Duration: duration</p>
                  </div>
                </div>
                <div className="specificationTextContainer">
                  <div>
                    <Calendar />
                  </div>
                  <div className="specificationText">
                    <p className="specificationMainText">{`<day>, <month>, <date>`}</p>
                    <p className="specificationSubText">Duration: duration</p>
                  </div>
                </div>
                <div className="specificationTextContainer">
                  <div>
                    <Time />
                  </div>
                  <div className="specificationText">
                    <p className="specificationMainText">{`<time>`}</p>
                    <p className="specificationSubText">
                      Operating hours: {`<time> to <time>`}
                    </p>
                  </div>
                </div>
                <div className="specificationTextContainer">
                  <div>
                    <Guests />
                  </div>
                  <div className="specificationText">
                    <p className="specificationMainText">{`5 guests`}</p>
                  </div>
                </div>
                <div class="dottedLine"></div>
                <div className="viewPaymentSummaryContainer">
                  <p className="viewPaymentSummaryText">View payment summary</p>
                  <p className="plusIcon">+</p>
                </div>
              </div>
              <div class="straightLineDiv"></div>
              <div className="paymentBoxFirstRowCarousel">
                <div>
                  <p>Total payable: </p>
                </div>
                <div>
                  <p>$XXX</p>
                </div>
              </div>
              <div className="youSaveContainer" style={{ width: "124px" }}>
                <p>
                  <span className="piggyBank">
                    <PiggyBank />
                  </span>
                  You saved {`<price>`}
                </p>
              </div>
              <div className="paymentBoxFirstRow infoContainer">
                <p className="infoText">You will be charged in AED</p>
                <span className="infoIcon">
                  <InfoIconLight />
                </span>
              </div>
              <div>
                <div className="paymentBoxFirstRow infoContainerTerms">
                  <p className="infoTerms">
                    By clicking “confirm & pay”, you agree to{" "}
                    <span className="infoTermsSpan">
                      Tickete’s general terms and conditions
                    </span>{" "}
                    and{" "}
                    <span className="infoTermsSpan">cancellation policy.</span>
                  </p>
                </div>
                <div className="submitButtonContainer">
                  <SubmitButton fullWidth={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default PageBody;
