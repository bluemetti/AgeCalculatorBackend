// App principal da Calculadora de Idade
import React, { useState, useEffect } from "react";
// Importa hooks do react-hook-form e o schema de validação
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormValues } from "./validation";
import "./App.css";

// Componente principal
const App = () => {
  // Estado para armazenar o resultado da idade
  const [age, setAge] = useState<{ years: number | null; months: number | null; days: number | null }>({
    years: null,
    months: null,
    days: null,
  });

  // Configuração do formulário com validação
  const {
    register, // registra os inputs
    handleSubmit, // lida com o submit
    formState: { errors }, // erros de validação
    watch, // observa valores dos campos
  } = useForm<FormValues>({
    resolver: zodResolver(schema), // usa zod para validação
  });

  // Função chamada ao submeter o formulário
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Cria datas para hoje e nascimento
    const today = new Date();
    const birthDate = new Date(data.year, data.month - 1, data.day);

    // Calcula diferença de anos, meses e dias
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Ajusta meses e anos se necessário
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Ajusta dias e meses se necessário
    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }

    // Atualiza estado com resultado
    setAge({ years, months, days });
  };

  // Observa valores dos campos para validação extra
  const dayValue = watch("day");
  const monthValue = watch("month");
  const yearValue = watch("year");

  // Validação extra para datas inválidas
  useEffect(() => {
    if (dayValue && monthValue && yearValue) {
      const inputDate = new Date(yearValue, monthValue - 1, dayValue);
      const isValid =
        inputDate.getFullYear() === yearValue &&
        inputDate.getMonth() === monthValue - 1 &&
        inputDate.getDate() === dayValue;
      if (!isValid) {
        // Validação extra se necessário
      }
    }
  }, [dayValue, monthValue, yearValue]);

  // Renderização do componente
  return (
    <div className="container">
      <div className="card">
        {/* Título removido para seguir o design do desafio */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="inputs">
            {/* Campo Dia */}
            <div className="input-group">
              <label htmlFor="day" className={errors.day ? "error-label" : ""}>
                DAY
              </label>
              <input
                id="day"
                type="number"
                placeholder="DD"
                {...register("day", { valueAsNumber: true })}
                className={errors.day ? "error-input" : ""}
                min={1}
                max={31}
              />
              {errors.day && <p className="error-msg">{errors.day.message}</p>}
            </div>
            {/* Campo Mês */}
            <div className="input-group">
              <label htmlFor="month" className={errors.month ? "error-label" : ""}>
                MONTH
              </label>
              <input
                id="month"
                type="number"
                placeholder="MM"
                {...register("month", { valueAsNumber: true })}
                className={errors.month ? "error-input" : ""}
                min={1}
                max={12}
              />
              {errors.month && <p className="error-msg">{errors.month.message}</p>}
            </div>
            {/* Campo Ano */}
            <div className="input-group">
              <label htmlFor="year" className={errors.year ? "error-label" : ""}>
                YEAR
              </label>
              <input
                id="year"
                type="number"
                placeholder="YYYY"
                {...register("year", { valueAsNumber: true })}
                className={errors.year ? "error-input" : ""}
                min={1900}
                max={new Date().getFullYear()}
              />
              {errors.year && <p className="error-msg">{errors.year.message}</p>}
            </div>
          </div>

          {/* Linha separadora e botão */}
          <div className="divider-btn-row">
            <hr className="divider" />
            <button type="submit" className="submit-btn" aria-label="Calcular idade">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" fill="none">
                <g>
                  <circle cx="23" cy="22" r="22" fill="#854dff" />
                  <path d="M23 14v16M14 23l9 9 9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
        </form>

        {/* Resultados destacados */}
        <div className="results">
          <p>
            <span className="result-number">{age.years !== null ? age.years : "--"}</span> years
          </p>
          <p>
            <span className="result-number">{age.months !== null ? age.months : "--"}</span> months
          </p>
          <p>
            <span className="result-number">{age.days !== null ? age.days : "--"}</span> days
          </p>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente principal
export default App;
