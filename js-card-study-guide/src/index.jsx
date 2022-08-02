//Porta de entrada da aplicação

/*Se perceber não há nenhum local aparente no arquivo
em que a biblioteca React é usada, porém, se a importação
do React for removida, a sintaxe do jsx deixará de funcionar.
As chamadas Js que serão geradas a partir do jsx dependem 
do import do React.*/
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

ReactDOM.render(  
  
  //Recebe o elemento a ser renderizado
  <App />,

  /*Local onde será jogada toda a aplicação
  já que temos uma SPA (single page aplication),
  ou seja, temos apenas um único html e toda a aplicação
  ficará dentro dessa div root*/
  document.getElementById('root')

)