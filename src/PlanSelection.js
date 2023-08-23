import { BackStepButton, NextStepButton } from "./App";

export function PlanSelection({
  onNext, onBack, plan, period, onSelectPlan, onSelectPeriod,
}) {
  return (
    <div className="step-2">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="period">
        <input
          type="checkbox"
          id="toggler"
          checked={period === "yearly"}
          onChange={(e) => onSelectPeriod(e.target.checked ? "yearly" : "monthly")} />
        <div className="toggler"></div>
        <p className="monthly">Monthly</p>
        <p className="yearly">Yearly</p>
      </div>
      <div className="plans" id="plans">
        <input
          type="radio"
          checked={plan.name === "Arcade"}
          onChange={() => onSelectPlan({
            name: "Arcade",
            price: 9,
          })}
          name="plan" />
        <div className="plan">
          <img src="icon-arcade.svg" alt="" />
          <div>
            <h4>Arcade</h4>
            <p>
              $<span className="price">9{period === "yearly" && 0}</span>/
              <span className="per">{period === "monthly" ? "mo" : "yr"}</span>
            </p>
            {period === "yearly" && <p className="discount">2 months free</p>}
          </div>
        </div>
        <input
          type="radio"
          checked={plan.name === "Advanced"}
          onChange={() => onSelectPlan({
            name: "Advanced",
            price: 12,
          })}
          name="plan" />
        <div className="plan">
          <img src="icon-advanced.svg" alt="" />
          <div>
            <h4>Advanced</h4>
            <p>
              $<span className="price">12{period === "yearly" && 0}</span>/
              <span className="per">{period === "monthly" ? "mo" : "yr"}</span>
            </p>
            {period === "yearly" && <p className="discount">2 months free</p>}
          </div>
        </div>
        <input
          type="radio"
          checked={plan.name === "Pro"}
          onChange={() => onSelectPlan({
            name: "Pro",
            price: 15,
          })}
          name="plan" />
        <div className="plan">
          <img src="icon-pro.svg" alt="" />
          <div>
            <h4>Pro</h4>
            <p>
              $<span className="price">15{period === "yearly" && 0}</span>/
              <span className="per">{period === "monthly" ? "mo" : "yr"}</span>
            </p>
            {period === "yearly" && <p className="discount">2 months free</p>}
          </div>
        </div>
      </div>
      <div className="buttons">
        <BackStepButton onBack={onBack} />
        <NextStepButton onNext={onNext}> Next Step </NextStepButton>
      </div>
    </div>
  );
}
