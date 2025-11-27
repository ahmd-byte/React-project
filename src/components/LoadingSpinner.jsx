import React from 'react'

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center">
            <div className="radial-progress" style={{ "--value": 70 }}>70%</div>
        </div>
    )
}
