import React, { useState } from "react";
import "./Button.css";

const ButtonUpdateName = () => {
    const [playerName, setPlayerName] = useState("My name");
          /*retorna um valor de estado,             
          //e uma function que atualiza o estado*/ /*No render inicial, o state retornado
                                                   é o mesmo valor passado como primeiro argumento*/
    function updateName() {
        
        let name = prompt('enter your name');
        setPlayerName(name);
        //setplayername((prevState) => prevState = name)
            /*O setState é uma função, é um estado de atualização, 
            quando mandamos um valor para ele, ele já aceita como
            um novo estado. A função callback é usada quando devemos
            usar o estado que está para manipular um novo estado, 
            como no caso de incrementar um valor num contador.*/

            /*A função setState é usada para atualizar o state, aceita
            um novo valor de state para uma nova renderização
            do componente. Nas subsequentes rederizações o primeiro
            valor retornado do useState será sempre o valor mais recente
            do state.*/        
    }

    return(
        <>
        <button className="ui-button"
        onClick={updateName}
        >player: {playerName}</button>
        </>
    )    
}
export default ButtonUpdateName;