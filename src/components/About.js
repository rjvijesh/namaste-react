import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        //console.log("about class constructor called");
    }

    componentDidMount(){
        //console.log("about class componentDidMount called");
    }

    render(){
        //console.log("about class render called");
        return (
            <div>
                <h1> About</h1>
                <h2>This is Namaste React Web Series</h2>
                <User name="Akshay Saini (function)"/>
                {/* <UserClass name="First" location={"Dehradun Class"}/> */}
                {/* <UserClass name="Second" location={"US"}/>
                <UserClass name="Third" location={"US"}/> */}
            </div>
        )
    }
}


// const About = ()=> {
//     return (
//         <div>
//             <h1> About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name="Akshay Saini (function)"/> */}
//             <UserClass name="Akshay Saini (classes)" location={"Dehradun Class"}/>
//         </div>
//     )
// }

export default About;