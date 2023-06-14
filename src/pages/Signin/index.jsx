import { useState,useEffect } from "react";
import { Container,Form } from "./style";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { Input } from '../../Components/Input'
import { ButtonL } from '../../Components/ButtonL'
import { useAuth } from "../../hooks/auth"

export function Signin(){
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { signIn } = useAuth();

  function handleSignIn(){
   signIn({email,pass})
  };


  return(
    <Container>
        <div className="title"><svg viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
        </div>
    <Form>
      <h2 className="hide">Faça Login</h2>
      <div>
      <p>Email</p>
      <Input placeholder="Exemplo: exemplo@exemplo.com.br"
      onChange={e => setEmail(e.target.value)}/>
      </div>
      <div>
      <p>Senha</p>
      <Input type="password" placeholder="No mínimo 6 caracteres"
      onChange={e => setPass(e.target.value)}/>
      </div>
      <ButtonL text="Entrar"
      onClick={handleSignIn}/>
      
      <Link to="/register">Criar uma conta</Link>
    </Form>

    </Container>

  );
}