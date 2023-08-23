import { useState } from "react";
import "./App.css";
import { AddOnsPick } from "./AddOnsPick";
import { Summary } from "./Summary";
import { Finish } from "./Finish";
import { PlanSelection } from "./PlanSelection";
import { Steps } from "./Steps";
import { PersonalInfo } from "./PersonalInfo";

const stepsComponents = [
  PersonalInfo,
  PlanSelection,
  AddOnsPick,
  Summary,
  Finish,
];
export const stepsInfo = ["YOUR INFO", "SELECT  PLAN", " ADD-ONS", "SUMMARY"];

export function NextStepButton({ onNext, children }) {
  return (
    <button
      className={"next" + (children === "Confirm" ? " confirm" : "")}
      onClick={onNext}
    >
      {children}
    </button>
  );
}
export function BackStepButton({ onBack }) {
  return (
    <button className="back" onClick={onBack}>
      Go back
    </button>
  );
}
export default function App() {
  const [currentStep, setCurrentStep] = useState(3);
  const StepComponent = stepsComponents[currentStep];
  const [period, setPeriod] = useState("monthly");
  const [plan, setPlan] = useState({
    name: "Arcade",
    price: 9,
  });
  const [addOns, setAddOns] = useState([
    {
      name: "Online service",
      info: "Access to multiplayer games",
      price: 1,
      checked: false,
    },
    {
      name: "Larger storage",
      info: "Extra 1TB of cloud save",
      price: 2,
      checked: false,
    },
    {
      name: "Customizable Profile",
      info: "Custom theme on your profile",
      price: 2,
      checked: false,
    },
  ]);

  const nextStepHandler = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const backStepHandler = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const selectPlanHandler = (plan) => {
    setPlan(plan);
  };
  const selectPeriodHandler = (period) => {
    setPeriod(period);
  };
  const addAddOnHandler = (addOn) => {
    setAddOns((prevAddOns) =>
      prevAddOns.map((add) =>
        add === addOn ? { ...addOn, checked: !addOn.checked } : add
      )
    );
  };
  const changePlanHandler = () => {
    setCurrentStep(1);
  };
  return (
    <>
      <Steps currentStep={currentStep} />
      <div className="content">
        {
          <StepComponent
            onNext={nextStepHandler}
            onBack={backStepHandler}
            {...((StepComponent === Summary ||
              StepComponent === PlanSelection) && {
              period,
              plan,
              onSelectPlan: selectPlanHandler,
              onSelectPeriod: selectPeriodHandler,
            })}
            {...(StepComponent === AddOnsPick && {
              period,
              addOns,
              onAddAddOn: addAddOnHandler,
            })}
            {...(StepComponent === Summary && {
              period,
              plan,
              addOns,
              onChangePlan: changePlanHandler,
            })}
          />
        }
      </div>
    </>
  );
}

