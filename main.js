"use strict";


//  Дан элемент #elem
let elem = document.querySelector('#elem');
console.log(elem.className);

// // Добавьте ему класс www
// elem.classList.add('WWW');
// console.log(elem.className);

// // Удалите у него класс www
// elem.classList.remove('WWW');
// console.log(elem.className);

// // Проверьте наличие у него класса www
// console.log(elem.classList.contains('WWW'));

// // Добавьте ему класс www, если его нет и удалите - если есть.
// elem.classList.toggle('WWW');
// console.log(elem.className);

// // Узнайте количество его классов.
// console.log(elem.classList.length);

// //  Выведите последовательно алертом его классы
// for (const name of elem.classList) {
//     alert(name);
// };

// /* Дан элемент #elem.
//  Сделайте его красного цвета, размером 30px, добавьте ему границу.  */

//  elem.style.cssText = 'color:red; font-size: 30px; border: 2px solid gold;';

// //  По клику на него выведите название его тега.

// // elem.onclick = function() {
// //     alert(`Tag name ${document.getElementById('elem').tagName}`);
// //   };

// //   По клику на него выведите название его тега в нижнем регистре.

// elem.onclick = function() {
//     alert(`Tag name ${document.getElementById('elem').tagName.toLowerCase()}`);
//   };

//   /* Даны элементы с классом www. 
//   Добавьте каждому элементу в конец название его тега в нижнем регистре.
//  */

// for (const elem of document.getElementsByClassName('www')) {
//     alert(elem.tagName.toLowerCase());
//     elem.classList.add(elem.tagName.toLowerCase());
//   console.log(elem.className);
// };

// // Дан ol. Вставьте ему в конец li с текстом 'пункт'.

// let olTest = document.querySelector('#olObject');
// let li = document.createElement('li');
// li.innerHTML= 'пункт';
// olTest.append(li);
// console.log(document.querySelector('#olObject'));

// /* Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
//  чтобы каждый элемент стоял в своем li.
//  */

//  let arr = [12, 22, 'one', 'two', 'three'];
// let ulTest = document.querySelector('ul');

// for (let i = 0; i < arr.length; i++) {
//  let li = document.createElement('li');
//   li.innerHTML = arr[i];
//   ulTest.append(li);
// }
//  console.log(ulTest);

// /* Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
//  чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым
//   li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
//  */

//   let arr = [12, 22, 'one', 'two', 'three'];
// let ulTest = document.querySelector('ul');

// for (let i = 0; i < arr.length; i++) {
//   let li = document.createElement('li');
//   li.innerHTML = arr[i];
//   li.addEventListener('click', function() {alert(this.innerHTML)});
//   ulTest.append(li);
// }
//  console.log(ulTest);

// // Дан элемент ul, а в нем li #elem1. Вставьте перед элементом #elem1 новую li с текстом '!!!'.

// let li = document.createElement('li');
// let parent = document.querySelector('ul');
// li.innerHTML = '!!!';
// parent.insertBefore(li,elem1);

// // Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

// elem.insertAdjacentHTML('beforeBegin',"<span>'!!!'</span>");


// // Дан элемент #elem. Вставьте после него span с текстом '!!!'.

// elem.insertAdjacentHTML('afterend', "<span>'!!!'</span>");


// // Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

// elem.insertAdjacentHTML('afterbegin', "<span>'!!!'</span>");


// //  Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

// elem.insertAdjacentHTML('beforeend', "<span>'!!!'</span>");


// // Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета

// elem.firstElementChild.style.cssText = "color : red";


// // Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

// elem.lastElementChild.style.cssText = "color : red";


// // Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

// let elems = elem.children;
// for (const i of elems) {
//   i.insertAdjacentHTML('beforeEnd','!');
// }


// // Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

// let prevSiblin = elem.previousElementSibling;
// prevSiblin.insertAdjacentHTML('beforeend','!');


// //  Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.

// let nextSiblin = elem.nextElementSibling;
// nextSiblin.insertAdjacentHTML('beforeend','!');


// /* Дан элемент #elem. Найдите его соседа снизу его соседа снизу 
// (следующий элемент за соседним) и добавьте ему в конец текст '!'. */

// let nextAfterNext = elem.nextElementSibling.nextElementSibling;
// nextAfterNext.insertAdjacentHTML('beforeend','!');


// // Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

