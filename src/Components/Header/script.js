//--Script para mostrar o menu p versão mobile--//
export function ShowMenu(access){

  const linkMobile=document.querySelector('.link');
  const menuButton=document.querySelector('.menuButton');
  const xButton=document.querySelector('.xButton');
  const menuMobile=document.querySelector('.menuMobileX');
  const footer=document.querySelector('.footer');
  if(access === '1'){
    linkMobile.classList.remove('hide');
    xButton.classList.remove('hide');
    menuButton.classList.add('hide');
    menuMobile.classList.add('menuMobile');
    menuMobile.classList.remove('hide');
    menuMobile.classList.remove('menuMobileHide');
    footer.classList.remove('hide');
  }else{
    //linkMobile.classList.remove('hide');
    xButton.classList.remove('hide');
    menuButton.classList.add('hide');
    menuMobile.classList.add('menuMobile');
    menuMobile.classList.remove('hide');
    menuMobile.classList.remove('menuMobileHide');
    footer.classList.remove('hide');
  }  
}
