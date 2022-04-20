import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    // what data i want to get from user to login
    // I can get more date about the user with send  login requist in loginform
    // and get those dara then send this data with auth params   
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user);
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    return useContext(AuthContext)
}
