"use strict";

// task 1
//  Дан элемент #elem
let elem = document.querySelector('#elem');
console.log('task 1 '+ elem.className);

// task 2
// Добавьте ему класс www
elem.classList.add('WWW');
console.log('task 2 '+elem.className);

// task 3
// Удалите у него класс www
elem.classList.remove('WWW');
console.log('task 3 '+elem.className);

// task 4
// Проверьте наличие у него класса www
console.log('task 4 '+elem.classList.contains('WWW'));

// task 5
// Добавьте ему класс www, если его нет и удалите - если есть.
elem.classList.toggle('WWW');
console.log('task 5 '+elem.className);

// task 6
// Узнайте количество его классов.
console.log('task 6 '+elem.classList.length);

// task 7
//  Выведите последовательно алертом его классы
for (const name of elem.classList) {
    alert(name);
};

// task 8
/* Дан элемент #elem.
 Сделайте его красного цвета, размером 30px, добавьте ему границу.  */

 task8.style.cssText = 'color:red; font-size: 30px; border: 2px solid gold;';

// task 9
//  По клику на него выведите название его тега.

task9.onclick = function() {
    alert(`Tag name ${document.getElementById('task9').tagName}`);
  };

  // task 10
//   По клику на него выведите название его тега в нижнем регистре.

task10.onclick = function() {
    alert(`Tag name ${document.getElementById('task10').tagName.toLowerCase()}`);
  };

  // task 11
  /* Даны элементы с классом www. 
  Добавьте каждому элементу в конец название его тега в нижнем регистре.
 */

for (const elem of document.getElementsByClassName('www')) {
    alert('task 11 ' +elem.tagName.toLowerCase());
    elem.classList.add(elem.tagName.toLowerCase());
  console.log('task 11 ' + elem.className);
};

// task 12
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

let olTest = document.querySelector('#ol-object');
let li = document.createElement('li');
li.innerHTML= 'пункт';
olTest.append(li);
console.log('task 12 ' + document.querySelector('#ol-object'));


// task 13
/* Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
 чтобы каждый элемент стоял в своем li.
 */

 let arr = [12, 22, 'one', 'two', 'three'];
let ulTest = document.querySelector('#task13');

for (let i = 0; i < arr.length; i++) {
 let li = document.createElement('li');
  li.innerHTML = arr[i];
  ulTest.append(li);
}
 

 // task 14
/* Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
 чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым
  li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.
 */

  let arr1 = [12, 22, 'one', 'two', 'three'];
let ulTest1 = document.querySelector('#task14');

for (let i = 0; i < arr1.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = arr1[i];
  li.addEventListener('click', function() {alert(this.innerHTML)});
  ulTest1.append(li);
}
 

 // task 15
// Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.

let ourli = document.createElement('li');
let parent = document.querySelector('#task15');
ourli.innerHTML = '!!!';
parent.insertBefore(ourli,elem15);

// task 16
// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

task16.insertAdjacentHTML('beforeBegin',"<span>'!!!'</span>");


// task 17
// Дан элемент #elem. Вставьте после него span с текстом '!!!'.

task17.insertAdjacentHTML('afterend', "<span>'!!!'</span>");


// task 18
// Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

task18.insertAdjacentHTML('afterbegin', "<span>'!!!'</span>");


// task 19
//  Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

task19.insertAdjacentHTML('beforeend', "<span>'!!!'</span>");


// task 20
// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета

task20.firstElementChild.style.cssText = "color : red";


// task 21
// Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

task21.lastElementChild.style.cssText = "color : red";


// task 22
// Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

let elems22 = task22.children;
for (const i of elems22) {
  i.insertAdjacentHTML('beforeEnd','!');
}


// task 23
// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

let prevSiblin = task23.previousElementSibling;
prevSiblin.insertAdjacentHTML('beforeend','!');


// task 24
//  Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.

let nextSiblin = task24.nextElementSibling;
nextSiblin.insertAdjacentHTML('beforeend','!');


// task 25
/* Дан элемент #elem. Найдите его соседа снизу его соседа снизу 
(следующий элемент за соседним) и добавьте ему в конец текст '!'. */

let nextAfterNext = task25.nextElementSibling.nextElementSibling;
nextAfterNext.insertAdjacentHTML('beforeend','!');

// task 26
// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

let parent26 = task26.parentElement;
parent26.style.cssText = "color : red";


// task 27
// Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

let parentParent = task27.parentElement.parentElement;
parentParent.style.cssText = "color : red";


// task 28
/* Дан элемент #parent, внутри него дан элемент #child.
 Дана кнопка. По нажатию на эту кнопку удалите элемент #child. */

 let parent28 = document.querySelector("#parent");
 let child28 = document.querySelector('#child');
 let butt28 = document.querySelector('#button1');

 butt28.addEventListener('click', function () {
  parent28.removeChild(child28);
 });


 // task 29
