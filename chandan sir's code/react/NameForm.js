import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
 React.createElement("h1", null, "Baked Salmon")
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
React.createElement("h1", null, "Baked Salmon")    
alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
<p id='rc'>This is test</p> 
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
{
React.createElement("ul", {"className": "ingredients"},
React.createElement("li", null, "1 lb Salmon"),
React.createElement("li", null, "1 cup Pine Nuts"),
React.createElement("li", null, "2 cups Butter Lettuce"),
React.createElement("li", null, "1 Yellow Squash"),
React.createElement("li", null, "1/2 cup Olive Oil"),
React.createElement("li", null, "3 cloves of Garlic")
)
}


      </form> 
    );
  }
}

export default NameForm; 