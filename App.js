import React,{Component} from "react";
import CardList from "./CardList";
import {robots} from "./robots";
// import Searchbox from "./SearchBox";
import "./App.css"


 const App =() =>{
    // constructor(){
    //     super()
    //     this.state={
    //         robots: robots,
    //         searchfeild: ""
    //     }
    //   } 
    
    //   onSearchChange=(event) =>{
    //        const filterRobots=this.state.robots.filter(robots =>{
    //         return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
    //     })
    //     console.log(event.target.value);
    //     }
    // render(){
       return(
       <div className="tc">
         <h1 className="f1">Robofriends</h1>
         
         <CardList robots={robots}/>
       </div>) ;}


export default App; 