//  Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

let ourOl29 = document.querySelector('#parent29');
let butt29 = document.querySelector('#button29');

butt29.addEventListener('click', function (){
    ourOl29.removeChild(ourOl29.lastElementChild)});


    // task 30
// Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

let ourElem30 = document.querySelector('#child30');
ourElem30.addEventListener('click', function (){ourElem30.parentElement.removeChild(ourElem30)});


// task 31
// Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

let ourOl31 = document.querySelector('#parent31');
let ourLis31 = ourOl31.children;
for (const i of ourLis31) {
  i.addEventListener('click', function (){i.parentElement.removeChild(i)});
};


// task 32
// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let ourInput32 = document.querySelector('#input');
let ourBut32 = document.querySelector('#button32');
 ourBut32.addEventListener('click', function () {
   let clone32 = ourInput32.cloneNode(true);
   ourInput32.parentElement.appendChild(clone32);
 });

// task 33
/* Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого
 массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
 */

 let ourArr33 = [12,22,23,'aa', 'bb', 'ccc', 'dddd', 'iiiii'];
 let ourUl33 = document.createElement('ul');
 for (let i = 0; i < ourArr33.length; i++) {
   let li = document.createElement('li');
   li.innerHTML = ourArr33[i];
   ourUl33.appendChild(li);
 };
 task33.appendChild(ourUl33);


 // task 34
/* Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку 
под нашим инпутом должен появится еще один пустой инпут.
 */

 let butPlus34 = document.querySelector('#button34');
 let ourInput34 = document.querySelector('#input34');
 butPlus34.addEventListener('click', function () {
    let newInput = document.createElement('input');
    p34.after(newInput);
   });


   // task 35
/*  Дан инпут. В него вводится число. По потери фокуса сделайте так,
 чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально
  не существует, они должны создаться в процессе работы скрипта. */

  let ourInput35 = document.getElementById('input35');
  ourInput35.addEventListener('blur', function() {
   let valueInputArr35 = ourInput35.value.split("");

   for (let i = valueInputArr35.length-1; i >= 0; i--) {
      let newInput = document.createElement('input');
      newInput.value = valueInputArr35[i];
      ourInput35.after(newInput);
      };
});


// task 36
// Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.

let ourBut36 = document.querySelector("#button36");
ourBut36.addEventListener('click', function () {
 //  ourBut.parentElement.style.visibility = "hidden";
   ourBut36.parentElement.style.display = 'none';
});


// task 37
// Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.

let ourBut37 = document.getElementById('button37');
ourBut37.addEventListener('click', function() {
   alert(document.getElementById('task37').clientTop);
});


// task 38
/*  Дан элемент #elem с границами. По нажатию на кнопку выведите 
его полную высоту с учетом границы и padding. */

let ourBut38 = document.getElementById('button38');
ourBut38.addEventListener('click', function() {
   alert(document.getElementById('task38').offsetHeight);
});


// task 39
/* Дан элемент #elem с границами. По нажатию на кнопку выведите его
 полную ширину без учета границы, но с padding */

let ourBut39 = document.getElementById('button39');
ourBut39.addEventListener('click', function() {
   alert(document.getElementById('task39').clientWidth);
});


// task 40
/* Дан элемент #elem с границами. По нажатию на кнопку выведите его
 полную высоту без учета границы, но с padding */

let ourBut40 = document.getElementById('button40');
ourBut40.addEventListener('click', function() {
   alert(document.getElementById('task40').clientHeight);
});


// task 41
// Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding

let ourBut41 = document.getElementById('button41');
ourBut41.addEventListener('click', function() {
  alert('width - ' + getComputedStyle(task41).width);
  alert('height - ' + getComputedStyle(task41).height);
});


// task 42
/* Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку
 выведите на сколько элемент прокручен сверху */

 let ourElem42 = document.querySelector('#task42'); 
 let ourBut42 = document.querySelector('#button42');
 ourBut42.addEventListener('click', function ()  {alert(ourElem42.scrollTop)});


 // task 43
/* Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку 
выведите на сколько элемент прокручен слева */

let ourElem43 = document.querySelector('#task43'); 
 let ourBut43 = document.querySelector('#button43');
 ourBut43.addEventListener('click', function ()  {alert(ourElem43.scrollLeft)});


 // task 44
/* Дан элемент #elem с вертикальной полосой прокрутки. 
По нажатию на кнопку прокрутите его до позиции 100px сверху */

