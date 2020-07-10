import React, { Component } from 'react';
import InventoryList from '../InventoryList/InventoryList';
import Axios from 'axios';

class Inventory extends Component {
  state = {
    items: []
  } // end state

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
      console.log( 'back from GET:', response.data );
      // hold this data in state.items
      this.setState({
        items: response.data
      }); 
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    }) // end axios call
  } // end getItems

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <InventoryList items={ this.state.items }/>
      </div>
    ); // end return
  } // end render
} // end class

export default Inventory;
