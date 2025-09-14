// App principal da Calculadora de Idade
import React, { useState, useEffect } from "react";
// Importa hooks do react-hook-form e o schema de validação
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormValues } from "./validation";
import "./App.css";
import { NavLink } from "react-router-dom";
import FormComponent from "./components/FormComponent";

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
      <nav className="nav">
        <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} end>
          Birth
        </NavLink>
        <NavLink to="/event" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
          Event
        </NavLink>
      </nav>
      <div className="card">
        <FormComponent mode="birth" />
      </div>
    </div>
  );
};

// Exporta o componente principal
export default App;
