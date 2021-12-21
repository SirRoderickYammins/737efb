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
    const variants = ["737-600", "737-700", "737-800", "737-900"];
    return (
      <div>
        <WelcomeText />
        <div className="booton">
          <form>
            <button type="submit" onClick={this.handleVariants}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
