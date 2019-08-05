import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

// Từ độ F sang đô C
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// Từ độ C sang đô F
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
// ham nhap du lieu nhiet do vao
class TemperatureInput extends React.Component {

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <div>
        <h3>Please enter temperature in {scaleNames[scale]}:</h3>
        <input value={value}
          onChange={this.handleChange} />
      </div>
    );
  }
}
// ham tinh toan xu ly
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', scale: 'c' };
  }

  handleCelsiusChange = (value) => {
    this.setState({ scale: 'c', value });
  }

  handleFahrenheitChange = (value) => {
    this.setState({ scale: 'f', value });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={celsius}
          onChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          value={fahrenheit}
          onChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;

