


import React, { Component } from "react";

export default class DOptions extends Component {
    constructor() {
        super();
        this.state = {
            options: ["CoverFlow", "Music", "Games", "Settings"],
        };
    }

    render() {
        const {num}=this.props
        let count=num;
      

        return (
            <div className="DOptions">
                {this.state.options.map((data, i) => {
                    const cName = i === count ? "bgColor" : ""; // Apply "bgColor" class to index 2
                    return (
                        <div key={i} className={cName}>
                            <h2>{data}</h2>
                        </div>
                    );
                })}
            </div>
        );
    }
}
