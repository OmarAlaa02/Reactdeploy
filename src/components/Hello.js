import React from "react";
import { Component } from "react";

class Hello extends Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }


    getemails=()=>{
        fetch('https://6mgtfvcn-5000.uks1.devtunnels.ms/getReactUser')
        .then(res=>res.json())
        .then(data=>{   
            this.setState({
                users:data.users
            })
        })
    }

    render(){
        return (
            <div>
                {
                    this.state.users.map(user => <h1>{user.email}</h1>)
                }
                <button onClick={this.getemails}>get users</button>
            </div>
        ) 
    }
}

export default Hello;