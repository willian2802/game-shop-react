import { createContext, useReducer } from "react";

const STAGES = ["twochoose","Loja", "Destaque"]

export const inicialState = {
    appStage: STAGES[0]
}


const lojaReducer = (state, action) => {
 // console.log(state , action)
    switch (action.type) {
      case "Destaque":
        console.log("funcionou Destaque")
        return {
          ...state,
          appStage: action.payload,
        };
      case "Loja":
        console.log("funcionou Loja")
        return {
          ...state,
          appStage: action.payload,
        }
        case "twochoose":
        console.log("funcionou twochoose")
        return {
          ...state,
          appStage: action.payload,
        };
      default:
        return state;
    }
  }

  

//usecontext e que esta errado
export const SeletorContexto = createContext();

export const SeletorProvider = ({ children }) => {
    // o inicialState e pra botar os STATES Loja, Destaque etc..
    const value = useReducer(lojaReducer, inicialState)
 
    return <SeletorContexto.Provider value={value}>{children}</SeletorContexto.Provider>
}

