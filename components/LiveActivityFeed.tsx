import React, { useState, useEffect } from 'react';

type Activity = {
    id: number;
    message: React.ReactNode;
};

const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const loanTypes = ['personal loan', 'home loan', 'auto loan', 'business loan', 'student loan', 'medical loan'];
const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat'];

const generateRandomActivity = (): React.ReactNode => {
    const isFunded = Math.random() > 0.5;
    const loanType = loanTypes[Math.floor(Math.random() * loanTypes.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const amount = Math.floor(Math.random() * (100 - 1) + 1) * 50000;

    if (isFunded) {
        return (
            <span>
                A <strong className="font-bold text-primary">{formatCurrency(amount)}</strong> {loanType} was just funded in <strong className="font-bold">{location}</strong>.
            </span>
        );
    } else {
        return (
            <span>
                A new request for a <strong className="font-bold text-accent">{loanType}</strong> was just posted from <strong className="font-bold">{location}</strong>.
            </span>
        );
    }
};

const ActivityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 7h2.586l-6.293 6.293a1 1 0 01-1.414 0L5 10.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 11.586l5.293-5.293A1 1 0 0116 6.01V4a1 1 0 112 0v3a1 1 0 01-1 1h-3a1 1 0 110-2z" />
    </svg>
);

const LiveActivityFeed: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newActivity = {
                id: Date.now(),
                message: generateRandomActivity(),
            };

            setActivities(prev => {
                const updatedActivities = [...prev, newActivity];
                if (updatedActivities.length > 3) {
                    return updatedActivities.slice(updatedActivities.length - 3);
                }
                return updatedActivities;
            });

            setTimeout(() => {
                setActivities(prev => prev.filter(activity => activity.id !== newActivity.id));
            }, 5500);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    if (activities.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-3 w-full max-w-sm">
            {activities.map(activity => (
                <div 
                    key={activity.id}
                    className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-gray-200 animate-slide-in-fade-out w-full"
                >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
                        <ActivityIcon />
                    </div>
                    <p className="text-sm text-secondary">
                        {activity.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default LiveActivityFeed;