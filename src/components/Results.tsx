import React from 'react';

type ResultsProps = {
  years: number | null;
  months: number | null;
  days: number | null;
};

export default function Results({ years, months, days }: ResultsProps) {
  return (
    <div className="results">
      <p>
        <span className="result-number">{years !== null ? years : '--'}</span> years
      </p>
      <p>
        <span className="result-number">{months !== null ? months : '--'}</span> months
      </p>
      <p>
        <span className="result-number">{days !== null ? days : '--'}</span> days
      </p>
    </div>
  );
}
