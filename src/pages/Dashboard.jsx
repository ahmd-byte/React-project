import React from 'react'
import Sidebar from '../components/Sidebar'
import CardBox from '../components/CardBox'
import { useToast } from '../hooks/useToast'

export default function Dashboard() {
    const toast = useToast()
    return (
        <div className="min-h-screen bg-[var(--ferrari-black)] p-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <aside className="col-span-1">
                        <Sidebar />
                    </aside>
                    <div className="col-span-3 space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-black text-[var(--ferrari-white)] tracking-tight">
                                DASHBOARD <span className="text-gradient-ferrari">OVERVIEW</span>
                            </h1>
                            <button
                                className="btn-ferrari px-6 py-2 rounded-lg text-sm"
                                onClick={() => toast.success('Saved successfully')}
                            >
                                Save
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <CardBox title="Active Users" subtitle="Current active users">
                                <div className="text-4xl font-black text-[var(--ferrari-red)]">1.2k</div>
                                <div className="text-xs text-gray-500 mt-2">+14% from last week</div>
                            </CardBox>
                            <CardBox title="Open Tasks" subtitle="Pending tasks">
                                <div className="text-4xl font-black text-[var(--ferrari-red)]">24</div>
                                <div className="text-xs text-gray-500 mt-2">5 high priority</div>
                            </CardBox>
                            <CardBox title="Errors" subtitle="This week">
                                <div className="text-4xl font-black text-[var(--ferrari-red)]">2</div>
                                <div className="text-xs text-gray-500 mt-2">-50% from last week</div>
                            </CardBox>
                        </div>

                        <div className="premium-card p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4 text-[var(--ferrari-white)]">Recent Activity</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[var(--ferrari-grey-light)]">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">ID</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Action</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">User</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[var(--ferrari-grey-light)] hover:bg-[var(--ferrari-grey)] transition-colors">
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">1</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">Created automation</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">Ahmad</td>
                                            <td className="py-3 px-4 text-gray-400">2025-11-26</td>
                                        </tr>
                                        <tr className="border-b border-[var(--ferrari-grey-light)] hover:bg-[var(--ferrari-grey)] transition-colors">
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">2</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">Updated settings</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">Sarah</td>
                                            <td className="py-3 px-4 text-gray-400">2025-11-25</td>
                                        </tr>
                                        <tr className="hover:bg-[var(--ferrari-grey)] transition-colors">
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">3</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">Deployed to production</td>
                                            <td className="py-3 px-4 text-[var(--ferrari-white)]">John</td>
                                            <td className="py-3 px-4 text-gray-400">2025-11-24</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
