import { useState, useEffect }  from "react";
import { Container} from './style';
import { Input } from '../Input';
import { Logo,MenuSVG,OrderSVG,Logout } from '../../Assets/Icons/icons'
import { SlMagnifier } from 'react-icons/sl';
import { ShowMenu } from './script'
import { MenuMobile } from '../../Components/MenuMobile'
import { Link,useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

export function Header(props){
  const { logOut } = useAuth();
  const { user } = useAuth();
  const { access } = user;
  const [ alo, setAlo]=useState('');
  const navigate = useNavigate();


  async function handleLogOut(){
    await logOut();
    navigate("/");
  }

  function SearchBarMobile(r){
    setAlo(r)
  }

  useEffect(() => {
   
 props.handleSearch(alo)
  },[alo]);

  if(access === '1'){
    return(
      <Container>
        <nav>
          <ul>
            <li className='menu'>
              <button className='menuButton' onClick={ShowMenu}><MenuSVG/></button>
            </li>
            <li className='logo'>
              <Logo/>
              <div>
              <span>food explorer</span>
              <span className='adminLogo'>admin</span>
              </div>
            </li>
            <li className='hide search'>
              <Input icon={SlMagnifier}  placeholder='Busque por pratos ou ingredientes' onChange={e => setAlo(e.target.value)}/>
            </li>
            <li className='newMeal hide'>
              <button>
              <Link to='/Adicionar'><span className='hide'>Novo prato</span></Link>  
              </button>
           </li>
            <li className='hide'>
              <button onClick={handleLogOut}>
              <Logout/>
              </button>
            </li>
          </ul>
          <MenuMobile handleSearchMobile={SearchBarMobile}/>
        </nav>
      </Container>
        )

  }else{
return(
<Container>
  <nav>
    <ul>
      <li className='menu'>
        <button className='menuButton' onClick={ShowMenu}><MenuSVG/></button>
      </li>
      <li className='logo'>
        <Logo/>
        <span>food explorer</span>
      </li>
      <li className='hide search'>
        <Input icon={SlMagnifier}  placeholder='Busque por pratos ou ingredientes' onChange={e => setAlo(e.target.value)}/>
      </li>
      <li className='order'>
        <button>
          <OrderSVG/>
          <span className='hide'>Pedidos (0)</span>
          <span>0</span>
        </button>
      </li>
      <li className='hide'>
        <button onClick={handleLogOut}>
        <Logout/>
        </button>
      </li>
    </ul>
    <MenuMobile handleSearchMobile={SearchBarMobile}/>
  </nav>
</Container>
  )

}
}
