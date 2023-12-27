import React from "react";
import UserContext from "./UserContext";    

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider

// all the children components that are wrapped inside the UserContextProvider will have access to the userContext, and can use the user and setUser values from the context.

