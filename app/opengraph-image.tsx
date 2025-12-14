import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Kriyatan | The Creator OS';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // Font loading (Optional, using system font for speed here)
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f8fafc', // Brand Surface
                    backgroundImage: 'linear-gradient(to bottom right, #f8fafc, #fff1f2)',
                }}
            >
                {/* Decorative Grid Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage:
                            'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    }}
                />

                {/* Logo Container */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                        zIndex: 10,
                    }}
                >
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: '#f63859' }}
                    >
                        <path
                            d="M20 2L35.5 11V29L20 38L4.5 29V11L20 2Z"
                            fill="currentColor"
                            fillOpacity="0.1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path d="M20 10L29 15.5V24.5L20 30L11 24.5V15.5L20 10Z" fill="currentColor" />
                    </svg>
                </div>

                {/* Text Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#0f172a',
                            marginBottom: 20,
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                        }}
                    >
                        Kriya<span style={{ color: '#f63859' }}>tan</span>.
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#64748b',
                            fontWeight: 500,
                        }}
                    >
                        The Professional OS for Creators
                    </div>
                </div>

                {/* Badge */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: 50,
                        padding: '10px 30px',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                    }}
                >
                    <div
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            backgroundColor: '#f63859',
                            marginRight: 16,
                        }}
                    />
                    <span style={{ fontSize: 24, fontWeight: 700, color: '#0f172a' }}>
                        Secure Your Income
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}