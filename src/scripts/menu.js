export default () => {
  const navMenu = document.getElementById('menu-bar');
  navMenu.addEventListener('click', () => {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    const menuBackground = document.getElementById("menu-bg");
    menuBackground.style.display = !menuBackground.style.display || menuBackground.style.display === 'none' ? 'block' : 'none';
  }, {passive: true});
}
