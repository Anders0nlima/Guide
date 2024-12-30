import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/usuario/login', { email, senha });
      alert('Login realizado com sucesso!');
      localStorage.setItem('token', response.data.token); // Salva o token no localStorage
      navigate('/entrada'); // Redireciona para a home
    } catch (error) {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="field">
          <label>Email</label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
        </div>
        <div className="field">
          <label>Senha</label>
          <Password value={senha} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
        </div>
        <Button label="Entrar" type="submit" />
      </form>
      <p>Não tem uma conta? <Link to="/registrar">Cadastre-se</Link></p>
    </div>
  );
};

export default LoginPage;
