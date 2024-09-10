import React, {
    Component
} from "react";

class Dbcomp extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    getUser = () => {
        fetch('http://localhost:5000/getReactUser')
        .then(res => res.json())
        .then(data =>{
            console.log(data.users);
            this.setState({
                users:data.users
            })
        }).catch(err=>console.log(err));
    }

    returnstate()
    {
        this.setState({
            users:[]
        })
    }

    render() {
        if(this.state.users.length === 0)
            return ( 
                <div>
                    <h1>Hello </h1>
                    <button onClick={this.getUser}>get user</button>
                </div>
            )
        return (
            <div>
                {
                    this.state.users.map((user,index) => <h1 key={index} >{user.username}</h1>)
                }
                <button onClick={()=>this.returnstate()} > return </button>
            </div>
        )
    }
}


export default Dbcomp;