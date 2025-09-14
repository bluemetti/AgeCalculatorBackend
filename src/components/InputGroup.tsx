import React from 'react';

type InputGroupProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string | undefined;
  register: any;
  min?: number;
  max?: number;
};

export default function InputGroup({ id, label, type = 'number', placeholder, error, register, min, max }: InputGroupProps) {
  return (
    <div className="input-group">
      <label htmlFor={id} className={error ? 'error-label' : ''}>
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} {...register(id as any, { valueAsNumber: true })} className={error ? 'error-input' : ''} min={min} max={max} />
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}
