export function  ShowMenu(){
  const menuButton=document.querySelector('.menuButton')
  const menuMobile=document.querySelector('.menuMobileX')
  const xButton=document.querySelector('.xButton')
  const linkMobile=document.querySelector('.link')
  const footer=document.querySelector('.footer')
  
    console.log("oi"),
    xButton.classList.remove('hide')
    menuButton.classList.add('hide')
    menuMobile.classList.add('menuMobile')
    menuMobile.classList.remove('hide')
    menuMobile.classList.remove('menuMobileHide')
    linkMobile.classList.remove('hide')
    footer.classList.remove('hide')

   
  }
