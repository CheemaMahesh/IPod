import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons/buttons';
import Display from './Display/Display';
import CoverFlow from './Display/CoverFlow';
import Settings from './Display/Settings';
import Games from './Display/Games';
import Music from './Display/Music';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      count: 0,
      num: -1,
      mnum:-1,
      oks: false,
      display: null, // Initialize display with null
      isMMenu:false,
      menumans:null,
      numIncs:null
      
    };
  }

  menuman = () => {
    console.log('haiiiiiiiiii in menuman');
    this.setState({
      menu: true,
    });
    this.handleMusic();
  };

  numInc = () => {
    if (this.state.num === 3) {
      console.log('Ekkuvaindi');
      this.setState({
        num: -1,
      });
    }

    if (this.state.menu&&!this.state.isMMenu) {
      console.log('numInc');
      this.setState((prevState) => ({
        num: prevState.num + 1,
      }));
    }
  };

  numDec = () => {
    if (this.state.num === -1) {
      console.log('Thakkuvaindi');
      this.setState({
        num: 3,
      });
    }

    if (this.state.menu && this.state.num > -1) {
      console.log('numDec');
      this.setState((prevState) => ({
        num: prevState.num - 1,
      }));
    }
  };


  

  isMMenuHandler=()=>{
    if(this.state.menu&&this.state.num===1){
    
    }
  }
  mnumInc=()=>{
    // console.log("mnumInc");
      if (this.state.mnum === 2) {
        console.log('Ekkuvaindi mnum Jubb jubbbbbbbbbbb');
        this.setState({
          mnum: -1,
        });
      }
  
      if (this.state.isMMenu) {
        this.displayHandler();
        this.setState((prevState) => ({
          mnum: prevState.mnum + 1,
        }));
        console.log('mnumInc jub jubbbbbbbbbbbbbbbbbb',this.state.mnum);

       
      }




  }

  displayHandler = () => {
    if (this.state.num === 0) {
      this.setState({
        display: <CoverFlow />,
      });
    } else if(this.state.num===3){
      this.setState({
        display: <Settings />,
      });
    }else if(this.state.num===2){
      this.setState({
        display: <Games />,
      });
    }else if(this.state.num===1){
      this.isMMenuHandler();
      this.setState({
        display: <Music mnum={this.state.mnum}/>,
      });
    }
  };



  handleMusic=()=>{
    console.log("HandleMusic")
    if(this.state.isMMenu){
      console.log("HandleMusic False");
      this.setState(()=>({
        numIncs:this.mnumInc,

      }))
     

    }else  if(!this.state.isMMenu){
      
      console.log("HandleMusic True");
      this.setState(()=>({
       numIncs:this.numInc
      }))

    }
  }

  okHandler = () => {
    if (this.state.menu && this.state.num >= 0 && this.state.num <= 3) {
  
      if (this.state.num === 1) {
        this.setState(
          {
            isMMenu: true,
            oks: true
          },
          () => {
            // The following code will be executed after the state has been updated
            this.handleMusic();
            this.displayHandler();
          }
        );
      } else {
        this.setState(
          {
            oks: true
          },
          () => {
            // The following code will be executed after the state has been updated
            this.displayHandler();
          }
        );
      }
  
    }
  };

  render() {
    const numIncs=this.state.numIncs;
    const display = this.state.display;
    // console.log('display==============', numIncs);
    return (
      <div className="App">
        <div className="AppDisplay">
          {this.state.oks ? display : <Display menu={this.state.menu} num={this.state.num} />}
        </div>

        <Buttons
          menuman={this.menuman}
          numIncs={numIncs}
          numDec={this.numDec}
          ok={this.okHandler}
        />
      </div>
    );
  }
}
