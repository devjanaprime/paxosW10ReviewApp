import React, { Component } from 'react';

class InventoryItem extends Component {
  state = {
    details: false
  } // end state
  componentDidMount(){
    console.log( 'InventoryItem mounted:', this.props );   
  } // end componentDidMount

  toggleDetails=()=>{
    this.setState({
      details: !this.state.details
    }) // end setState
  } // end toggleDetails

  render() {
    return (
      <li  onClick={ this.toggleDetails }>
        {( this.state.details ? 
          <p>{ this.props.thisItem.color }, { this.props.thisItem.size } </p> :
          <p>{ this.props.thisItem.description }</p> )}
      </li>
    ); // end return
  } // end render

} // end class

export default InventoryItem;
