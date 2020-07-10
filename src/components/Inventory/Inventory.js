import React, { Component } from 'react';
import InventoryList from '../InventoryList/InventoryList';
import Axios from 'axios';

class Inventory extends Component {
  componentDidMount(){
    console.log( 'Inventory mounted' );  
    this.getItems(); 
  } // end componentDidMount

  getItems(){
    // get items from server via AXIOS
    Axios({
      method: 'GET',
      url: '/inventory'
    }).then( ( response ) =>{
      console.log( 'back from GET:', response );
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
  } // end getItems

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <InventoryList />
      </div>
    ); // end return
  } // end render
} // end class

export default Inventory;
