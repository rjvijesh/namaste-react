 
 import React from "react";
 class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userInfo:{
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.jpg"
            }
        };
        console.log(this.props.name + " Child constructor is called");
    }

    async componentDidMount(){
       console.log(this.props.name + "Child componentDidMount called");

        //API call 
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
        this.timer = setInterval(()=>{
            console.log("interval called");
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if(this.state.count == prevState.count){

        }
        if(this.props.name == prevProps.name){

        }
        console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount called");
    }

    render(){
        console.log(this.props.name + "child render is called");
        const {count} = this.state;
        const {name, location, avatar_url } = this.state.userInfo;
        //const {name1, location1} = this.props;
        return (
            <div className="user-cart">
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                  this.setState({
                    count: this.state.count+1
                  })
                }}>Count Increase</button>
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Akshaymarch7</h4>
            </div>
        )
    }
}

export default UserClass;