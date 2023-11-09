import {useState, useEffect} from "react";
const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setcount2] = useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("interval called in functional component");
        },1000);
        //console.log("useEffect");

        return()=>{
            clearInterval(timer);
            console.log("useEffect return");
        }
    },[])
    console.log("render");
    return (
        <div className="user-cart">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location: Dehradung</h3>
            <h4>Contact: @Akshaymarch7</h4>
        </div>
    )
}

export default User;