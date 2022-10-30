import React,{useEffect,useState} from 'react';

class Example3 extends React.Component {
  constructor(props) {
    super(props)

    // Create the ref
    this.exampleRef = React.createRef()
  }

  render() {
    return (
      <div>
        // Call the ref with the `ref` attribute
        <input type="text" ref={this.exampleRef} />
      </div>
    )
  }
}



export default Example3