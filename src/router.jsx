import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Automations from './pages/Automations'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
