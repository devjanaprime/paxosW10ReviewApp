import React, { Component } from 'react';

class InventoryList extends Component {
  componentDidMount(){
    console.log( 'InventoryList mounted:', this.props );   
  } // end componentDidMount

  render() {
    return (
      <div>
        <h1>InventoryList</h1>
        <ul>
          { this.props.items.map( ( item, index )=><li key={ index }>{ item.description }</li>  )}
        </ul>
      </div>
    ); // end return
  } // end render
} // end class

export default InventoryList;
