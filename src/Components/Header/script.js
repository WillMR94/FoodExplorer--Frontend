//--Script para mostrar o menu p versão mobile--//
export function ShowMenuAdmin(){

  const linkMobile=document.querySelector('.link');
  const menuButton=document.querySelector('.menuButton');
  const xButton=document.querySelector('.xButton');
  const menuMobile=document.querySelector('.menuMobileX');
  const footer=document.querySelector('.footer');
    linkMobile.classList.remove('hide');
    xButton.classList.remove('hide');
    menuButton.classList.add('hide');
    menuMobile.classList.add('menuMobile');
    menuMobile.classList.remove('hide');
    menuMobile.classList.remove('menuMobileHide');
    footer.classList.remove('hide');
};

export function ShowMenuUser(){
  //const linkMobile=document.querySelector('.link');
  const menuButton=document.querySelector('.menuButton');
  const xButton=document.querySelector('.xButton');
  const menuMobile=document.querySelector('.menuMobileX');
  const footer=document.querySelector('.footer');
   // linkMobile.classList.remove('hide');
    xButton.classList.remove('hide');
    menuButton.classList.add('hide');
    menuMobile.classList.add('menuMobile');
    menuMobile.classList.remove('hide');
    menuMobile.classList.remove('menuMobileHide');
    footer.classList.remove('hide');
}
