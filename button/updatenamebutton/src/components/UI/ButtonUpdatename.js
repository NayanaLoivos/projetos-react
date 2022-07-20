import React, { useState } from "react";
import "./Button.css";

const ButtonUpdateName = () => {
    const [playername, setplayername] = useState("My name");

    function updateName() {
        
        let name = prompt('enter your name');
        setplayername((prevState) => prevState = name);
        
    }

    return(
        <button className="ui-button"
        onClick={updateName}
        >player: {playername}</button>
    )

    
}
export default ButtonUpdateName;