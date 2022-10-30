import React from 'react';

class Trial2 extends React.Component{
constructor(Props) 
{
super();
this.state={"name":Props.name};}

render(){
return(
	<div>
	<p>This is monday morning</p>
	<p>{this.state.name}</p>
	</div>
	);
this.forceUpdate(()=>{this.setState({name:"vcet"});});

}

componentDidUpdate() {

 
this.setState({name:"patil"});


}




}


export default Trial2;