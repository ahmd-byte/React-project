import React, { useState } from 'react'
import ModalBase from '../components/ModalBase'
import CardBox from '../components/CardBox'
import { useToast } from '../hooks/useToast'

export default function Automations() {
    const [open, setOpen] = useState(false)
    const [progress, setProgress] = useState(0)
    const toast = useToast()

    const run = async () => {
        setOpen(true)
        setProgress(10)
        for (let i = 1; i <= 10; i++) {
            await new Promise(r => setTimeout(r, 200))
            setProgress(prev => Math.min(100, prev + 9))
        }
        toast.success('Automation complete')
    }

    return (
        <div className="min-h-screen bg-[var(--ferrari-black)] p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-black text-[var(--ferrari-white)] mb-6 tracking-tight">
                    AUTOMATION <span className="text-gradient-ferrari">CENTER</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CardBox title="Automation #1" subtitle="Data processing workflow">
                        <div className="flex gap-3 mt-4">
                            <button className="btn-ferrari px-6 py-2 rounded-lg text-sm flex-1" onClick={run}>Run</button>
                            <button className="px-6 py-2 rounded-lg text-sm border-2 border-gray-600 text-[var(--ferrari-white)] hover:border-[var(--ferrari-white)] transition-all duration-300 font-semibold">Edit</button>
                        </div>
                    </CardBox>

                    <CardBox title="Automation #2" subtitle="Email notification system">
                        <div className="flex gap-3 mt-4">
                            <button className="btn-ferrari px-6 py-2 rounded-lg text-sm flex-1" onClick={() => toast.info('Queued for execution')}>Queue</button>
                            <button className="px-6 py-2 rounded-lg text-sm border-2 border-gray-600 text-[var(--ferrari-white)] hover:border-[var(--ferrari-white)] transition-all duration-300 font-semibold">Edit</button>
                        </div>
                    </CardBox>

                    <CardBox title="Automation #3" subtitle="Database backup routine">
                        <div className="flex gap-3 mt-4">
                            <button className="btn-ferrari px-6 py-2 rounded-lg text-sm flex-1" onClick={run}>Run</button>
                            <button className="px-6 py-2 rounded-lg text-sm border-2 border-gray-600 text-[var(--ferrari-white)] hover:border-[var(--ferrari-white)] transition-all duration-300 font-semibold">Edit</button>
                        </div>
                    </CardBox>
                </div>

                <ModalBase open={open} onClose={() => setOpen(false)} title="Automation Running">
                    <div className="space-y-4">
                        <progress className="progress progress-error w-full h-3" value={progress} max="100"></progress>
                        <div className="text-center">
                            <div className="text-3xl font-black text-[var(--ferrari-red)]">{progress}%</div>
                            <div className="text-sm text-gray-400 mt-2">Processing...</div>
                        </div>
                    </div>
                </ModalBase>
            </div>
        </div>
    )
}