// let parent = elem1.parentElement;
// parent.style.cssText = "color : red";


// // Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

// let parentParent = elem1.parentElement.parentElement;
// parentParent.style.cssText = "color : red";


// /* Дан элемент #parent, внутри него дан элемент #child.
//  Дана кнопка. По нажатию на эту кнопку удалите элемент #child. */

//  let parent = document.querySelector("#parent");
//  let child = document.querySelector('#child');
//  let butt = document.querySelector('#button1');

//  butt.addEventListener('click', function () {
//   parent.removeChild(child);
//  });


// //  Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

// let ourOl = document.querySelector('#parent');
// let butt = document.querySelector('#button1');

// butt.addEventListener('click', function (){
//     ourOl.removeChild(ourOl.lastElementChild)});


// // Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

// let ourElem = document.querySelector('#child');
// ourElem.addEventListener('click', function (){ourElem.parentElement.removeChild(ourElem)});


// // Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

// let ourOl = document.querySelector('#parent');
// let ourLis = ourOl.children;
// for (const i of ourLis) {
//   i.addEventListener('click', function (){i.parentElement.removeChild(i)});
// };


// // Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

// let ourInput = document.querySelector('#input');
// let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function () {
//    let clone = ourInput.cloneNode(true);
//    ourInput.parentElement.appendChild(clone);
//  });


// /* Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого
//  массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
//  */

//  let ourArr = [12,22,23,'aa', 'bb', 'ccc', 'dddd', 'iiiii'];
//  let ourUl = document.createElement('ul');
//  for (let i = 0; i < ourArr.length; i++) {
//    let li = document.createElement('li');
//    li.innerHTML = ourArr[i];
//    ourUl.appendChild(li);
//  };
//  document.body.appendChild(ourUl);


// /* Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку 
// под нашим инпутом должен появится еще один пустой инпут.
//  */

//  let butPlus = document.querySelector('#buttonPlus');
//  let ourInput = document.querySelector('#input');
//  butPlus.addEventListener('click', function () {
//     let newInput = document.createElement('input');
//     pInput.after(newInput);
//    });


// /*  Дан инпут. В него вводится число. По потери фокуса сделайте так,
//  чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально
//   не существует, они должны создаться в процессе работы скрипта. */

//   let ourInput = document.getElementById('numInput');
//   ourInput.addEventListener('blur', function() {
//    let valueInputArr = ourInput.value.split("");

//    for (let i = valueInputArr.length-1; i >= 0; i--) {
//       let newInput = document.createElement('input');
//       newInput.value = valueInputArr[i];
//       ourInput.after(newInput);
//       };
// });


// // Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.

// let ourBut = document.querySelector("#button1");
// ourBut.addEventListener('click', function () {
//  //  ourBut.parentElement.style.visibility = "hidden";
//    ourBut.parentElement.hidden = true;
// });


// // Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.

// let ourBut = document.getElementById('button1');
// ourBut.addEventListener('click', function() {
//    console.log(document.getElementById('numInput').clientTop);
// });


// /*  Дан элемент #elem с границами. По нажатию на кнопку выведите 
// его полную высоту с учетом границы и padding. */

// let ourBut = document.getElementById('button1');
// ourBut.addEventListener('click', function() {
//    console.log(document.getElementById('numInput').offsetHeight);
// });


// /* Дан элемент #elem с границами. По нажатию на кнопку выведите его
//  полную ширину без учета границы, но с padding */

// let ourBut = document.getElementById('button1');
// ourBut.addEventListener('click', function() {
//    console.log(document.getElementById('numInput').clientWidth);
// });


// /* Дан элемент #elem с границами. По нажатию на кнопку выведите его
//  полную высоту без учета границы, но с padding */

// let ourBut = document.getElementById('button1');
// ourBut.addEventListener('click', function() {
//    console.log(document.getElementById('numInput').clientHeight);
// });


// // Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding

// let ourElem = document.getElementById('numInput');
// console.log('width - ' + getComputedStyle(ourElem).width);
// console.log('height - ' + getComputedStyle(ourElem).height);


// /* Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку
//  выведите на сколько элемент прокручен сверху */

//  let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(ourElem.scrollTop)});


// /* Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку 
// выведите на сколько элемент прокручен слева */

// let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(ourElem.scrollLeft)});


// /* Дан элемент #elem с вертикальной полосой прокрутки. 
// По нажатию на кнопку прокрутите его до позиции 100px сверху */

