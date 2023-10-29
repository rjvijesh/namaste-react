import React from "react";
import ReactDOM from "react-dom/client";

//React Elements
const heading = React.createElement("h1", {"id": "heading"}, "Namaste React");
console.log(heading);// will return html element as object
//output
////{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}$$typeof: Symbol(react.element)key: nullprops: {id: 'heading', children: 'Namaste React'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: null[[Prototype]]: Object

//JSX - HTML-like or XML-like syntax
const jsxHeading = (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX
    </h1>
);
console.log(jsxHeading);// will return html element as object
//output 
//{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

const element = <span>Span Element</span>

const Title = () => (
    <h1> Title component
        {element}
    </h1>
)
    

const Footer = function() {
    return <h1>Footer component</h1>
}

const number =10000;
//const data = api.getAPIdata(); if this api contains any malicous data, then JSX can prevent this CSS attack
const HeadingComponent = () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{100 + 200}</h2>
        {console.log("logging inside JSX")}
        {Title()} 
        <Title></Title>
        <Title />
        <h1 className="heading2"> Namaste React Functional Component </h1>
        <Footer />
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);



