import React from 'react';

import './app.css';

import Title from './components/Title';
import Card from './components/Card';
import {data} from './data/data.js';

export default () =>{

    return(
        //Recebe o elemento a ser renderizado
        <>
            <Title />
            <div className='app'>   
            {data.map((value, i) => {
                return (
                    <Card titulo={value.titulo} conteudo={value.conteudo} key={i}/>                         
                )
            }) }
            {/* <Card titulo='Função que NÃO recebe parâmetro e NÃO tem retorno' conteudo ='function sayHello( ) &#123; 
                    console.log(&#x27;Hello&#x27;) &#125;'/>
            <Card titulo='Função que NÃO recebe parâmetro e NÃO tem retorno'/>
            <Card titulo='Função que NÃO recebe parâmetro e NÃO tem retorno'/> */}
            </div>        
        </>
        
    )
}
