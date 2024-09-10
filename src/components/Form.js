import React,{ Component } from 'react'

class Form extends Component{
    constructor()
    {
        super();
        this.state={
            username:''
        }
    }

    updatetext=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    render()
    {
        // return <h1>hi</h1>
        console.log('rendered');
        return (
            <form>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.updatetext}></input>
            </form>
        )
    }
}

export default Form