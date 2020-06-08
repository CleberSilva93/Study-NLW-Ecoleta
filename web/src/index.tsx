import React from 'react'; // importa o react
import ReactDOM from 'react-dom'; // reactdom, estrutura html dom serve para web 
import App from './App';

ReactDOM.render( // renderize o app dentro elemento da tag root, que no caso eh o div#root dessa forma, é gerada a aplicação.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);