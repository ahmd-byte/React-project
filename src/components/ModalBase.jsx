import React from 'react'

export default function ModalBase({ open, onClose, title, children }) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="premium-card p-8 rounded-xl max-w-md w-full animate-fade-in-up">
                <h3 className="text-2xl font-bold text-[var(--ferrari-white)] mb-6">{title}</h3>
                <div className="mb-6">{children}</div>
                <div className="flex justify-end">
                    <button
                        className="px-6 py-2 rounded-lg border-2 border-gray-600 text-[var(--ferrari-white)] hover:border-[var(--ferrari-white)] transition-all duration-300 font-semibold"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}
