const container = document.querySelector('.preloader');

window.addEventListener('load' , () =>{
    setTimeout( () => document.querySelector('.preloader').classList.add('hide-preloader'), 2.5*1000);
  })