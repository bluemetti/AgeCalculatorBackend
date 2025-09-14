import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema, FormValues } from '../validation';
import InputGroup from './InputGroup';
import Results from './Results';

type FormComponentProps = {
  mode?: 'birth' | 'future';
};

export default function FormComponent({ mode = 'birth' }: FormComponentProps) {
  const [result, setResult] = useState<{ years: number | null; months: number | null; days: number | null }>({ years: null, months: null, days: null });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const today = new Date();
    const date = new Date(data.year, data.month - 1, data.day);

    if (mode === 'birth') {
      let years = today.getFullYear() - date.getFullYear();
      let months = today.getMonth() - date.getMonth();
      let days = today.getDate() - date.getDate();
      if (months < 0 || (months === 0 && days < 0)) { years--; months += 12; }
      if (days < 0) { const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); days += prevMonth.getDate(); months--; }
      setResult({ years, months, days });
    } else {
      // future event: calculate time remaining
      if (date <= today) { setResult({ years: 0, months: 0, days: 0 }); return; }
      let years = date.getFullYear() - today.getFullYear();
      let months = date.getMonth() - today.getMonth();
      let days = date.getDate() - today.getDate();
      if (days < 0) { const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); days += prevMonth.getDate(); months--; }
      if (months < 0) { years--; months += 12; }
      setResult({ years, months, days });
    }
  };

  const focusFirst = useCallback(() => inputRef.current?.focus(), []);

  useEffect(() => { focusFirst(); }, [focusFirst]);

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="inputs">
          <InputGroup id="day" label="DAY" placeholder="DD" register={register} error={errors.day?.message} min={1} max={31} />
          <InputGroup id="month" label="MONTH" placeholder="MM" register={register} error={errors.month?.message} min={1} max={12} />
          <InputGroup id="year" label="YEAR" placeholder="YYYY" register={register} error={errors.year?.message} min={1900} max={new Date().getFullYear()} />
        </div>

        <div className="divider-btn-row">
          <hr className="divider" />
          <button type="submit" className="submit-btn" aria-label={mode === 'birth' ? 'Calcular idade' : 'Calcular tempo restante'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" fill="none">
              <g>
                <circle cx="23" cy="22" r="22" fill="#854dff" />
                <path d="M23 14v16M14 23l9 9 9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </button>
        </div>

        <Results years={result.years} months={result.months} days={result.days} />
      </form>
    </div>
  );
}
