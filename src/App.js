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
     
      this.setState((prevState) => ({
        num: prevState.num - 1,
      }));
    }
  };


  

 //to change the Music options selection Down
  mnumInc=()=>{
      if (this.state.isMMenu &&this.state.mnum === 2) {
        this.setState({
          mnum: 0,
        });
        this.displayHandler();
      }
  
      if (this.state.isMMenu &&this.state.mnum>=-1&& this.state.mnum<2) {
       
        this.setState((prev) => ({
          
          mnum: prev.mnum + 1,
        }));

        this.displayHandler();
      }
      

  }

   //to change the Music options selection Up

  mnumDec = () => {
    if (this.state.isMMenu && this.state.mnum === -1) {
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

    }
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
      this.handleMusic();
    }
  };



  handleMusic=()=>{
    if(this.state.isMMenu){
      this.setState(()=>({
        numIncs:this.mnumInc,
        numDecs:this.mnumDec

      }))
     

    }else  if(!this.state.isMMenu){
      
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
            this.displayHandler();
            
          }
        );
      }
  
    }
  };


  // Render function
  render() {
    const numIncs=this.state.numIncs;
    const numDecs=this.state.numDecs;
    const display = this.state.display;
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
