import { useState } from 'react'

export default function useLocalStorage(key, initial) {
    const [state, setState] = useState(() => {
        try {
            const raw = localStorage.getItem(key)
            return raw ? JSON.parse(raw) : initial
        } catch (e) {
            return initial
        }
    })

    const set = (v) => {
        try {
            const value = typeof v === 'function' ? v(state) : v
            setState(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.warn(e)
        }
    }

    return [state, set]
}
