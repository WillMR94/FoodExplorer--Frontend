  export function  HideMenu(){
    const menuButton=document.querySelector('.menuButton')
    const xButton=document.querySelector('.xButton')
    const menuMobile=document.querySelector('.menuMobileX')
    const linkMobile=document.querySelector('.link')
    const footer=document.querySelector('.footer')

    
      xButton.classList.add('hide')
      menuButton.classList.remove('hide')
      menuMobile.classList.remove('menuMobile')
      menuMobile.classList.add('menuMobileHide')
      linkMobile.classList.add('hide')
      footer.classList.add('hide')
    }
  
