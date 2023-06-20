//--Script para esconder o menu p versão mobile--//
export function HideMenuAdmin(){
  const linkMobile=document.querySelector('.link');
  const menuButton=document.querySelector('.menuButton');
  const xButton=document.querySelector('.xButton');
  const menuMobile=document.querySelector('.menuMobileX');
  const footer=document.querySelector('.footer');
    linkMobile.classList.add('hide');
    xButton.classList.add('hide');
    menuButton.classList.remove('hide');
    menuMobile.classList.remove('menuMobile');
    menuMobile.classList.add('menuMobileHide');
    footer.classList.add('hide');
}

export function HideMenuUser(){
 // const linkMobile=document.querySelector('.link');
  const menuButton=document.querySelector('.menuButton');
  const xButton=document.querySelector('.xButton');
  const menuMobile=document.querySelector('.menuMobileX');
  const footer=document.querySelector('.footer');
    //linkMobile.classList.add('hide');
    xButton.classList.add('hide');
    menuButton.classList.remove('hide');
    menuMobile.classList.remove('menuMobile');
    menuMobile.classList.add('menuMobileHide');
    footer.classList.add('hide');
}
  
