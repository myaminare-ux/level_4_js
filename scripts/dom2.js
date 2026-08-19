/* dom2.js */
const m_menu = document.querySelector('.m_menu nav');
const d_menu = document.querySelector('.d_menu');

console.log(m_menu, d_menu);
const cloneMenu = m_menu.cloneNode(true);
console.log(`복제대상확인 : ${cloneMenu}`);
console.log(cloneMenu);

d_menu.appendChild(cloneMenu);