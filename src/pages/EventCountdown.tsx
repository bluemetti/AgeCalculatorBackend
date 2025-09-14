import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../components/FormComponent';

export default function EventCountdown() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Voltar">
          ← Voltar
        </button>
        <h2 style={{ margin: 0 }}>Event Countdown</h2>
      </div>
      <FormComponent mode="future" />
    </div>
  );
}
