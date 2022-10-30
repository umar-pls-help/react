import React from 'react';
import './App.css';
class Try extends React.Component{
state={"companyName":""};
render(){
return(
	  <div>  
                <h2>Simple Event Example</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.companyName }</h4>  
            <button id="companyName" onClick={() => this.handler.bind(this,{"name":"vidyavardhini"})}>
          Click Here
        </button>
<h4>You entered: { this.state.companyName }</h4>  

</div>  
);
}

 handler = (name) => {
    // Changing the state
    this.setState({ companyName: name });
  };

 changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
    }  
}

export default Try;