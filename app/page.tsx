'use client';

import WaitlistForm from './components/WaitlistForm';

export default function KriyatanLanding() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Fixed Grid Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        backgroundColor: '#f8fafc',
        backgroundSize: '40px 40px',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)'
      }} />

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: '1rem', left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
        <div className="nav-container" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgb(226, 232, 240)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          borderRadius: '9999px',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '80rem',
          justifyContent: 'space-between'
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <svg style={{ width: '1.75rem', height: '1.75rem', color: '#f63859' }} viewBox="0 0 40 40" fill="none">
              <path d="M20 2L35.5 11V29L20 38L4.5 29V11L20 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 10L29 15.5V24.5L20 30L11 24.5V15.5L20 10Z" fill="currentColor" />
            </svg>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#0f172a' }}>
              Kriya<span style={{ color: '#f63859' }}>tan</span>
            </span>
          </a>

          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#problem" style={{ color: '#64748b', textDecoration: 'none' }}>Why Us?</a>
            <a href="#features" style={{ color: '#64748b', textDecoration: 'none' }}>Features</a>
            <a href="#waitlist" style={{ color: '#64748b', textDecoration: 'none' }}>Early Access</a>
          </div>

          <a href="#waitlist" className="nav-cta" style={{
            backgroundColor: '#0f172a',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap'
          }}>
            <span className="cta-text">Get Early Access</span>
            <span style={{ color: '#f63859' }}>→</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '3rem', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            marginBottom: '2rem',
            border: '1px solid rgb(226, 232, 240)'
          }}>
            <span style={{ position: 'relative', display: 'flex', height: '0.5rem', width: '0.5rem' }}>
              <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#f43f5e', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
              <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '0.5rem', width: '0.5rem', backgroundColor: '#f43f5e' }}></span>
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#64748b' }}>CRM Early Access</span>
          </div>

          <h1 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            color: '#0f172a',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '100%',
              background: 'linear-gradient(90deg, #3b82f6 0%, #ec4899 100%)',
              filter: 'blur(80px)',
              opacity: 0.15,
              zIndex: -1,
              pointerEvents: 'none'
            }}></div>
            The First CRM for<br />
            <span style={{ color: '#f63859' }}>Indian Creators.</span>
          </h1>

          <div style={{ marginBottom: '3rem' }}></div>

          <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '2.5rem', maxWidth: '42rem', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Manage Brands. Track Payments. Automate Contracts.<br />
            <strong>Stop using WhatsApp to run your business.</strong> Kriyatan is your professional command center.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="#waitlist" style={{
              backgroundColor: '#0f172a',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.3), 0 2px 4px -1px rgba(15, 23, 42, 0.15)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(15, 23, 42, 0.4), 0 4px 6px -2px rgba(15, 23, 42, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(15, 23, 42, 0.3), 0 2px 4px -1px rgba(15, 23, 42, 0.15)';
              }}>
              Get Early Access
            </a>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 500 }}>
              Join the exclusive waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section (Why a CRM?) */}
      <section id="problem" style={{ padding: '4rem 1.5rem', backgroundColor: 'white', borderTop: '1px solid rgb(241, 245, 249)', borderBottom: '1px solid rgb(241, 245, 249)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid rgb(226, 232, 240)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.75 }}>
                  {['"Can you resend the invoice?"', '"Where is the contract?"', '"Payment will be processed next week"', 'Lost in WhatsApp chats'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#64748b' }}>
                      <span style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        borderRadius: '9999px',
                        backgroundColor: '#fee2e2',
                        color: '#ef4444',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        flexShrink: 0
                      }}>✖</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ order: 1 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.875rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                You are a Business.<br />Run like one.
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '1.125rem' }}>
                <strong style={{ color: '#0f172a' }}>What is a CRM?</strong> It's a <em>Client Relationship Manager</em>. Think of it as a "Pocket Manager" that tracks every deal, invoice, and contract for you, so you never look unprofessional or lose money again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.875rem', fontWeight: 700, color: '#0f172a' }}>The Creator CRM</h2>
            <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Your entire business, organized in one place.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem'
          }}>
            {/* Smart Contracts */}
            <div style={{
              gridColumn: 'span 12',
              backgroundColor: 'white',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: '1.5rem',
              padding: '2rem',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(246, 56, 89, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'rgba(246, 56, 89, 0.1)',
                    color: '#f63859',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>Smart Contracts</h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem', maxWidth: '28rem' }}>
                  Generate lawyer-approved contracts in 30 seconds. Lock in deliverables, payment terms, and rights before you start work.
                </p>
              </div>

              <div style={{ marginTop: '2rem', backgroundColor: '#f8fafc', border: '1px solid rgb(241, 245, 249)', borderRadius: '0.75rem', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: '#22c55e' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contract Active</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['IP Rights Retained', '50% Advance Locked'].map((clause, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      backgroundColor: 'white',
                      padding: '0.5rem',
                      borderRadius: '0.375rem',
                      border: '1px solid rgb(226, 232, 240)',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}>
                      <span style={{ color: '#f63859', fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: '0.75rem', color: '#1e293b' }}>{clause}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Invoice Engine */}
            <div style={{
              gridColumn: 'span 12',
              backgroundColor: '#0f172a',
              color: 'white',
              borderRadius: '1.5rem',
              padding: '2rem',
              minHeight: '300px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(246, 56, 89, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>Payment Pipeline</h3>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  Send invoices that command respect. We automatically append MSME Compliance Seals to ensure finance teams prioritize your payout.
                </p>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '1rem' }}>
                    <span>Invoice #001</span>
                    <span style={{ color: '#f63859' }}>Overdue</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700 }}>
                    <span>Total Due</span>
                    <span style={{ fontSize: '1.125rem', color: '#f63859' }}>₹29,500</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '10rem',
                height: '10rem',
                backgroundColor: 'rgba(246, 56, 89, 0.2)',
                filter: 'blur(60px)',
                borderRadius: '9999px',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Deal Manager - Takes 4 columns */}
            <div style={{
              gridColumn: 'span 12',
              backgroundColor: 'white',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: '1.5rem',
              padding: '2rem',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(246, 56, 89, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'rgba(246, 56, 89, 0.1)',
                color: '#f63859',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Deal Manager</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Your data is your asset. Manage all your deals in a standardized, encrypted dashboard that no agency can spy on.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <div style={{ backgroundColor: '#dcfce7', color: '#15803d', fontSize: '10px', fontWeight: 700, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>Private</div>
                <div style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '10px', fontWeight: 700, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>Encrypted</div>
              </div>
            </div>

            {/* Verified Booking Page - Takes 6 columns (Half Width) */}
            <div style={{
              gridColumn: 'span 6',
              backgroundColor: 'white',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: '1.5rem',
              padding: '2rem',
              transition: 'all 0.3s'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(246, 56, 89, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
                color: '#db2777',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Booking Page</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                A professional public profile. Brands fill a structured brief, effectively filtering out spam and low-ballers.
              </p>
              <div style={{
                backgroundColor: '#fdf2f8',
                color: '#db2777',
                border: '1px solid #fce7f3',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>kriyatan.com/@you</span>
                <svg style={{ width: '0.875rem', height: '0.875rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" style={{ padding: '6rem 1.5rem', textAlign: 'center', backgroundColor: 'white', borderTop: '1px solid rgb(226, 232, 240)' }}>
        <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
          <div style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: 'white',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '1px solid rgb(226, 232, 240)',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}>
            <svg style={{ width: '2rem', height: '2rem', color: '#f63859' }} viewBox="0 0 40 40" fill="none">
              <path d="M20 2L35.5 11V29L20 38L4.5 29V11L20 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 10L29 15.5V24.5L20 30L11 24.5V15.5L20 10Z" fill="currentColor" />
            </svg>
          </div>

          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Secure your spot.</h2>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>Join the top 1% of creators professionalizing their workflow.</p>

          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', borderTop: '1px solid rgb(226, 232, 240)', padding: '3rem 1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f63859' }} viewBox="0 0 40 40" fill="none">
            <path d="M20 2L35.5 11V29L20 38L4.5 29V11L20 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 10L29 15.5V24.5L20 30L11 24.5V15.5L20 10Z" fill="currentColor" />
          </svg>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#0f172a' }}>
            Kriya<span style={{ color: '#f63859' }}>tan</span>.
          </span>
        </div>
        <div style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', flexWrap: 'wrap' }}>
          <p>&copy; 2025 Kriyatan Inc. Built with</p>
          <svg style={{ width: '1rem', height: '1rem', color: '#f63859' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p>in India.</p>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Mobile: Hide navigation menu links, show only logo and CTA */
        @media (max-width: 767px) {
          .nav-container {
            padding: 0.625rem 1rem !important;
          }
          .nav-links {
            display: none !important;
          }
          .cta-text {
            display: none;
          }
          .nav-cta {
            padding: 0.5rem !important;
            min-width: 2.5rem;
            justify-content: center;
          }
        }

        /* Tablet and Desktop: Show full navigation */
        @media (min-width: 768px) {
          #features > div > div > div:nth-child(1) {
            grid-column: span 7 !important;
          }
          #features > div > div > div:nth-child(2) {
            grid-column: span 5 !important;
          }
          #features > div > div > div:nth-child(3) {
            grid-column: span 6 !important;
          }
          #features > div > div > div:nth-child(4) {
            grid-column: span 6 !important;
          }
        }

        @media (max-width: 1024px) {
          #features > div > div > div:nth-child(1) {
            grid-column: span 12 !important;
          }
          #features > div > div > div:nth-child(2) {
            grid-column: span 12 !important;
          }
          #features > div > div > div:nth-child(3) {
            grid-column: span 12 !important;
          }
          #features > div > div > div:nth-child(4) {
             grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}