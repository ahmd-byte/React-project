import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <aside className="premium-card p-6 rounded-xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Navigation</h3>
            <ul className="space-y-2">
                <li>
                    <Link
                        to="/dashboard"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${isActive('/dashboard')
                                ? 'bg-[var(--ferrari-red)] text-white font-semibold'
                                : 'text-gray-400 hover:text-[var(--ferrari-white)] hover:bg-[var(--ferrari-grey)]'
                            }`}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/automations"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${isActive('/automations')
                                ? 'bg-[var(--ferrari-red)] text-white font-semibold'
                                : 'text-gray-400 hover:text-[var(--ferrari-white)] hover:bg-[var(--ferrari-grey)]'
                            }`}
                    >
                        Automations
                    </Link>
                </li>
                <li>
                    <Link
                        to="/settings"
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 ${isActive('/settings')
                                ? 'bg-[var(--ferrari-red)] text-white font-semibold'
                                : 'text-gray-400 hover:text-[var(--ferrari-white)] hover:bg-[var(--ferrari-grey)]'
                            }`}
                    >
                        Settings
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
