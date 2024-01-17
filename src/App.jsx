import { useEffect, useState } from "react";
import "./App.css";
import ConvertBtn from "./components/ConvertBtn";
import Heading from "./components/Heading";
import Input from "./components/Input";
import SwapBtn from "./components/SwapBtn";
import useCurrency from "./hooks/useCurrency";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  const [amount, setAmount] = useState();
  const [converted, setConverted] = useState();

  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const data = useCurrency(fromCurrency);
  const options = Object.keys(data);

  const [info, setInfo] = useState();
  useEffect(() => {setInfo(data[toCurrency])});

  const [rotate, setRotate] = useState(0);

  const swap = () => {
    setAmount(converted && Number(converted)?.toFixed(2));
    setConverted(amount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setInfo(data[toCurrency]);
    setRotate((prevRotation) => prevRotation + 180);
  };

  const handleConvertBtn = () => {
    setConverted(amount * data[toCurrency]);
  };
  
  return (
    <>
      <div className="px-8 py-16 box flex flex-col justify-center items-center scale-75 sm:scale-100">
        <Heading />
        <Input
          label="Amount"
          amount={amount}
          onAmountChange={(newAmount) => setAmount(newAmount)}
          onCurrencyChange={(currency) => {
            setFromCurrency(currency), setInfo(data[currency]);
          }}
          currency={fromCurrency}
          options={options}
        />
        <SwapBtn rotation={rotate} swap={swap} />
        <Input
          label="Converted To"
          amount={converted && Number(converted).toFixed(2)}
          amountDisable={true}
          onCurrencyChange={(currency) => {
            setToCurrency(currency), setInfo(data[currency]);
          }}
          currency={toCurrency}
          options={options}
        />
        <Info info={info} from={fromCurrency} to={toCurrency} />
        <ConvertBtn
          from={fromCurrency}
          to={toCurrency}
          handleConvertBtn={handleConvertBtn}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
