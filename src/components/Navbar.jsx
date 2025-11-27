import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useToast } from '../hooks/useToast'

export default function Navbar() {
    const { theme, toggle } = useTheme()
    const toast = useToast()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--ferrari-black)] border-b border-[var(--ferrari-grey-light)] backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-wider text-gradient-ferrari hover:scale-105 transition-transform duration-300"
                    >
                        PORTFOLIO
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/dashboard"
                            className="text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/automations"
                            className="text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                        >
                            Automations
                        </Link>
                        <Link
                            to="/settings"
                            className="text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                        >
                            Settings
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => {
                                toggle()
                                toast.info(`Switched to ${theme === 'light' ? 'dark' : 'light'} theme`)
                            }}
                            className="p-2 rounded-lg hover:bg-[var(--ferrari-grey)] transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[var(--ferrari-white)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        </button>

                        {/* Login Button */}
                        <button
                            onClick={() => navigate('/login')}
                            className="btn-ferrari px-6 py-2 rounded-lg text-sm"
                        >
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-[var(--ferrari-grey)] transition-colors duration-300"
                        onClick={() => setOpen(!open)}
                        aria-label="menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-[var(--ferrari-white)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
                        <Link
                            to="/dashboard"
                            className="block text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                            onClick={() => setOpen(false)}
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/automations"
                            className="block text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                            onClick={() => setOpen(false)}
                        >
                            Automations
                        </Link>
                        <Link
                            to="/settings"
                            className="block text-sm font-medium text-[var(--ferrari-white)] hover:text-[var(--ferrari-red)] transition-colors duration-300 tracking-wide uppercase"
                            onClick={() => setOpen(false)}
                        >
                            Settings
                        </Link>
                        <button
                            onClick={() => navigate('/login')}
                            className="btn-ferrari px-6 py-2 rounded-lg text-sm w-full"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
