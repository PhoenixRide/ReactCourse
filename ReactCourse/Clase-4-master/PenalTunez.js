import React, {Component} from 'react'

class PenalTunez extends Component {
	// constructor method begins here:
	constructor(props) {
		super(props);
      this.state = {
          count: props.initialValue
      }
        
  }
	
  render() {
    return (
      <h1>
  {this.state.count}
      </h1>
    );
  }
}
  
export default PenalTunez;