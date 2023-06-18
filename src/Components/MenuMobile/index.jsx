import { useState, useEffect }  from "react";
import { Container } from './style';
import { Input } from '../Input';
import { Link,useNavigate } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl';
import { XSVG } from '../../Assets/Icons/icons'
import { Footer } from '../../Components/Footer'
//import { HideMenu } from './script'
import { useAuth } from '../../hooks/auth'

export function MenuMobile(props){
  const { logOut } = useAuth();
  const { user } = useAuth();
  const { access } = user
  const [ seachMobilee, setSeachMobilee]=useState('');
  const navigate = useNavigate();

  function HideMenu(){
    const linkMobile=document.querySelector('.link');
    const menuButton=document.querySelector('.menuButton');
    const xButton=document.querySelector('.xButton');
    const menuMobile=document.querySelector('.menuMobileX');
    const footer=document.querySelector('.footer');
    if(access === '1'){
      linkMobile.classList.add('hide');
      xButton.classList.add('hide');
      menuButton.classList.remove('hide');
      menuMobile.classList.remove('menuMobile');
      menuMobile.classList.add('menuMobileHide');
      footer.classList.add('hide');
    }else{
      //linkMobile.classList.add('hide');
      xButton.classList.add('hide');
      menuButton.classList.remove('hide');
      menuMobile.classList.remove('menuMobile');
      menuMobile.classList.add('menuMobileHide');
      footer.classList.add('hide');
    }
  }

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
            <button className='xButton' onClick={HideMenu}><XSVG/></button>
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
            <button className='xButton' onClick={HideMenu}><XSVG/></button>
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