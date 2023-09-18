import React from "react";
import "./style.css"

class List extends React.Component{
    render(){
        return <>
        <li>
            <a href="">{this.props.text}</a>
        </li>
    
        </>
    }
}

class Menu extends React.Component{
    state = {
        menu: [
            {text: "Link 1"},
            {text: "Link 2"},
            {text: "Link 3"},
            {text: "Free CSS Menus"},
            {text: "Link 5"},
            {text: "Link 6"},
            {text: "explodingboy"},
        ]
    }
    render(){
        return <div className="menu">
        <ul>
            {this.state.menu.map((item, index) => {
                return <List key={index} text={item.text}/>
            })}

        </ul>
        <button className="buttonclick">=</button>
        </div>
    }
}

export default Menu