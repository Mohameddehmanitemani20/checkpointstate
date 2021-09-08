import React, { Component } from "react";
import Dahmoun from "../assets/dahmoun.jpg";

import { Card } from "antd";

export default class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Mohamed Dehmani Temani",
             bio: "I have always been interested in the way things work. I am always determined to succeed and I feel that this degree will make the most of my skills. I believe that being part of an engineering team will be very rewarding..",
             Img: {Dahmoun},
             profession: "IT Engeneering Student"
        }
    }
    
  render() {
    return (
        <div className="site-card-border-less-wrapper">
        <Card   style={{ width: 1000 }}>
          <h1 className="text-decoration-underline" >This is my profile </h1>
          <div className="text-center">
           <img src={Dahmoun} className="rounded" alt="..." style={{height : "100%", width : "30%"}}/>
          </div>
          <h1 className="text-center">{this.state.name}</h1>
          <p className="text-center" style={{ color: 'red'}}><small>{this.state.profession}</small></p>
          <p className="text-center"><strong>{this.state.bio}</strong></p>
          
        </Card>
      </div>
    );
  }
}
