import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <path d="M20 2L35.5 11V29L20 38L4.5 29V11L20 2Z" fill="#f63859" fillOpacity="0.2" stroke="#f63859" strokeWidth="2" />
          <path d="M20 10L29 15.5V24.5L20 30L11 24.5V15.5L20 10Z" fill="#f63859" />
        </svg>
      </div>
    ),
    { ...size }
  );
}