import React, {useState,useEffect} from 'react';

class Example2 extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.exampleRef = React.createRef()
  }

  render() {
    return (
      <div>
        // Call the ref with the `ref` attribute
        <input type="text" ref={this.exampleRef} onChange={this.handleref} />
      </div>
    );
  }
handleref(event){
alert("Hello! I am an alert box!!");
}
}

export default Example2;