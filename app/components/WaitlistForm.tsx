'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function WaitlistForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY || 'MISSING_KEY');
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    // Pain points state
    const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);

    const painPoints = [
        "Delayed Payments (30-90 days)",
        "No Legal Contracts",
        "Messy Invoices & Tracking",
        "Finding Brand Deals",
        "Negotiating Rates"
    ];

    const handleInitialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setEmailError('');
        setShowModal(true);
    };

    const togglePainPoint = (point: string) => {
        if (selectedPainPoints.includes(point)) {
            setSelectedPainPoints(selectedPainPoints.filter(p => p !== point));
        } else {
            setSelectedPainPoints([...selectedPainPoints, point]);
        }
    };

    if (state.succeeded) {
        return (
            <div style={{
                padding: '1rem',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                borderRadius: '0.75rem',
                border: '1px solid #86efac',
                fontWeight: 500,
                fontSize: '0.875rem'
            }}>
                ✅ You're on the list! We'll email you soon.
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleInitialSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ position: 'relative' }}>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@channel.com"
                        style={{
                            width: '100%',
                            padding: '0.875rem 1.25rem',
                            borderRadius: '0.75rem',
                            backgroundColor: '#f8fafc',
                            border: `1px solid ${emailError ? '#ef4444' : 'rgb(226, 232, 240)'}`,
                            color: '#0f172a',
                            fontSize: '1rem',
                            outline: 'none',
                            boxSizing: 'border-box',
                            transition: 'border-color 0.2s, box-shadow 0.2s'
                        }}
                        onFocus={(e) => {
                            if (!emailError) {
                                e.currentTarget.style.borderColor = '#f63859';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(246, 56, 89, 0.1)';
                            }
                        }}
                        onBlur={(e) => {
                            if (!emailError) {
                                e.currentTarget.style.borderColor = 'rgb(226, 232, 240)';
                                e.currentTarget.style.boxShadow = 'none';
                            }
                        }}
                    />
                    {emailError && (
                        <p style={{ position: 'absolute', bottom: '-1.25rem', left: '0.25rem', fontSize: '0.75rem', color: '#ef4444' }}>
                            {emailError}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '0.875rem 1.25rem',
                        backgroundColor: '#f63859',
                        color: 'white',
                        fontWeight: 700,
                        borderRadius: '0.75rem',
                        boxShadow: '0 10px 15px -3px rgba(246, 56, 89, 0.3)',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        boxSizing: 'border-box',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(246, 56, 89, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(246, 56, 89, 0.3)';
                    }}
                >
                    Join Waitlist
                </button>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                    We are onboarding users in batches.
                </p>
            </form>

            {/* Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        width: '100%',
                        maxWidth: '28rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: '1px solid rgb(226, 232, 240)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}>
                        <form onSubmit={handleSubmit}>
                            {/* Hidden input for email to include it in the final submission */}
                            <input type="hidden" name="email" value={email} />

                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', textAlign: 'left' }}>
                                Quick question...
                            </h3>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                                Help us build the perfect CRM for you.
                            </p>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                                What are your biggest challenges right now? (Select all that apply)
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                                {painPoints.map((point) => (
                                    <label key={point} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.75rem',
                                        borderRadius: '0.75rem',
                                        border: `1px solid ${selectedPainPoints.includes(point) ? '#f63859' : 'rgb(226, 232, 240)'}`,
                                        backgroundColor: selectedPainPoints.includes(point) ? 'rgba(246, 56, 89, 0.05)' : 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}>
                                        <input
                                            type="checkbox"
                                            name="painPoints"
                                            value={point}
                                            checked={selectedPainPoints.includes(point)}
                                            onChange={() => togglePainPoint(point)}
                                            style={{
                                                accentColor: '#f63859',
                                                width: '1.125rem',
                                                height: '1.125rem'
                                            }}
                                        />
                                        <span style={{ fontSize: '0.925rem', color: '#334155', fontWeight: 500 }}>{point}</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    backgroundColor: '#f63859',
                                    color: 'white',
                                    fontWeight: 700,
                                    borderRadius: '0.75rem',
                                    border: 'none',
                                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                                    opacity: state.submitting ? 0.7 : 1,
                                    fontSize: '1rem'
                                }}
                            >
                                {state.submitting ? 'Complete Signup...' : 'Complete Signup'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                style={{
                                    marginTop: '0.75rem',
                                    background: 'none',
                                    border: 'none',
                                    color: '#94a3b8',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    textDecoration: 'underline'
                                }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </>
    );
}