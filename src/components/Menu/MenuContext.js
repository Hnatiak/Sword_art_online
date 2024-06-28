import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [selectedCircleId, setSelectedCircleId] = useState(6);

  return (
    <MenuContext.Provider value={{ selectedCircleId, setSelectedCircleId }}>
      {children}
    </MenuContext.Provider>
  );
};