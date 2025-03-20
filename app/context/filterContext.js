import { createContext, useState } from "react";

//1. Crear el contexto - el que se consume
export const FiltersContext = createContext()

//2. Proveer el contexto - el que provee de acceso al contexto
export function FiltersProvider ({ children }) {

    const [filters, setFilters] = useState({
        category: 'All',
        name: '',
    })

    return (
        <FiltersContext.Provider value= {{
            filters,
            setFilters 
        }}>
        {children}
        </FiltersContext.Provider>
    )
}


