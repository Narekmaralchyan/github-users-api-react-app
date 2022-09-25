import { Component } from "react";
import UserCard from "../userCard";
import "./listStyle.css"

class List extends Component {
    constructor(props){
        super(props)
        this.data = [];
        this.state = {
            inputValue : "",
            data:[],
        }
    }
    componentDidMount(){
        fetch("https://api.github.com/users")
        .then(res=>res.json())
        .then(res=>{
            this.data = res;
           this.setState({data:res})
        })
    }
    searchItem = (e)=>{
        this.setState({
            data:this.data.filter(item=>{
                return item.login.includes(e.target.value)
            })
        })
    }
    likeItem= (name)=>{
        this.setState({
            data: this.state.data.map((item,index)=>{
                if(item.login == name ){
                    item.like = !item.like;
                }
                return item;
            })
        })
    }
    render(){
        
        return(
            <>
            <input className="searchInput" onChange={this.searchItem} placeholder="type for search" type="text"/>
            <div className="list"> 
                {
                    this.state.data.map((element,index) => {
                        return <UserCard likeItem={this.likeItem} like={element.like} name={element.login} photo={element.avatar_url} key={index} />
                    })
                }
            </div>
            </>
        )    
        
    }
}
export default List;