import React from 'react'

export default function CardBox({ title, subtitle, children }) {
    return (
        <div className="premium-card p-6 rounded-xl">
            <div className="space-y-3">
                <h4 className="text-xl font-bold text-[var(--ferrari-white)]">{title}</h4>
                {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
                <div className="pt-2">{children}</div>
            </div>
        </div>
    )
}
