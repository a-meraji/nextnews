import React,{useState, createContext} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [category, setCategory] = useState('');

    const value = {category,setCategory}

    return <Context.Provider value={value}>{props.children}</Context.Provider>
}