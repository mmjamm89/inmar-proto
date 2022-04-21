const menu = () => { 

    const menuBtn = document.querySelector('.menu_btn');
    const navUl = document.querySelector('.nav_links')
  
    let menuOpen = false;
  
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open');
        navUl.classList.toggle('show');
        menuOpen = true;
      }else{
        menuBtn.classList.remove('open');
        navUl.classList.toggle('show');
        menuOpen = false;
      }
    }
  )}

  menu();