"use client"
import { ReactNode, createContext, useState } from "react"

interface Theme {
    mode: string;
    toggle: () => void;
  }

export const ThemeContext = createContext<Theme>({ mode: "dark", toggle: () => {} })
export const ThemeProvider=({children}:{children:ReactNode})=>{
    const [mode,setMode]=useState("dark")
    const toggle=()=>{
        setMode(prev=>prev==="dark"?"light":"dark")
    }

    return (
        <ThemeContext.Provider value={{ mode,toggle }}>
            <div className={`theme ${mode}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}