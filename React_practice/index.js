import './index.css';

import React from "react";

import ReactDOM from "react-dom";

// const element=React.createElement( 'h1', null, 'React element');
// console.log(element)



// const counterDisplayElementJSX= (<h1 className="counter-display">{2+5}</h1>);
// // const incrementButtonElement = React.createElement("button", null, "+");
// const incrementButtonElementJSX = (<button>+</button>);
// // const decrementButtonElement = React.createElement("button", null, "-");
// const decrementButtonElementJSX = (<button>-</button>);
// // const containerDivElement = React.createElement("div", null, [counterDisplayElement, incrementButtonElement, decrementButtonElement]);
// const containerDivElementJSX = (<div>{[counterDisplayElementJSX, incrementButtonElementJSX, decrementButtonElementJSX]}</div>);

// console.log(containerDivElementJSX);
// ReactDOM.render(containerDivElementJSX, document.querySelector("#root"));


// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increaseCount = () => {
//     this.setState((state) => ({
//       count: state.count + 1
//     }));
//   }

//   decreaseCount = () => {
//     this.setState((state) => ({
//       count: state.count - 1
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="counter-display">{this.state.count}</h1>
//         <button onClick={this.increaseCount}>+</button>
//         <button onClick={this.decreaseCount}>-</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.querySelector("#root"));


// Counter Component
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    increaseCount = () => {
      this.setState((state) => ({
        count: state.count + this.props.diff
      }));
    }
  
    decreaseCount = () => {
      this.setState((state) => ({
        count: state.count - this.props.diff
      }));
    }
  
    render() {
      return (
        <div>
          <h1 className="counter-display">{this.state.count}</h1>
          <button onClick={this.increaseCount}>+{this.props.diff}</button>
          <button onClick={this.decreaseCount}>-{this.props.diff}</button>
        </div>
      );
    }
  }
  
  // App Component
  function App() {
    return (
      <div>
        <Counter diff={1} />
        <Counter diff={10} />
      </div>
    );
  }
  
  // Render App Component
  ReactDOM.render(<App />, document.querySelector("#root"));
  
  