import { View, Text } from 'react-native'
import React from 'react'



const UserContext=React.createContext()


const Userprovider=({children})=>{
    const [user,setuser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
                {children}
        </UserContext.Provider>
    )
}

export  {UserContext,Userprovider}