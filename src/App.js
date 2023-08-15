import { Component } from 'react';
import './App.css';
import Buttons from './Buttons/buttons';
import Display from './Display/Display';
import CoverFlow from "./Display/CoverFlow"
export default class App extends Component{
  constructor(){
    super();
    this.state={
      menu:false,
      count:0,
      num:-1,
      oks:false
    }
  }


 menuman=()=>{
    console.log("haiiiiiiiiii in menuman")
    this.setState(()=>({
      menu:true,
    }));
  }

  numInc=()=>{
    if(this.state.num===3){
      console.log("Ekkuvaindi");

      this.setState(()=>({
        num:-1
      }))
     }

   if(this.state.menu){
    console.log("numInc");
    this.setState((prevNum)=>({
      num:prevNum.num+1
    }))
   }
  }

  numDec=()=>{
    if(this.state.num===-1){
      console.log("Thakkuvaindi");
      this.setState(()=>({
        num:3
      }))
     }

    if(this.state.menu&&this.state.num>-1){
      console.log("numDec");
      this.setState((prevNum)=>({
        num:prevNum.num-1
      }))
    }
  }
  okHandler=()=>{
    if(this.state.menu&&this.state.num>=0&&this.state.num<=3){
      console.log(this.state.okCount,"Ok count");
      this.setState(()=>({
        oks:true
      }))
     }
  }


  render(){ 
    

    return (
    <div className="App">
      {this.state.oks?<CoverFlow />:<Display menu={this.state.menu} num={this.state.num} />}
      
     <Buttons menuman={this.menuman}
              numInc={this.numInc}
              numDec={this.numDec}
              ok={this.okHandler} />

    </div>
  );}
 
}


