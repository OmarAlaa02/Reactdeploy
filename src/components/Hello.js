import React from "react";
import { Component } from "react";

class Hello extends Component{
    constructor(){
        super();
        this.state={
            name:'omar'
        }
    }

    changeName =() =>{
        if(this.state.name==='omar')
            this.setState({
                name:'asser'
            })
        else
            this.setState({
            name:'omar'
        })
            
    }

    render(){
        const { name }=this.state;
        return (
            <div>
                <h1>hello {name}</h1>
                <button onClick={this.changeName}>change name</button>
            </div>
        ) 
    }
}

export default Hello;