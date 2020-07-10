import React, { Component } from 'react';

class InventoryItem extends Component {
  componentDidMount(){
    console.log( 'InventoryItem mounted:', this.props );   
  } // end componentDidMount

  render() {
    return (
      <li>{ this.props.thisItem.description } { this.props.thisItem.color } { this.props.thisItem.size }</li>
    ); // end return
  } // end render
} // end class

export default InventoryItem;
