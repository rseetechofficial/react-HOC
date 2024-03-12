import './App.css';

const withUpperCase = (WrappedComponent) => {
  return function withUpperCaseComponent({text, ...props}) {
    const uppercasedText = text.toUpperCase();

    return <WrappedComponent uppercasedText={uppercasedText} text={text} {...props} />
  }
};

const DisplayText = ({ text, uppercasedText }) => (
  <div>
    <p>Orignal Text : {text}</p>
    <p>UpperCase Text : {uppercasedText}</p>
  </div>
);

const DisplayTextUpperCase = withUpperCase(DisplayText);

function FunctionHOC() {
  return (
    <div className="App">
      <h1>HOC in React(Functional Component)</h1>

      <DisplayTextUpperCase text="Rsee Tech" />

    </div>
  );
}

export default FunctionHOC;
