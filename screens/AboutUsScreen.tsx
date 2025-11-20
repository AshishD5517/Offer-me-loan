
import React from 'react';

const AboutUsScreen: React.FC = () => {
    return (
        <div className="bg-gray-50 font-sans text-gray-700 animate-fade-in-up">
             {/* 1. Welcoming Introduction (Hero) */}
             <section className="relative py-24 bg-gradient-to-br from-secondary to-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="People connecting" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Welcome to <span className="text-primary">Offer Me Loan</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 font-light leading-relaxed">
                        Bridging the gap between dreams and reality through accessible, transparent, and fair financial solutions. We are redefining how India borrows.
                    </p>
                </div>
             </section>

             {/* 2. Our Mission & 3. Our Vision */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 bg-primary-light/30 rounded-3xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                                <span className="w-2 h-8 bg-primary mr-4 rounded-full"></span>
                                Our Mission
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                To democratize the lending landscape by creating a seamless marketplace where borrowers find fair rates and agents find genuine leads. We strive to eliminate the complexities of traditional banking through technology and trust, ensuring financial inclusion for all.
                            </p>
                        </div>
                        <div className="p-10 bg-accent/10 rounded-3xl border border-accent/10 shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                                <span className="w-2 h-8 bg-accent mr-4 rounded-full"></span>
                                Our Vision
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700">
                                To be India's most preferred and trusted financial connection platform, fostering a world where financial opportunities are accessible to everyone, regardless of their background or location. We envision a future where getting a loan is as simple as sending a message.
                            </p>
                        </div>
                    </div>
                </div>
             </section>

             {/* 4. Our Values */}
             <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary">Our Core Values</h2>
                        <p className="text-gray-500 mt-2 text-lg">The principles that guide every interaction and decision.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity", desc: "We uphold the highest standards of honesty and ethical behavior. Trust is our currency." },
                            { title: "Transparency", desc: "No hidden fees, no fine print surprises. Everything is clear from day one." },
                            { title: "Empathy", desc: "We understand that behind every loan request is a human story, a family, and a dream." },
                            { title: "Innovation", desc: "We constantly evolve our technology to make borrowing faster, safer, and smarter." },
                            { title: "Security", desc: "Protecting your data is paramount. We use bank-grade encryption to keep your information safe." },
                            { title: "Collaboration", desc: "We believe in the power of community, connecting people to help each other grow." }
                        ].map((val, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-primary">
                                <h3 className="text-xl font-bold text-secondary mb-3">{val.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* 5. What Makes Us Unique */}
             <section className="py-24 bg-secondary text-white relative overflow-hidden">
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"></div>
                 <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></div>
                 
                 <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Why We Stand Out</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">What Makes Us Unique?</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-6 shadow-lg shadow-primary/30">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Reverse Auction Model</h4>
                                        <p className="text-gray-300 leading-relaxed">Unlike traditional models where you chase banks, here lenders compete for your request. You sit back and watch the offers come to you.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center mr-6 shadow-lg shadow-accent/30">
                                        <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">AI-Powered Matching</h4>
                                        <p className="text-gray-300 leading-relaxed">Our smart algorithms instantly analyze your profile and connect you with agents who specialize in your specific loan type and credit history.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-6 shadow-lg">
                                        <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">End-to-End Privacy</h4>
                                        <p className="text-gray-300 leading-relaxed">We value your privacy. Your personal data is encrypted and shared only with the agent you explicitly choose to work with.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 rounded-2xl transform rotate-6 scale-105"></div>
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Unique features" className="relative rounded-2xl shadow-2xl object-cover h-full w-full transform transition-transform hover:scale-105 duration-500" />
                        </div>
                    </div>
                 </div>
             </section>

             {/* 6. Our Story */}
             <section className="py-24 bg-white">
                 <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Story</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-lg mx-auto text-gray-600 text-justify leading-loose">
                        <p className="mb-6">
                            It all started in 2023, when our founders realized a critical gap in the Indian lending market. While there were many banks and apps, the process was still opaque, slow, and impersonal. Borrowers were often rejected without reason, and agents struggled to find genuine leads.
                        </p>
                        <p className="mb-6">
                            <strong>Offer Me Loan</strong> was conceived as the solution to this disconnect. We envisioned a platform that wasn't just a directory, but an active marketplace. A place where technology empowers human connection, rather than replacing it.
                        </p>
                        <p>
                            From a small team in Delhi to a nationwide network, our journey has been fueled by one singular goal: to make finance friendly. Today, we are proud to have helped thousands of individuals and businesses achieve their financial goals with dignity and ease. We are not just a platform; we are your partner in progress.
                        </p>
                    </div>
                 </div>
             </section>

             {/* 7. Call to Action */}
             <section className="py-24 bg-primary-light relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00C49F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Ready to Write Your Financial Story?</h2>
                    <p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
                        Join thousands of satisfied users who found the perfect loan through our platform. It takes less than 5 minutes to get started.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="/#apply-now" className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-xl hover:bg-secondary/90 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            Get Started Now
                        </a>
                        <a href="/contact-us" className="inline-block px-10 py-4 bg-white text-secondary font-bold rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all transform hover:-translate-y-1">
                            Contact Support
                        </a>
                    </div>
                </div>
             </section>
        </div>
    );
}

export default AboutUsScreen;
