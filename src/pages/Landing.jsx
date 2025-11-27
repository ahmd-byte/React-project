import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="bg-[var(--ferrari-black)]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--ferrari-red)] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--ferrari-red)] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                            <span className="text-gradient-ferrari">PERFORMANCE</span>
                            <br />
                            <span className="text-[var(--ferrari-white)]">MEETS DESIGN</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
                            A premium frontend scaffold built with React, TailwindCSS, and DaisyUI.
                            <br />
                            Engineered for speed, crafted for excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                to="/dashboard"
                                className="btn-ferrari px-10 py-4 rounded-lg text-base w-full sm:w-auto"
                            >
                                Explore Dashboard
                            </Link>
                            <Link
                                to="/automations"
                                className="px-10 py-4 rounded-lg text-base border-2 border-[var(--ferrari-white)] text-[var(--ferrari-white)] hover:bg-[var(--ferrari-white)] hover:text-[var(--ferrari-black)] transition-all duration-300 font-semibold uppercase tracking-wide w-full sm:w-auto"
                            >
                                View Automations
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-[var(--ferrari-red)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-[var(--ferrari-grey)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="premium-card p-8 rounded-2xl text-center animate-fade-in-up">
                            <div className="text-5xl font-black text-[var(--ferrari-red)] mb-4">1.2K</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Active Users</div>
                            <div className="text-xs text-gray-500">+14% from last month</div>
                        </div>

                        <div className="premium-card p-8 rounded-2xl text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="text-5xl font-black text-[var(--ferrari-red)] mb-4">$12.4K</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Total Sales</div>
                            <div className="text-xs text-gray-500">+21% from last month</div>
                        </div>

                        <div className="premium-card p-8 rounded-2xl text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="text-5xl font-black text-[var(--ferrari-red)] mb-4">99.9%</div>
                            <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Uptime</div>
                            <div className="text-xs text-gray-500">Last 30 days</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-[var(--ferrari-black)]">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-[var(--ferrari-white)]">
                        PREMIUM <span className="text-gradient-ferrari">FEATURES</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="premium-card p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-[var(--ferrari-red)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--ferrari-white)]">Lightning Fast</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Built with Vite for instant hot module replacement and optimized production builds.
                            </p>
                        </div>

                        <div className="premium-card p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-[var(--ferrari-red)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--ferrari-white)]">Modern Design</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sleek, minimalist interface with DaisyUI components and custom Ferrari-inspired styling.
                            </p>
                        </div>

                        <div className="premium-card p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-[var(--ferrari-red)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--ferrari-white)]">Fully Responsive</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Seamlessly adapts to any screen size, from mobile phones to ultra-wide displays.
                            </p>
                        </div>

                        <div className="premium-card p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-[var(--ferrari-red)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--ferrari-white)]">Type Safe</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Built with modern React patterns and best practices for maintainable code.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[var(--ferrari-grey)]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[var(--ferrari-white)]">
                            READY TO <span className="text-gradient-ferrari">ACCELERATE?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Start building your next premium web application today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-ferrari px-10 py-4 rounded-lg text-base">
                                Get Started
                            </button>
                            <button className="px-10 py-4 rounded-lg text-base border-2 border-gray-600 text-[var(--ferrari-white)] hover:border-[var(--ferrari-white)] transition-all duration-300 font-semibold uppercase tracking-wide">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-[var(--ferrari-black)] border-t border-[var(--ferrari-grey-light)]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ferrari-white)] mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ferrari-white)] mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Support</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ferrari-white)] mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors text-sm">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-[var(--ferrari-grey-light)] text-center">
                        <p className="text-gray-500 text-sm">© 2025 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
