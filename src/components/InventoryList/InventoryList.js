import React, { Component } from 'react';

class InventoryList extends Component {
  componentDidMount(){
    console.log( 'InventoryList mounted' );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>InventoryList</h1>
      </div>
    ); // end return
  } // end render
} // end class

export default InventoryList;
