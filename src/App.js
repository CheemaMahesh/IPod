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
      count: 2,
      num: -1,
      mnum:-1,
      oks: false,
      display: null, // Initialize display with null
      isMMenu:false,
      menumans:null,
      numIncs:null,
      numDecs:null
      
    };
  }

  menuman = () => {
    this.setState({
      menu: true,
      count:this.state.count+1
    });
    this.handleMusic();
  };

  //to change the Menu options selection Down
  numInc = () => {
    if (this.state.num === 3) {
      this.setState({
        num: -1,
      });
    }

    if (this.state.menu&&!this.state.isMMenu) {
      
      this.setState((prevState) => ({
        num: prevState.num + 1,
      }));
    }
  };

  //to change the Menu options selection Up
  numDec = () => {
    if (this.state.num === -1) {
    
      this.setState({
        num: 3,
      });
    }

    if (this.state.menu && this.state.num > -1&&!this.state.isMMenu) {
      // console.log('numDec');
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
      if (this.state.isMMenu &&this.state.mnum === 2) {
        console.log('Ekkuvaindi mnum Jubb jubbbbbbbbbbb');
        this.setState({
          mnum: 0,
        });
        this.displayHandler();
      }
  
      if (this.state.isMMenu &&this.state.mnum>=-1&& this.state.mnum<2) {
       
        this.setState((prev) => ({
          
          mnum: prev.mnum + 1,
        }));
        // console.log('mnumInc jub jubbbbbbbbbbbbbbbbbb',this.state.mnum);

        this.displayHandler();
      }
      
      // this.handleMusic();

  }

  mnumDec = () => {
    if (this.state.isMMenu && this.state.mnum === -1) {
      console.log('mnum--------------------------------------------------Thakkuvaindi');
      this.setState({
        mnum: 2,
      });
      this.displayHandler();
    }

    if (this.state.isMMenu && this.state.mnum >-1) {
     
      this.setState((pr) => ({
        mnum:pr.mnum - 1,
      }));
      this.displayHandler();
      // console.log("mnumDec-------------------------------------------------------",this.state.mnum);

    }
    // this.handleMusic();
  };



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
     
      this.setState({
        display: <Music mnum={this.state.mnum}/>,
      });
      console.log(" display: <Music mnum={this.state.mnum}/>,");
      this.handleMusic();
    }
  };



  handleMusic=()=>{
    console.log("HandleMusic")
    if(this.state.isMMenu){
      console.log("HandleMusic True");
      this.setState(()=>({
        numIncs:this.mnumInc,
        numDecs:this.mnumDec

      }))
     

    }else  if(!this.state.isMMenu){
      
      console.log("HandleMusic False")
      this.setState(()=>({
       numIncs:this.numInc,
       numDecs:this.numDec
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
    const numDecs=this.state.numDecs;
    const display = this.state.display;
    // const mnum=this.state.mnum;
    console.log('==============', this.state.count);
    return (
      <div className="App">
        <div className="AppDisplay">
          {this.state.oks ? display : <Display menu={this.state.menu} num={this.state.num} count={this.state.count}/>}
        </div>

        <Buttons
          menuman={this.menuman}
          numIncs={numIncs}
          numDec={numDecs}
          ok={this.okHandler}
        />
      </div>
    );
  }

  componentDidUpdate(){
    console.log("this is in component did update--------==--=-=-=-=-=-=-=-",this.state.mnum);

     

  }
}
