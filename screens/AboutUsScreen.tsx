
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

const AboutUsScreen: React.FC = () => {
    return (
        <div className="bg-gray-50 animate-fade-in-up">
            {/* Hero Section */}
            <section className="relative bg-secondary py-32 overflow-hidden">
                 <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Team working together" 
                        className="w-full h-full object-cover opacity-10" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary"></div>
                </div>
                <div className="relative container mx-auto px-6 text-center z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4 backdrop-blur-sm border border-primary/30">
                        WHO WE ARE
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Empowering Dreams through <br className="hidden md:block" /> <span className="text-primary">Accessible Finance</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We are bridging the gap between borrowers and lenders, creating a seamless ecosystem where financial goals become reality.
                    </p>
                </div>
            </section>

            {/* Introduction & Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?q=80&w=1000&auto=format&fit=crop" 
                                alt="Our Story" 
                                className="relative rounded-2xl shadow-2xl w-full z-10 object-cover h-[500px]"
                            />
                             <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-xs border-l-4 border-primary">
                                <p className="text-secondary font-bold text-lg">"Finance should be an enabler, not a barrier."</p>
                                <p className="text-gray-500 text-sm mt-2">- Aarav Sharma, CEO</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Story</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Offer Me Loan began with a simple observation: the loan market in India was fragmented. Borrowers often faced opaque processes, while genuine agents struggled to find qualified leads.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Founded in 2023, we set out to build a digital bridge. We combined cutting-edge technology with human empathy to create a platform where trust is the currency. Today, we are proud to have facilitated millions in funding, helping families buy homes, entrepreneurs start businesses, and individuals overcome emergencies.
                            </p>
                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center text-gray-700 font-medium">
                                    <CheckIcon /> <span>Connecting 10,000+ Borrowers daily</span>
                                </div>
                                <div className="flex items-center text-gray-700 font-medium">
                                    <CheckIcon /> <span>Network of 500+ Verified Agents</span>
                                </div>
                                <div className="flex items-center text-gray-700 font-medium">
                                    <CheckIcon /> <span>100% Transparent Processes</span>
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
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To democratize access to credit by providing a transparent, efficient, and secure marketplace. We aim to empower every borrower with choice and every agent with opportunity, fostering financial well-being for all.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To become India's most trusted financial ecosystem, where getting a loan is as simple as sending a message. We envision a future where financial barriers no longer stand in the way of dreams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
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

            {/* What Makes Us Unique */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                     <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Unique Proposition</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">What Sets Us Apart?</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Unlike traditional banks or aggregators, we don't just throw your application into a black box. We curate connections.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-secondary">Direct Negotiation</h4>
                                        <p className="text-gray-600 mt-2">Talk directly to agents. No middlemen, no miscommunication. You have the power to negotiate terms that suit you.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">2</div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-secondary">Privacy Controlled</h4>
                                        <p className="text-gray-600 mt-2">We verify agents before they can see your details. Your privacy is paramount, and we share data only with your consent.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">3</div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold text-secondary">Diverse Loan Portfolio</h4>
                                        <p className="text-gray-600 mt-2">From personal loans to business capital, our network covers the entire spectrum of financial needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                             <img 
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop" 
                                alt="Unique features" 
                                className="rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </div>
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
