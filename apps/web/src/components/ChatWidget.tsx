
import { useState } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    const redColor = '#ff4d4f'; // Example red color, adjust as needed

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: redColor,
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(255, 77, 79, 0.4), 0 0 20px rgba(255, 77, 79, 0.2)', // Beaming effect
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 9999,
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    aria-label="Open chat"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '380px',
                        height: '600px',
                        backgroundColor: 'white', // Glassmorphism background could be rgba(255, 255, 255, 0.8) with backdrop-filter
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 9999,
                        border: '1px solid rgba(0,0,0,0.05)',
                        fontFamily: "'Inter', sans-serif", // Assuming Inter or system font
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '16px 20px',
                            background: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)', // Premium gradient
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Velo
                            </div>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Velo</h3>
                                <span style={{ fontSize: '12px', opacity: 0.9 }}>Velome AI Assistant</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {/* Delete/Clear Button (Icon only for now) */}
                            <button
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                title="Clear chat"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                            {/* Close Button */}
                            <button
                                onClick={toggleChat}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                title="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div
                        style={{
                            flex: 1,
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {/* Welcome Message */}
                        <div
                            style={{
                                alignSelf: 'flex-start',
                                maxWidth: '85%',
                                backgroundColor: 'white',
                                padding: '16px',
                                borderRadius: '16px',
                                borderTopLeftRadius: '4px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                color: '#333',
                                fontSize: '14px',
                                lineHeight: '1.5',
                            }}
                        >
                            <p style={{ margin: '0 0 12px 0' }}>Hi there! 👋 I'm Velo, your travel companion. I can help you with eSIM plans, pricing, and installation.</p>
                            <p style={{ margin: 0 }}>How may I assist you today?</p>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div
                        style={{
                            padding: '16px',
                            backgroundColor: 'white',
                            borderTop: '1px solid #eee',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: '12px 16px',
                                borderRadius: '24px',
                                border: '1px solid #e1e4e8',
                                fontSize: '14px',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#4568dc')}
                            onBlur={(e) => (e.target.style.borderColor = '#e1e4e8')}
                        />
                        <button
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#2ba6c1',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                cursor: 'pointer',
                                padding: 0,
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '-2px' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
