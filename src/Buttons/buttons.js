import { Component } from "react";
export default class Buttons extends Component{
    render(){
        return(
            <>
            <div className="btnHome">

                <div className="btnHomeChild">
                    <div className="bHC1">
                        <button className="Ok0" onClick={this.props.menuman}>MENU</button>
                    </div>
                    <div className="bHC1">
                        <button className="Ok1" onClick={this.props.numDec}><img src="https://static.thenounproject.com/png/778417-200.png" alt="back-fastforword"/></button>
                        <button className="Ok" onClick={this.props.ok}></button>
                        <button className="Ok2" onClick={this.props.numIncs}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEX///8AAABnZ2eXl5enp6crKysnJyf5+fnn5+f09PTExMTd3d0ODg4HBwcdHR38/PwUFBS2trZtbW11dXXS0tLu7u5RUVGEhIQ2NjZERERiYmJWVlZ7e3sjIyPi4uI6Ojqfn59JSUmNjY28vLyjo6PU1NRM9gElAAAEMElEQVR4nO2ca1viMBBGCVjwQlkuurACKuj+/7+4tAi0NJnMJOai+56vOnWOT63vQzPT6wEAAAAAAAAAAAAAAAAAAAAAAAAAAAA4vK+L1ebJtfp2syrW914NzHbboZZifiu4zEZVTBx7eZzW5YuRW3nFXpmZvLAvc3Oq2fxyaGK0/axePThU17yUhIhas6/zeq555duf+ThXj2/k1TVvlIcq2ddp/D6mM3EX88bPfL4Tl1cMSBHFvk6rai691fvN6uJRWF0TREQVf2VdtERUORBKVIQRUeWbqIv+Vflv+WM8kMjhOSG51a9FHB7jwUTUVnCrd0SUWgof4+FEVLln96IRUX8k/46Diii14/aiExE+xoOKqOm7h4gssYQV4SYWg4gksYQW4SUWk4ggsQQXYfViFOEnlvAiSvWtvRAi3MQSQ8SeWCgRZmKJImLthRThJZY4IofEQvZiEeEkllgiakv1YhNhJJZoIqokerGLWBNLPBGqF4aILbHEFDEnFo6IJbFEFTH2whMhE0tkEUMvTBEqJcQW0ffCFSESS3QRbS98EWNiSSCi6UUgYkoJKUS6vUhEDIkliUinF5mINrEkErnqRSiiSyypRNq9iEW6KSGdSLMXuUgnsSQUafTiIHKdElKKXHpxEmmnhLQip17cRFopIbGIGn94iDRTQmqRYy/OIpeUkF5EDR89RM4pIQMRVe49RE4pIQeRg4pXdZ0S8hDx5ZASfobIISX8EBE1XdNf/zYiNiCSGxDJDYjkBkRyAyK5AZHcgEhuQCQ3IJIbEInN+Id8+LB6uKG/4ZuILEa9PET8PjKt33zlIFIOvD7EPr6LzECk8HqtcHo7nF7E70XP+X19apHja0BnkcsJisQifi9Dm2da0or4vZ4eNk8ZpRTxPDDQPveVUMTvCMf1SbxkIqXfoZrO2chUIlu/Y07d06qJRNZeB890Z5mTiHgeBdSe6E4h0h0nEYnoz9gnENEM+AhETBMY0UU8DzAbZ2Jii+iH4LgixGRQZBHDWCJTZEjMjUUV8Ry7ICf5YoqYR3c5IpZ5xngi1DA1Q8Q27RpNhBxvt4tY549jidALB2wijInwOCK2FRAWEc6MfhQRvxFX3taEGCL2NSmUCHOPRXgRzsYDQoS7WSS4iN9gPn/XS2gRv1UJVCaJKsLd02IQkexDCirC3pyjFZFtqAooUu7Z1ToR4c6wcCKC+1snIt3iFkxEtO+rIyJfNhZI5Djf4iwi3BtUEUZEuhPvSkS6yakiiIh4S2FLxG1F4leJfN0yPYdtZxVfJXJZb+hwfzd2Ezrtn6uYkR5j+XVc7u/e3eSzWvLMbvM0pkT4Cyd7y7rAdQXo/bENxx2NNdS9NZHcJffPq9el81LWl3kx2cn/uFoNrAs9q4VzWwAAAAAAAAAAAAAAAAAAAAAAAAAAAPxf/APxUE1oAfaTGwAAAABJRU5ErkJggg==" alt="fastforword"/></button>
                    </div>
                    <div className="bHC1">
                        <button className="Ok3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8V-kO45wzVb6eUi5pE2S190qI-vo8UdIVJKFdEjw3U6FEkxSB1N0TNUa0YWrEq3-oEA&usqp=CAU" alt="play/pause-toggle"/></button>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}