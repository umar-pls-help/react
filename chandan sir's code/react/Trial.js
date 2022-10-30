import React from 'react';

class Trial extends React.Component{
state={"college":"vcet","address":"vasai"};
render(){
return(
	<div>
	<p>This is monday morning</p>
	<p>have a nice day</p>
	<p>{this.defaultProps.name }</p>
	<p>{this.defaultProps.surname }</p>
	<p>{this.state.college}</p>
	<p>{this.state.address}</p>
	<p>{Date()}</p>
	<p> {this.f("vcet")}</p>
	</div>
	);
}

f(name)
{
let a= new abc("vidyavardhini");
return(a.display());
}

defaultProps=
{
name:"chandan",
surname:"kolvankar"
}
}


class abc{
constructor(Props)
	{ this.state={"college":Props.name}}
	
display()
	{
	return(this.state.college);
	}

}

export default Trial;