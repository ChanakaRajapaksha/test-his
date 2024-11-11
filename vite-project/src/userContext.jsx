import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchedUser = JSON.parse(localStorage.getItem("user"));
        if (fetchedUser) {
            setUser(fetchedUser);
        } else {
            setUser(null);
        }
    }, []); 

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
