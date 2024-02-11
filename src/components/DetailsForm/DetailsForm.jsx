import React from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  return (
    <>
      <div className="detailsFormContainer">
        <p className="formHeader">Enter your details</p>
        <p className="formDescription">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
        <div className="formFieldsContainer">
          <div className="firstRowForm">
            <input
              className="inputField"
              type="text"
              placeholder="Full name *"
            />
          </div>
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Country code *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Phone number *"
            />
          </div>
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Email *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Confirm email *"
            />
          </div>
        </div>
      </div>
      <div class="straightLine"></div>
      <div className="detailsFormContainer">
        <p className="formHeader">Additional information</p>
        <p className="formDescription">
          We need a few more details to complete your reservation.
        </p>
        <div className="formFieldsContainer">
          <div className="formFieldsContainer bottomRow">
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Input label *"
            />
            <input
              className="inputField twoItemsMain"
              type="text"
              placeholder="Select *"
            />
          </div>
          <div className="firstRowForm1">
            <input
              className="inputField"
              type="text"
              placeholder="Multiselect *"
            />
          </div>
        </div>
      </div>
      <div class="straightLine"></div>
    </>
  );
};

export default DetailsForm;
