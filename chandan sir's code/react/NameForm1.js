import React from 'react';

class NameForm1 extends React.Component{
constructor(Props)
{super(Props);
this.state={value:''};
}

render()
{
return(
<form onSubmit={this.handleSubmit.bind(this)}>
<label> Name is
<input type="text" value={this.state.value} />
</label>
<input type ="Submit" value="Submit"/>
</form>
);
}

handleSubmit(event)
{
alert("name is" + this.state.value);
event.preventDefault();
}
}

export default NameForm1;