import React from 'react'
import AppRouter from './router'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <div className="min-h-screen bg-[var(--ferrari-black)]">
            <Navbar />
            <main className="pt-20">
                <AppRouter />
            </main>
        </div>
    )
}
