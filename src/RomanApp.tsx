import { Converter } from "./components/Converter/Converter";

function RomanApp() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <h1> Convert to roman numbers </h1>
        <div className="app-wrapper__form">
          <Converter />
        </div>
      </div>
    </div>
  );
}

export default RomanApp;
