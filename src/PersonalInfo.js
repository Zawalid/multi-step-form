import { useState } from "react";
import { NextStepButton } from "./App";

export function PersonalInfo({ onNext }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!name || !email || !phone) return;
    onNext();
  };
  return (
    <div className="step-1 current-step">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Name </label>
          {!name && isSubmitted && <span>Please enter your name</span>}
        </div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Stephen King" />
        <div>
          <label htmlFor="email"> Email Address </label>
          {!email && isSubmitted && <span>Please enter your email</span>}
        </div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. stephenking@lorem.com" />
        <div>
          <label htmlFor="phone"> Phone Number </label>
          {!phone && isSubmitted && <span>Please enter your phone number</span>}
        </div>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. +1 234 567 890" />
        <NextStepButton> Next Step </NextStepButton>
      </form>
    </div>
  );
}
