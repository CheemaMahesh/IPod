import { Component } from "react";



export default class Music extends Component{
    constructor(){
        super();
        this.state={
            musicList:["All Songs","Artists","Songs"],
            
        }
    }
    render(){
        const { mnum } = this.props;
  console.log("Received mnum prop in Music:", mnum);

        // let count=mnum;

        return(
            <div className="Music">
                <div className="MLeft">
                <div className="MusicHead">
                    <h1>Music</h1>
                </div>
                <div className="MusicLis">
                {this.state.musicList.map((data, i) => {
  const cName = i === mnum ? "bgColorB" : "";
  return (
    <div key={i} className={cName}>
      <h2>{data}</h2>
    </div>
  );
})}

                </div>
                </div>
                <div className="MRight"></div>

            </div>
        )
    }
}