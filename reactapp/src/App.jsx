import Nav from './components/nav'
import Rotator from './components/rotator'
import SpaceDestaque from "./components/Destaque"
import TwoChoose from "./components/twoChoose"
import SearchShop from "./components/SearchShop"




import { useContext } from "react";
import {SeletorContexto} from "./components/loja"


function App() {
const [inicialState, dispatch] = useContext(SeletorContexto);

// bota o SeletorProvider no main.jsx envolta do app pra ve se resolve

  return (
  <>
      <Nav />
        {inicialState.appStage === "twochoose" && <TwoChoose />}
        {inicialState.appStage === "Loja" && <SearchShop />}

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
