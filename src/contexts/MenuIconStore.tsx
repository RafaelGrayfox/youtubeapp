import { ReactNode , createContext , useState } from 'react';

interface MenuItemSoreProps {
    children: ReactNode;
}

type MenuItemType = {
    menuIcon: string;
    setMenuIcon: (newState:string) => void;
}

const initialValue ={
    menuIcon: 'Home',
    setMenuIcon: () => {},
}

export const MenuItemContext = createContext <MenuItemType> (initialValue);

export const MenuItemStore = ({children} : MenuItemSoreProps) =>{
    const [ menuIcon , setMenuIcon ] = useState(initialValue.menuIcon)
    return(
        <MenuItemContext.Provider value={{ menuIcon , setMenuIcon }}>
            {children}
        </MenuItemContext.Provider>
    )
};