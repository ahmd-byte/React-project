import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            background: 'var(--ferrari-grey)',
                            color: 'var(--ferrari-white)',
                            border: '1px solid var(--ferrari-grey-light)',
                        },
                        success: {
                            iconTheme: {
                                primary: 'var(--ferrari-red)',
                                secondary: 'var(--ferrari-white)',
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: 'var(--ferrari-red)',
                                secondary: 'var(--ferrari-white)',
                            },
                        },
                    }}
                />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
