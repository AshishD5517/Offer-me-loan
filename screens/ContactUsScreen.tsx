
import React from 'react';
import ContactUsSection from '../components/ContactUsSection';

const ContactUsScreen: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Page Header */}
            <section className="py-20 bg-primary-light animate-fade-in-up">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>
            </section>
            
            <ContactUsSection />
        </div>
    );
};

export default ContactUsScreen;
