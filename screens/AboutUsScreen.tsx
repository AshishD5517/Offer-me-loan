
import React from 'react';

// Icons
const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-1 transition-transform duration-300 h-full">
        <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-primary mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
);

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string; bio: string }> = ({ name, role, imageUrl, bio }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <div className="h-80 overflow-hidden relative group">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Connect on LinkedIn</p>
            </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-secondary">{name}</h3>
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">{role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        </div>
    </div>
);

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center p-6 border-r border-gray-200 last:border-0">
        <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{value}</p>
        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">{label}</p>
    </div>
);

const AboutUsScreen: React.FC = () => {
    return (
        <div className="bg-gray-50 animate-fade-in-up">
            {/* Hero Section */}
            <section className="relative bg-secondary py-32 overflow-hidden">
                 <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop" 
                        alt="Team meeting" 
                        className="w-full h-full object-cover opacity-10" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary"></div>
                </div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 backdrop-blur-sm border border-primary/30 uppercase tracking-wider">
                        About Offer Me Loan
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Simplifying Finance, <br className="hidden md:block" /> <span className="text-primary">Amplifying Possibilities.</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We are India's fastest-growing digital lending marketplace, dedicated to making credit accessible, transparent, and hassle-free for everyone.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white border-b border-gray-200 relative z-20 -mt-10 mx-6 md:mx-auto max-w-6xl rounded-xl shadow-xl p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                    <StatItem value="50k+" label="Active Users" />
                    <StatItem value="₹100Cr+" label="Loans Disbursed" />
                    <StatItem value="500+" label="Verified Agents" />
                    <StatItem value="98%" label="Satisfaction Rate" />
                </div>
            </section>

            {/* Detailed Story Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <div className="relative order-2 md:order-1">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
                                alt="Business analysis" 
                                className="relative rounded-2xl shadow-2xl w-full z-10 object-cover h-[500px]"
                            />
                             <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block max-w-xs border-l-4 border-accent">
                                <p className="text-secondary font-bold text-lg italic">"We don't just connect you to lenders; we connect you to your future."</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Who We Are</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                <strong>Offer Me Loan</strong> was born out of a simple yet powerful idea: getting a loan shouldn't be complicated. In a market flooded with paperwork, hidden fees, and endless waiting periods, we saw an opportunity to build a bridge.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We are a technology-first platform that connects borrowers directly with a diverse network of loan agents and financial institutions. By removing traditional bottlenecks, we empower you to compare offers, negotiate terms, and secure funding faster than ever before. Whether you are a salaried professional, a business owner, or a student, we have a solution tailored for you.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-lg">
                                    <CheckIcon /> <span>100% Digital Process</span>
                                </div>
                                <div className="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-lg">
                                    <CheckIcon /> <span>Secure Data Encryption</span>
                                </div>
                                <div className="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-lg">
                                    <CheckIcon /> <span>No Hidden Charges</span>
                                </div>
                                <div className="flex items-center text-gray-700 font-medium bg-gray-50 p-3 rounded-lg">
                                    <CheckIcon /> <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-secondary text-white relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Purpose</h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Driving financial inclusion through technology and trust.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors group">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary-light">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To democratize access to credit by providing a transparent, efficient, and secure marketplace. We aim to empower every borrower with choice and every agent with opportunity, fostering financial well-being for all.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors group">
                            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To become India's most trusted financial ecosystem, where getting a loan is as simple as sending a message. We envision a future where financial barriers no longer stand in the way of dreams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Core Values That Drive Us</h2>
                        <p className="text-gray-600">
                            Our culture is built on a foundation of trust and excellence. These values guide every decision we make.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ValueCard 
                            title="Integrity First" 
                            description="We believe in doing the right thing, even when no one is watching. Honesty and ethical conduct are non-negotiable for us and our partners."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        />
                        <ValueCard 
                            title="Customer Obsession" 
                            description="Our users are at the heart of everything we do. We strive to solve their problems with speed, empathy, and effectiveness."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                        />
                        <ValueCard 
                            title="Innovation" 
                            description="We embrace technology to simplify the complex. We are constantly evolving to provide a smarter, faster borrowing experience."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        />
                    </div>
                </div>
            </section>

             {/* Meet The Team Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">The Minds Behind The Mission</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Meet Our Leadership</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            A team of passionate individuals committed to revolutionizing the lending industry in India.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                         <TeamMemberCard 
                            name="Aarav Sharma" 
                            role="Founder & CEO" 
                            imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                            bio="With over 15 years in fintech, Aarav envisioned a platform that removes the friction from borrowing. He leads the company with a focus on transparency and user-centric innovation."
                         />
                         <TeamMemberCard 
                            name="Priya Patel" 
                            role="Chief Operating Officer" 
                            imageUrl="https://images.unsplash.com/photo-1573496359-136d47552640?q=80&w=800&auto=format&fit=crop"
                            bio="Priya brings a wealth of experience in operational excellence. She ensures that every loan application is processed smoothly and that our network of agents remains top-tier."
                         />
                         <TeamMemberCard 
                            name="Rohan Gupta" 
                            role="Head of Technology" 
                            imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
                            bio="A tech visionary, Rohan architects the secure and scalable systems that power Offer Me Loan. He is passionate about using AI to better match borrowers with lenders."
                         />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Write Your Financial Story?</h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                        Join thousands of satisfied users who found the perfect loan through our platform. It takes less than 5 minutes to get started.
                    </p>
                    <a 
                        href="/#apply-now" 
                        className="inline-block bg-white text-primary font-bold text-lg py-4 px-10 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutUsScreen;
