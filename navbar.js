let navTitles = [
  'Home',
  'Faq',
  'Contato',
  'Dev',
]

navTitles.forEach((el) => {
    let newUl = document.createElement('ul');
    let newLi = document.createElement('li');
    let newTitle = document.createTextNode(el);
    newLi.appendChild(newTitle);
    newUl.appendChild(newLi);

    var divAtual = document.getElementById("div1");
    document.body.insertBefore(newUl, divAtual);
})

// navTitles.forEach((el, ind) => {
//   document.body.onload = addEl;

//   function addEl() {
//     let newLi = []
//     newLi[ind] = document.createElement('li');
//     let newTitle = []
//     newTitle[ind] = document.createTextNode(el);
//     newLi[ind].appendChild(newTitle[ind]);

//     var divAtual = document.getElementById("div1");
//     document.body.insertBefore(newLi[ind], divAtual[ind]);
//   }
// })