import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.listItem = this.listItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

 handleInput(e){
   this.setState({
     currentItem:{
       text:e.target.value,
       key:Date.now()
     }
   })
 }
 listItem(e){
   e.preventDefault();
   const newItem = this.state.currentItem;
   console.log(this.state.items);
   console.log(newItem);
   console.log("hello");
   //DUPLICATE ITEMS!!!
   const itemsA = [...this.state.items];
   console.log(itemsA);
   var duplicate = 0;

   for(let value in itemsA){
     console.log("clara");
     console.log(itemsA[value].text);
     if(itemsA[value].text === newItem.text){
       alert("Don't input duplicate values")
       duplicate = 1;
     }
   }
   if(newItem.text !== "" && duplicate === 0){
     const newItems = [...this.state.items, newItem];
     this.setState({
       items:newItems,
       currentItem:{
         text:'',
         key:''
       }
     })
   }
 }

 deleteItem(key){
   const filteredItems = this.state.items.filter(item =>
   item.key !== key);
   this.setState({
     items:filteredItems
   })
 }
  render() {

    return (
      //Create Form
      <div>
        <h1 className="title"> TO DO LIST </h1>;
      <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.listItem}>
          <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}></ListItems>
      </div>
      </div>
    );
  }
}


export default App;
