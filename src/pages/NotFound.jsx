import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--ferrari-black)] flex items-center justify-center p-6">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gradient-ferrari mb-4">404</h1>
                <p className="text-2xl text-[var(--ferrari-white)] mb-2 font-bold">Page Not Found</p>
                <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
                <Link to="/" className="btn-ferrari px-8 py-3 rounded-lg text-sm inline-block">
                    Go Home
                </Link>
            </div>
        </div>
    )
}
