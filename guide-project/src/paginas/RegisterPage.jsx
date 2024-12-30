import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const RegisterPage = () => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/usuario', { nome, email, senha });
      alert('Cadastro realizado com sucesso!');
      navigate('/'); // Redireciona para o login
    } catch (error) {
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <div className="register-page">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <div className="field">
          <label>Nome</label>
          <InputText value={nome} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
        </div>
        <div className="field">
          <label>Email</label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
        </div>
        <div className="field">
          <label>Senha</label>
          <Password value={senha} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
        </div>
        <Button label="Cadastrar" type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;