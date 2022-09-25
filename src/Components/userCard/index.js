import { Component } from "react";
import unlike from"./Icons/like-regular.svg"
import like from "./Icons/like-solid.svg" 



class UserCard extends Component {
    constructor(props){
        super(props)
    }
    likeItem = ()=>{
        this.props.likeItem(this.props.name)
    }
    render(){
        
        return(
            <div className="card">
                <img className="image" src={this.props.photo} />
                <span className="name">{this.props.name} <img className="like" onClick={this.likeItem} src={this.props.like?like:unlike} /></span>
                <button onClick={function(ev){
                    ev.target.parentElement.remove();
                }} >DELETE</button>
            </div>
        )
    }
}

export default UserCard;