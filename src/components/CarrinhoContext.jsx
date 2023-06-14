import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();
// e aqui que ta o erro eu acho
export const CarrinhoProvider = ({ children }) => {
  const [itens, setItens] = useState([]);
  const [contador, setContador] = useState(0);

   console.log(setItens)
  function adicionarItem(item) {
    setItens([...itens, item]);
    setContador(contador + 1);
  }

  function removerItem(item) {
    const index = itens.indexOf(item);
    if (index !== -1) {
      const novosItens = [...itens];
      novosItens.splice(index, 1);
      setItens(novosItens);
      setContador(contador - 1);
    }
  }

  return (
    <CarrinhoContext.Provider value={{ itens, contador, setContador, adicionarItem, setItens }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
