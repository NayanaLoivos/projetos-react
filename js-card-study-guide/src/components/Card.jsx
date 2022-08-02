import React from 'react';

import './card.css';

export default function Card ({titulo, conteudo}) {
    return(
        <div className='card' >
            <div className='titulo'>
                <h3>{titulo}</h3>
            </div>

            <div className='conteudo'>
                <code>{conteudo}</code>                
            </div>            
        </div>
    )        
}