"use client";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "@/utils/helpers";

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "name") {
      setState((prev) => ({ ...prev, [name]: value }));
      return;
    }

    let formattedValue;
    if (name === "number") {
      formattedValue = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "cvc") {
      formattedValue = formatCVC(value);
    }
    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  console.log("card number", state.number);

  return (
    <div className="flex flex-col gap-4">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <p>
        <label className="block text-xs">카드 번호</label>
        <input
          type="text"
          name="number"
          className="w-full px-3 py-2 bg-white border-2 rounded-md outline-none"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </p>
      <div className="flex gap-4">
        <p>
          <label className="block text-xs">이름</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 bg-white border-2 rounded-md outline-none"
            placeholder="Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </p>
        <p>
          <label className="block text-xs">유효 기간</label>
          <input
            type="text"
            name="expiry"
            className="w-full px-3 py-2 bg-white border-2 rounded-md outline-none"
            placeholder="Valid Thru"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </p>
        <p>
          <label className="block text-xs">CVC</label>
          <input
            type="tel"
            name="cvc"
            className="w-full px-3 py-2 bg-white border-2 rounded-md outline-none"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </p>
      </div>
    </div>
  );
};

export default CreditCardForm;
