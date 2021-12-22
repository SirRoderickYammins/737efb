import * as React from "react";
import * as ReactDOM from "react-dom";

function WelcomeText() {
  return (
    <div className="welcome-div">
      <h1 className="welcome"> 737 NG Performance Calculator </h1>
    </div>
  );
}

function VariantSelect(props) {
  return (
    <div className="plane-select">
      <p>Select your airframe:</p>
      <select>
        <option value="600">{props.variants[0]}</option>
        <option value="700">{props.variants[1]}</option>
        <option value="800">{props.variants[2]}</option>
        <option value="900">{props.variants[3]}</option>
      </select>
    </div>
  );
}

class DataEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const variants = ["737-600", "737-700", "737-800", "737-900"];
    return (
      <div className="info">
        <div>
          <VariantSelect variants={variants} />
        </div>
        <div className="zfw">ZFW</div>
        <div className="runway-cond">Runway Condtions</div>
        <div className="runway-length">Runway Length</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { plane: "" };
  }

  handleVariants(e) {
    this.setState(plane);
    console.log("Button click was registered.");
  }

  render() {
    return (
      <div>
        <WelcomeText />
        <DataEntry />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
