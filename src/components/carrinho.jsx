import React, { useContext, useState } from 'react';
import './Carrinho.css';
import { CarrinhoContext } from './CarrinhoContext';



 export function Carrinho() {

  const { itens, contador, setItens, setContador } = useContext(CarrinhoContext);

  console.log(setItens)


  const [aberto, setAberto, ] = useState(false); // Adicione estado para controlar se o carrinho está aberto

  // talvez tenho que fazer com o que adicionar item fique funcione aquiz

  function removerItem(item) {
    const index = itens.indexOf(item);
    if (index !== -1) {
      const novosItens = [...itens];
      novosItens.splice(index, 1);
      setItens(novosItens);
      setContador(contador - 1);
    }
    console.log(item)
  }
  

  
  

  function handleAbrirCarrinho() {
    setAberto(!aberto); // Inverte o valor do estado aberto
  }
  console.log(itens)

  return (
    

    <div className={`carrinho-container ${aberto ? "aberto" : ""}`}>
      <div className="carrinho-icon-container" onClick={handleAbrirCarrinho}>
        <div className="carrinho-icon">
          <i className="fas fa-shopping-cart fa-2x"></i>
          {contador > 0 && <span className="carrinho-badge">{contador}</span>}
        </div>
      </div>
     

        <div className="carrinho-lista-container">
          <h3>Carrinho:</h3>
          <ul className="carrinho-lista">
            {itens.map((item, index) => (
              <li key={index} className="carrinho-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
                <button onClick={() => removerItem(item)}>
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Carrinho;
