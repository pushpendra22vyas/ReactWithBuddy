import { createContext, useContext } from 'react'

export const CrudContext = createContext({
    users : [],
    addUser : (userDetails) => {},
    updateUser : (id,updateData) => {},
    deleteUser : (id) => {}
})

export const useCrud = () => {
    return useContext(CrudContext)
}

export const CrudProvider = CrudContext.Provider