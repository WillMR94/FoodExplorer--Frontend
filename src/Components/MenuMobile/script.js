//--Script para esconder o menu p versão mobile--//
export function HideMenu(access){
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
  
