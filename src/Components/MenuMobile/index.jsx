import { useState, useEffect }  from "react";
import { Container } from './style';
import { Input } from '../Input';
import { Link,useNavigate } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl';
import { XSVG } from '../../Assets/Icons/icons'
import { Footer } from '../../Components/Footer'
import { HideMenuAdmin,HideMenuUser } from './script'
import { useAuth } from '../../hooks/auth'

export function MenuMobile(props){
  const { logOut } = useAuth();
  const { user } = useAuth();
  const { access } = user
  const [ seachMobilee, setSeachMobilee]=useState('');
  const navigate = useNavigate();

  async function handleLogOut(){
    await logOut();
    navigate("/");
  }

  useEffect(() => {
      props.handleSearchMobile(seachMobilee)
  },[seachMobilee]);

  if(access === '1'){
    return(
      <Container>
        <div className='menuMobileX hide'>
          <div>
            <button className='xButton' onClick={HideMenuAdmin}><XSVG/></button>
            <span>Menu</span>
          </div>
          <div>
            <Input icon={SlMagnifier}  placeholder='Busque por pratos ou ingredientes' onChange={e => setSeachMobilee(e.target.value)}/>
            <div className='content'>
              <Link to='/Adicionar' className='link'>Novo prato</Link>
              <button onClick={handleLogOut}>Sair</button>
            </div>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
      </Container>
    )
  }else{

    return(
      <Container>
        <div className='menuMobileX hide'>
          <div>
            <button className='xButton' onClick={HideMenuUser}><XSVG/></button>
            <span>Menu</span>
          </div>
          <div>
            <Input icon={SlMagnifier}  placeholder='Busque por pratos ou ingredientes' onChange={e => setSeachMobilee(e.target.value)}/>
            <button onClick={handleLogOut}>Sair</button>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
      </Container>
  
    )
  }
}