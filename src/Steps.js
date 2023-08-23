import { stepsInfo } from "./App";

function Step({ number, info, currentStep }) {
  return (
    <div className="step">
      <div
        className={"number " + (number === currentStep ? "current-step-number" : "")}
      >
        <span>{number + 1}</span>
      </div>
      <div className="info">
        <span>Step {number + 1}</span>
        <p>{info}</p>
      </div>
    </div>
  );
}
export function Steps({ currentStep }) {
  return (
    <div className="steps">
      {stepsInfo.map((info, index) => (
        <Step
          number={index}
          info={info}
          key={index}
          currentStep={currentStep} />
      ))}
    </div>
  );
}
