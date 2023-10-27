Q)how browser understands "document" functionality
A)As Javascript has the JS engine which has superpowers like DOM APIS which contains all these feaatures
browser does not understand React, so we have include react in our project

=>React is a JS library

CDN - content delivery network 
=> homework
1. what is CDN and why do we need CDN
2. what is cross origin attribute in script tag while including react js libraries via script tag

why 2 script added to embed react
react.development.js - core react file 
react.dom.js - used to modify the dom operations( when react is used in browser)(bridge between react and dom)
for mobile we use react-native

1. React libraries work with some fundamentals
2. It was built to manipulate the DOM using JS and React gives the super power to manipulate DOM
3. most costly operation is DOM nodes to be manupulated

Q)what is React.createElement
A) It creates a JS object with h1 tag

Q) what is ReactDOM.createRoot(document.getElementByID('root'))
A) converts the above object into h1 tag

Q) Can React can be used without JSX also? 
A) JSX makes our life easier while creating complex Nested html elements

=> Order of React Library files included in the webpage matters a lot 
=> React renders only to a root of an HTML file 

=> React is a library(barebone minimum javascript library) which we can use independently in a small portion of a webpage/web-app

=> we can inject React into an existing app sections like header, sidebar, footer 

