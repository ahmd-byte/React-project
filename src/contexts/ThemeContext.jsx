import React, { createContext, useState, useEffect, useContext } from 'react'
import useLocalStorage from '../utils/useLocalStorage'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useLocalStorage('daisy-theme', 'light')

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme)
        }
    }, [theme])

    const toggle = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
