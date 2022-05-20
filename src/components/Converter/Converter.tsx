import { useState } from "react";
import romanConverter from "../../utils/romanConverter";

export const Converter = () => {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNum(value);
  };

  const romanConverterHandler = (e) => {
    e.preventDefault(e);
    try {
      setResult(romanConverter(num));
      setErrorMessage("");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <form>
      <span>{errorMessage}</span>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleChange}
        value={num}
      />
      <span className="input-border"></span>
      <button type="submit" onClick={romanConverterHandler}>
        Convert
      </button>
      <p>{result}</p>
    </form>
  );
};
