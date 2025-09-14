import React from 'react';
import FormComponent from '../components/FormComponent';

export default function EventCountdown() {
  return (
    <div className="container">
      <h2>Event Countdown</h2>
      <FormComponent mode="future" />
    </div>
  );
}
