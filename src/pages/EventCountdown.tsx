import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent';

export default function EventCountdown() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button className="back-btn" onClick={() => navigate('/')} aria-label="Voltar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ marginLeft: '0.5rem' }}>Voltar</span>
        </button>
        <h2 style={{ margin: 0 }}>Event Countdown</h2>
      </div>
      <FormComponent mode="future" />
    </div>
  );
}
