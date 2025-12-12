'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function WaitlistForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY!);

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
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="name@channel.com"
                style={{
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    borderRadius: '0.75rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid rgb(226, 232, 240)',
                    color: '#0f172a',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#f63859';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(246, 56, 89, 0.1)';
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(226, 232, 240)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                style={{
                    width: '100%',
                    padding: '0.875rem 1.25rem',
                    backgroundColor: '#f63859',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '0.75rem',
                    boxShadow: '0 10px 15px -3px rgba(246, 56, 89, 0.3)',
                    border: 'none',
                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                    opacity: state.submitting ? 0.5 : 1,
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                    if (!state.submitting) {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 15px 20px -3px rgba(246, 56, 89, 0.4)';
                    }
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(246, 56, 89, 0.3)';
                }}
            >
                {state.submitting ? 'Adding to list...' : 'Join Waitlist'}
            </button>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                We are onboarding users in batches.
            </p>
        </form>
    );
}