import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
    };
  }
  toggleShowHide = () => {
    this.setState(state => ({ isDisplayed: !state.isDisplayed }));
  };
  render() {
    return (
      <button onClick={this.toggleShowHide} type="button">
        Toggle Show/Hide
      </button>
    );
  }
}



class Hello extends Component {
  render() {
    const hello = 'Say Hello to learning Props/State in React!';
    return (
      <div>
	{Button.isDisplayed ? <HelloReact hello={hello} /> : null}
        <Button />
      </div>
    );
  }
}
const HelloReact = ({ hello }) => <h1>{hello}</h1>;



export default Hello;