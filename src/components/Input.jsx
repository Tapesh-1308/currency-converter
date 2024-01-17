import { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  amountDisable = false,
  onCurrencyChange,
  currency = "usd",
  options = [],
}) {
  const amountId = useId();
  return (
    <>
      <div className="flex bg-white py-1 rounded">
        <div className="flex flex-col left mx-4">
          <label htmlFor={amountId}>{label}</label>
          <input
            type="number"
            id={amountId}
            className="outline-none border-0 text-black text-2xl font-bold"
            min="0"
            max="1000000000"
            placeholder="0"
            value={amount ? amount : ""}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            disabled={amountDisable}
          />
        </div>
        <div className="flex justify-center items-center right border-l-2 px-4">
          <select
            className="font-bold bg-slate-200 rounded-lg outline-none"
            value={currency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Input;
