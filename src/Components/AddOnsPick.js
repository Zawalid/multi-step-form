import { BackStepButton, NextStepButton } from "./App";

function AddOn({ addOn, onAddAddOn, period }) {
  return (
    <div className="add-on">
      <input
        type="checkbox"
        checked={addOn.checked}
        onChange={() => onAddAddOn(addOn)}
        name="add-on"
      />
      <div>
        <h4>{addOn.name}</h4>
        <p>{addOn.info}</p>
      </div>
      <p>
        +$
        <span className="price">{`${addOn.price}${
          period === "yearly" ? 0 : ""
        }`}</span>
        /<span className="per">mo</span>
      </p>
    </div>
  );
}
export function AddOnsPick({ onNext, onBack, addOns, onAddAddOn, period }) {
  return (
    <div className="step-3">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="adds-on">
        {addOns.map((addOn) => (
          <AddOn
            addOn={addOn}
            key={addOn.name}
            onAddAddOn={onAddAddOn}
            period={period}
          />
        ))}
      </div>
      <div className="buttons">
        <BackStepButton onBack={onBack} />
        <NextStepButton onNext={onNext}> Next Step </NextStepButton>
      </div>
    </div>
  );
}
