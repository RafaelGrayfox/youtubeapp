import {  ReactNode, createContext, useState } from "react";

interface HamburgerButtonStoreProps {
  children: ReactNode;
};

type HamburgerButtonType = {
  openMenu: boolean;
  setOpenMenu: (newState:boolean) => void; 
}

const initialValue ={
  openMenu: true,
  setOpenMenu: () => {}
};

export const HamburgerButtonContext = createContext<HamburgerButtonType>(initialValue);

export const HamburgerButtonStore = ({children}:HamburgerButtonStoreProps) => {
  const [openMenu, setOpenMenu] = useState (initialValue.openMenu)
    return (
      <HamburgerButtonContext.Provider value={{openMenu, setOpenMenu}}>
        {children}
      </HamburgerButtonContext.Provider>
    )
};













//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <HamburgerButtonContext.Provider value={{ openMenu, setOpenMenu }}>
//       {children}
//     </HamburgerButtonContext.Provider>
//   );