// let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {ourElem.scrollTop = 100});


//  /* Дан элемент #elem с вертикальной полосой прокрутки. 
//  По нажатию на кнопку прокрутите его на 100px вниз от текущего положения. */

//  let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {ourElem.scrollTop += 100});


//  /*  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию 
//  на кнопку выведите реальную высоту элемента с учетом прокрутки */

//  let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(ourElem.scrollHeight)});


//  /* Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию 
//  на кнопку выведите реальную ширину элемента с учетом прокрутки */

//  let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(ourElem.scrollWidth)});


//  /* Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на 
//  кнопку прокрутите его до позиции 100px от нижнего края элемента */

//  let ourElem = document.querySelector('#longDiv'); // надо раскомитить longDiv в HTML
//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {ourElem.scrollTop = ourElem.scrollHeight - 100}); 


// /* Дана страница с вертикальной полосой прокрутки. По нажатию 
// на кнопку узнайте на сколько страница прокручена по вертикали. */

//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(window.pageYOffset)}); 


// /* Дана страница с горизонтальной полосой прокрутки. По нажатию 
// на кнопку узнайте на сколько страница прокручена по горизонтали */

//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {console.log(window.pageXOffset)}); 


//  /*  Дана страница с горизонтальной и вертикальной полосами прокрутки. 
//  По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху */

//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {window.scrollTo(300,500)});


// /* Дана страница с вертикальной полосой прокрутки. По нажатию
//  на кнопку прокрутите на 300px вниз от текущего положения */

// let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {window.scrollBy(0,300)});


// //  По нажатию на кнопку прокрутите страницу до самого низа

// let ourBut = document.querySelector('#button1');
// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );

//  ourBut.addEventListener('click', function ()  {window.scrollTo(0,scrollHeight)});


// // По нажатию на кнопку прокрутите страницу на 400px от текущего положения

// let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {window.scrollBy(0,400)});


// /* По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
//  Если это так - прокрутите ее в положение 100px от верхнего края */

//   let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {
//      let ourPage = document.documentElement;
//      if (ourPage.scrollHeight - Math.round(ourPage.scrollTop) == ourPage.clientHeight)
//      ourPage.scrollTo(0,100);
//     }); 


// // Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза

// let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {
//      this.style.width = this.offsetWidth * 2 + 'px';
//      this.style.height = this.offsetHeight * 2 + 'px';
//  });


// // Дана кнопка. По нажатию на у кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. 

//  let ourBut = document.querySelector('#button1');
//  ourBut.addEventListener('click', function ()  {
//      console.log('page scroll is - ' + Math.round(window.pageYOffset));
//     }); 


//     /* Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.  */

// let ourBut = document.querySelector('#button1');
// ourBut.addEventListener('click', function ()  {
//      console.log('page height without scroll is - ' + document.documentElement.clientHeight);
//      console.log('page height with scroll is - ' + window.innerHeight);
//     }); 


// // Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа

// let ourBut = document.querySelector('#button1');
// ourBut.addEventListener('click', function ()  {
//          window.scrollBy(0, window.innerHeight);
//     }); 


/* Реализуйте функцию prettify, которая находит текст 
(дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф */

/* это задание не получилось, но и в оригинале тоже не пправильно работает так как если в див есть
ещё что то то всё пропадает а остаётся только то что было текстом */

// window.prettify = function (doc) {
//     let treeWalker = document.createTreeWalker(doc,4);
//     let elemArr = [];
//     let valueArr = [];
//     while (treeWalker.nextNode()) {
//         let parentElem = treeWalker.currentNode.parentNode;
//         let valueElem = treeWalker.currentNode.nodeValue.trim();
//         if (parentElem.tagName === 'DIV' && valueElem !== "") {
//             elemArr.push(parentElem);
//             valueArr.push(valueElem);
//         }
//     }
//     for (let i = 0; i < elemArr.length; i++) {
//         elemArr[i].innerHTML = '<p>' + valueArr + '</p>';
        
//     }
// }

// const elements = prettify(document.body);
// console.log(document.body.innerHTML);


/* Реализуйте функцию normalize, которая нормализует имена классов
 для всех элементов на странице. В данном случае это означает что происходит
  преобразование всех классов написанных используя kebab нотацию в camelCase
   нотацию: text-center => textCenter
 */
