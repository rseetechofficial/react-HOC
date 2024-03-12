import React, { Component } from 'react';
import './App.css';

const withUpperCase = (WrappedComponent) => {

    return class extends Component {
        render() {
            const { text, ...props } = this.props;

            const uppercasedText = text.toUpperCase();

            return <WrappedComponent uppercasedText={uppercasedText} text={text} {...props} />
        }
    }
};

const DisplayText = ({ text, uppercasedText }) => (
  <div>
    <p>Orignal Text : {text}</p>
    <p>UpperCase Text : {uppercasedText}</p>
  </div>
);

const DisplayTextUpperCase = withUpperCase(DisplayText);

function ClassHOC() {
  return (
    <div className="App">
      <h1>HOC in React(Class Component)</h1>

      <DisplayTextUpperCase text="Rsee Tech" />

    </div>
  );
}

export default ClassHOC;
