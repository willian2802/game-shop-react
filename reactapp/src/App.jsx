import Nav from './components/nav'
import Rotator from './components/rotator'
import SpaceDestaque from "./components/Destaque"
import TwoChoose from "./components/twoChoose"
import SearchShop from "./components/SearchShop"
import Carrinho from './components/carrinho';

import { CarrinhoProvider } from './components/CarrinhoContext';
import { useContext } from "react";
import {SeletorContexto} from "./components/loja"


function App() {
const [inicialState, dispatch] = useContext(SeletorContexto);

const handleInicioClick = () => {
  const action = { type: "twochoose", payload: "twochoose" };
  dispatch(action);
};


  return (
  <>

          
      <Nav />

      <div className="voltar-container aberto">
            <div className="voltar-icon-container" onClick={handleInicioClick} >
              <div className="voltar-icon">
                <i className="fa-solid fa-backward fa-2x" ></i>
              </div>
            </div>
      </div>

        {inicialState.appStage === "twochoose" && <TwoChoose />}

        <CarrinhoProvider>
          {inicialState.appStage === "Loja" && <SearchShop />}
          <Carrinho />
        </CarrinhoProvider>

        {inicialState.appStage === "Destaque" && (
          <>
            <Rotator />
            <SpaceDestaque />
          </>
        )}

  </>
  )
}

export default App
