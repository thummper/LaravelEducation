import React from "react";
import ReactDOM from "react-dom";


export default function HelloReact(){
    return (
        <h1> Hello World </h1>
    )
}

if(document.getElementById('app')){
    ReactDOM.render( <HelloReact />, document.getElementById('app'))
}