/*DOM - DOCUMENT OBJECT MODEL */
const navMenu = document.querySelector('.navbar');
const hamburguer = document.querySelector('.hamburger');

/*CRIANDO A FUNÇÃO TOGGLE ELEMENTO QUE PERMITE ALTERNAR ESTADOS   */
function  toggleMenu(){
  /*ATIVANDO O HAMBURGUER */
  hamburguer.classList.toggle('show');
  /*ATIVANDO O MENU NAVMENU */
  navMenu.classList.toggle('show');
}

/*EVENTO DE CLICAR NAS BARRAS */
hamburguer.addEventListener('click', toggleMenu);

/*EVENTO QUE NAVEGA OS ITEMS DOS ELEMENTOS */
navMenu.addEventListener('click', (event)=>{
  if(event.target.classList.contains('item-menu')){
    /*CHAMANDO A FUNÇÃO  */
    toggleMenu();
}
});