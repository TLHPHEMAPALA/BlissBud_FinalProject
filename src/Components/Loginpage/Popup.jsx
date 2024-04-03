import React, { useEffect } from 'react';

export default function PopUp() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/questionarie'; 
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ 
            position: 'fixed', 
            top: '0', 
            right: '0', 
            bottom: '0', 
            left: '0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: '999'
        }}>
            <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#F3F4F6', 
                borderRadius: '0.75rem', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                maxWidth: '24rem',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out'
            }}>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600', textAlign: 'center' }}>
                    Bliss Bud
                </h2>
                <p style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#4B5563' }}>
                    Bliss Bud is a transformative mental health platform designed to address the basic level of mental health challenges commonly faced by university students. With university life presenting a myriad of daily challenges, from academic pressures to social and personal responsibilities, Bliss Bud offers effective tools and programs to empower students to take control of their emotional well-being.
                </p>
             
            </div>
        </div>
    );
}
