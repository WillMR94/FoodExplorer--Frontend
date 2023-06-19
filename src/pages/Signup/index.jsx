import { useState } from "react";
import { Container,Form } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../Components/Input'
import { ButtonL } from '../../Components/ButtonL'
import { api } from "../../services/api"

export function Signup(){
  const access = '0'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(){
    if(!name || !email || !pass){
      return alert("Preencha todos os campos! ");
    };

    try{
      await api.post("/users", { name, email, pass, access });
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    }
    catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possivel efetuar o cadastro");}
    }
  }

  return(
    <Container>
      <div className="title"><svg viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </div>
      <Form>
        <h2 className="hide">Crie sua conta</h2>
        <div>
          <p>Seu nome</p>
          <Input placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
          />
        </div>
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
        <ButtonL text="Criar Conta" onClick={handleSignUp}/>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}