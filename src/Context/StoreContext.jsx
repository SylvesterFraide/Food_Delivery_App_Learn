import { createContext } from "react";
import { Food_List } from "../Components/ExploreMenu/Menu";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = { Food_List };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
