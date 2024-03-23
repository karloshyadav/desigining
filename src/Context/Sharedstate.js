import { useEffect, useState } from 'react';
import { createContext } from "react";

const Context = createContext();

const SharedState = (props) => {

    const [temp, setTemp] = useState("hello")

    return (
        <Context.Provider value={{
            temp, setTemp
        }}>
            {props.children}

        </Context.Provider>
    );
};

export { Context, SharedState };