let ourElem44 = document.querySelector('#task44'); 
 let ourBut44 = document.querySelector('#button44');
 ourBut44.addEventListener('click', function ()  {ourElem44.scrollTop = 100});


 // task 45
 /* Дан элемент #elem с вертикальной полосой прокрутки. 
 По нажатию на кнопку прокрутите его на 100px вниз от текущего положения. */

 let ourElem45 = document.querySelector('#task45'); 
 let ourBut45 = document.querySelector('#button45');
 ourBut45.addEventListener('click', function ()  {ourElem45.scrollTop += 100});


 // task 46
 /*  Дан элемент #elem с вертикальной полосой прокрутки. По нажатию 
 на кнопку выведите реальную высоту элемента с учетом прокрутки */

 let ourElem46 = document.querySelector('#task46'); 
 let ourBut46 = document.querySelector('#button46');
 ourBut46.addEventListener('click', function ()  {alert(ourElem46.scrollHeight)});


 // task 47
 /* Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию 
 на кнопку выведите реальную ширину элемента с учетом прокрутки */

 let ourElem47 = document.querySelector('#task47'); 
 let ourBut47 = document.querySelector('#button47');
 ourBut47.addEventListener('click', function ()  {alert(ourElem47.scrollWidth)});


 // task 48
 /* Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на 
 кнопку прокрутите его до позиции 100px от нижнего края элемента */

 let ourElem48 = document.querySelector('#task48'); 
 let ourBut48 = document.querySelector('#button48');
 ourBut48.addEventListener('click', function ()  {ourElem48.scrollTop = ourElem48.scrollHeight - 100}); 


 // task 49
/* Дана страница с вертикальной полосой прокрутки. По нажатию 
на кнопку узнайте на сколько страница прокручена по вертикали. */

 let ourBut49 = document.querySelector('#button49');
 ourBut49.addEventListener('click', function ()  {alert(Math.round(window.pageYOffset))}); 


 // task 50
/* Дана страница с горизонтальной полосой прокрутки. По нажатию 
на кнопку узнайте на сколько страница прокручена по горизонтали */

 let ourBut50 = document.querySelector('#button50');
 ourBut50.addEventListener('click', function ()  {alert(Math.round(window.pageXOffset))}); 


 // task 51
 /*  Дана страница с горизонтальной и вертикальной полосами прокрутки. 
 По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху */

 let ourBut51 = document.querySelector('#button51');
 ourBut51.addEventListener('click', function ()  {window.scrollTo(300,500)});


 // task 52
/* Дана страница с вертикальной полосой прокрутки. По нажатию
 на кнопку прокрутите на 300px вниз от текущего положения */

let ourBut52 = document.querySelector('#button52');
 ourBut52.addEventListener('click', function ()  {window.scrollBy(0,300)});


 // task 53
//  По нажатию на кнопку прокрутите страницу до самого низа

let ourBut53 = document.querySelector('#button53');
let scrollHeight53 = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

 ourBut53.addEventListener('click', function ()  {window.scrollTo(0,scrollHeight53)});


 // task 54
// По нажатию на кнопку прокрутите страницу на 400px от текущего положения

let ourBut54 = document.querySelector('#button54');
 ourBut54.addEventListener('click', function ()  {window.scrollBy(0,400)});


 // task 55
/* По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
 Если это так - прокрутите ее в положение 100px от верхнего края */

  let ourBut55 = document.querySelector('#button55');
 ourBut55.addEventListener('click', function ()  {
     let ourPage55 = document.documentElement;
     if (ourPage55.scrollHeight - Math.round(ourPage55.scrollTop) == ourPage55.clientHeight)
     ourPage55.scrollTo(0,100);
    }); 


// task 56
// Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза

let ourBut56 = document.querySelector('#button56');
 ourBut56.addEventListener('click', function ()  {
     this.style.width = this.offsetWidth * 2 + 'px';
     this.style.height = this.offsetHeight * 2 + 'px';
 });


 // task 57
// Дана кнопка. По нажатию на у кнопку узнайте, есть ли у окна браузера вертикальная прокрутка. 

 let ourBut57 = document.querySelector('#button57');
 ourBut57.addEventListener('click', function ()  {
     alert('page scroll is - ' + Math.round(window.pageYOffset));
    }); 


// task 58
    /* Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.  */

let ourBut58 = document.querySelector('#button58');
ourBut58.addEventListener('click', function ()  {
     alert('page height without scroll is - ' + document.documentElement.clientHeight);
     alert('page height with scroll is - ' + window.innerHeight);
    }); 


 // task 59   
// Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа

let ourBut59 = document.querySelector('#button59');
ourBut59.addEventListener('click', function ()  {
         window.scrollBy(0, window.innerHeight);
    }); 


// task 60
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

