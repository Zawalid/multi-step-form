import { BackStepButton, NextStepButton } from "./App";

export function Summary({ onNext, onBack, period, plan, addOns, onChangePlan }) {
  const isMonthly = period === "monthly";
  const addOnsPurchased = addOns.filter((addOn) => addOn.checked);
  const total = plan.price * (isMonthly ? 1 : 10) +
    addOnsPurchased.reduce((acc, addOn) => acc + addOn.price, 0) *
    (isMonthly ? 1 : 10);
  return (
    <div className="step-4">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="check">
        <div className="plan">
          <div>
            <h4 className="current_plan">{plan.name}</h4>(
            <span className="perFull">{period}</span>)
            <button onClick={onChangePlan}>Change </button>
          </div>
          <p>
            $
            <span className="plan_price">{`${plan.price}${isMonthly ? "" : "0"}`}</span>
            /<span className="per">{isMonthly ? "mo" : "yr"}</span>
          </p>
        </div>
        <div className="adds-on">
          {addOnsPurchased.length === 0 ? (
            <p className="message">No adds-on purchased</p>
          ) : (
            addOnsPurchased.map((addOn) => (
              <div>
                <span>{addOn.name}</span>
                <span>
                  +$
                  <span className="price">{`${addOn.price}${period === "yearly" ? 0 : ""}`}</span>
                  / <span className="per">{isMonthly ? "mo" : "yr"}</span>
                </span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="total">
        <span>Total (per {isMonthly ? "month" : "year"})</span>
        <p>
          $<span className="price">{total}</span>/
          <span className="per"> {isMonthly ? "mo" : "yr"}</span>
        </p>
      </div>
      <div className="buttons">
        <BackStepButton onBack={onBack} />
        <NextStepButton onNext={onNext}>Confirm</NextStepButton>
      </div>
    </div>
  );
}
