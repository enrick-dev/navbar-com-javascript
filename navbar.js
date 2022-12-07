let navTitles = [
  'Home',
  'Faq',
  'Contato',
  'Dev',
]

let navEl = []

navTitles.forEach((el,ind) => {
    let newLi = document.createElement('li');
    let newTitle = document.createTextNode(el);
    newLi.appendChild(newTitle);

    navEl[ind] = newLi;

    var navAtual = document.getElementById("navbarUl");
    navAtual.appendChild(newLi);
    
})