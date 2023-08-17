import { Component } from "react";
import DOptions from "./DOptions";

export default class Display extends Component{
    render(){
        const {menu}=this.props
        
        let bools=menu;
       const {num}=this.props;
    //    console.log(num,"num in Display")
        return(
            <>
          <div className="DHome">
          
<div className="DLeft">
    <div><h1>IPod.js</h1></div>
            
          {bools?<DOptions num={num} menu={menu}/>:<h1>Press Menu Button for menu</h1>}
          </div>
          <div className="DRight"></div>
          </div>
            </>
        )
    }
}