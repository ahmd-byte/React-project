import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function Settings() {
    const { theme, setTheme } = useTheme()
    const [name, setName] = useState('')

    return (
        <div className="min-h-screen bg-[var(--ferrari-black)] p-6">
            <div className="container mx-auto max-w-2xl">
                <h1 className="text-3xl font-black text-[var(--ferrari-white)] mb-6 tracking-tight">
                    SETTINGS <span className="text-gradient-ferrari">PANEL</span>
                </h1>
                <div className="premium-card p-8 rounded-xl space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Theme</label>
                        <select
                            className="w-full max-w-xs px-4 py-3 rounded-lg bg-[var(--ferrari-grey)] border border-[var(--ferrari-grey-light)] text-[var(--ferrari-white)] focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Profile Name</label>
                        <input
                            className="w-full px-4 py-3 rounded-lg bg-[var(--ferrari-grey)] border border-[var(--ferrari-grey-light)] text-[var(--ferrari-white)] placeholder-gray-500 focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="pt-4">
                        <button className="btn-ferrari px-8 py-3 rounded-lg text-sm">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
