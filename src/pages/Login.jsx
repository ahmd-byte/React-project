import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../hooks/useToast'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    const toast = useToast()
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr(null)
        try {
            // simulate
            await new Promise(r => setTimeout(r, 800))
            toast.success('Logged in successfully')
            navigate('/dashboard')
        } catch (e) {
            setErr('Failed to login')
            toast.error('Login failed')
        } finally { setLoading(false) }
    }

    return (
        <div className="min-h-screen bg-[var(--ferrari-black)] flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-black text-[var(--ferrari-white)] mb-2">
                        WELCOME <span className="text-gradient-ferrari">BACK</span>
                    </h2>
                    <p className="text-gray-400">Sign in to your account</p>
                </div>

                {err && (
                    <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                        {err}
                    </div>
                )}

                <form onSubmit={submit} className="premium-card p-8 rounded-xl space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-[var(--ferrari-grey)] border border-[var(--ferrari-grey-light)] text-[var(--ferrari-white)] placeholder-gray-500 focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg bg-[var(--ferrari-grey)] border border-[var(--ferrari-grey-light)] text-[var(--ferrari-white)] placeholder-gray-500 focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    <button
                        className={`btn-ferrari w-full px-6 py-3 rounded-lg text-sm ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}
