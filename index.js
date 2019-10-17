'use strict';
var targetElement;
let el1 = document.getElementById("product_1");
let el2 = document.getElementById("product_2");
let el3 = document.getElementById("product_3");
let el4 = document.getElementById("product_4");
//--
let cln1 = el1.cloneNode(true);
let cln2 = el2.cloneNode(true);
let cln3 = el3.cloneNode(true);
let cln4 = el4.cloneNode(true);
//--
var spanEl = [cln1.querySelector('span#product-1-count'),
cln2.querySelector('span#product-2-count'),
cln3.querySelector('span#product-3-count'),
cln4.querySelector('span#product-4-count')
];
//--
let counter = [0, 0, 0, 0];
//--
let budget = 100;

let priceProduct = [document.getElementsByClassName('product__price')[0].getAttribute('data-price'),
  document.getElementsByClassName('product__price')[1].getAttribute('data-price'),
document.getElementsByClassName('product__price')[2].getAttribute('data-price'),
document.getElementsByClassName('product__price')[3].getAttribute('data-price')
];

//--
let products = [document.querySelectorAll('div.product_1')[0],
document.querySelectorAll('div.product_2')[0],
document.querySelectorAll('div.product_3')[0],
document.querySelectorAll('div.product_4')[0]
];

let countOrder = [document.querySelectorAll('span#product-1-count')[0],
document.querySelectorAll('span#product-1-count')[1],
document.querySelectorAll('span#product-1-count')[2],
document.querySelectorAll('span#product-1-count')[3]
];

let currentBudget = budget;

currentBudget = document.getElementsByClassName('budget')[0];
currentBudget.innerHTML = budget;
/*
const products1 = document.getElementsByClassName('product'),
basketElement = document.getElementsByClassName('basket')[0],
basketContainerElement = document.getElementsByClassName('basket__products-container')[0],
progressBar = document.getElementsByClassName('basket__progress-bar')[0];
*/

let d = document.getElementById("basket");
                   el1.setAttribute('draggable', true);
                   el1.style.cursor = 'move';
                   el1.addEventListener(`dragstart`, ev => {
                   ev.dataTransfer.setData('text/plain', ev.target.id);
                   targetElement = ev.target;
              });
                   //--
                   el2.setAttribute('draggable', true);
                   el2.style.cursor = 'move';
                   el2.addEventListener(`dragstart`, ev => {
                   ev.dataTransfer.setData('text/plain', ev.target.id);
                   targetElement = ev.target;
                });
                   //--
                   el3.setAttribute('draggable', true);
                   el3.style.cursor = 'move';
                   el3.addEventListener(`dragstart`, ev => {
                   ev.dataTransfer.setData('text/plain', ev.target.id);
                   targetElement = ev.target;
                 });
                   //--
                   el4.setAttribute('draggable', true);
                   el4.style.cursor = 'move';
                   el4.addEventListener(`dragstart`, ev => {
                   ev.dataTransfer.setData('text/plain', ev.target.id);
                   targetElement = ev.target;
//см. в консоли DragEvent
          });

          d.addEventListener(`dragover`, ev => ev.preventDefault()); // позволить продолжить бросание
                d.addEventListener(`drop`, ev => {
                       //клонирование 1 - го товара
                       if(targetElement.outerHTML == products[0].outerHTML && budget >= 10){
                         cln1.removeAttribute('id');
                         counter[0] += 1;
                         if(counter[0] == 1) {
                           d.appendChild(cln1);
                         }
                         //--
                         budget -= priceProduct[0];
                         if(budget < 10){
                           el1.setAttribute('draggable', false);
                           currentBudget.innerHTML = budget;
                           spanEl[0].innerHTML = counter[0];
                         } else {
                           currentBudget.innerHTML = budget;
                           spanEl[0].innerHTML = counter[0];
                         }
                       } else
                         //клонирование 2 - го товара
                         if(targetElement.outerHTML == products[1].outerHTML && budget >= 5){
                           cln2.removeAttribute('id');
                           counter[1] += 1;
                           if(counter[1] == 1) {
                             d.appendChild(cln2);
                           }
                           budget -= priceProduct[1];
                           if(budget < 5){
                             el2.setAttribute('draggable', false);
                             currentBudget.innerHTML = budget;
                             spanEl[1].innerHTML = counter[1];
                           } else {
                             currentBudget.innerHTML = budget;
                             spanEl[1].innerHTML = counter[1];

                           }
                         } else
                      //клонирование 3 - го товара

                      if(targetElement.outerHTML == products[2].outerHTML && budget >= 50){
                        cln3.removeAttribute('id');
                        counter[2] += 1;
                        if(counter[2] == 1) {
                          d.appendChild(cln3);
                        }
                        budget -= priceProduct[2];
                        if(budget < 50){
                          el3.setAttribute('draggable', false);
                          currentBudget.innerHTML = budget;
                          spanEl[2].innerHTML = counter[2];
                        } else {
                          currentBudget.innerHTML = budget;
                          //currentBudget.innerHTML = budget;
                          spanEl[2].innerHTML=counter[2];
                        }
                      } else
                      //клонирование 4 - го товара
                      if(targetElement.outerHTML == products[3].outerHTML && budget >= 20) {
                        cln4.removeAttribute('id');
                        counter[3] += 1;
                        if(counter[3] == 1) {
                          d.appendChild(cln4);
                        }
                        budget -= priceProduct[3];
                        if(budget < 20){
                          el4.setAttribute('draggable', false);
                          currentBudget.innerHTML = budget;
                          spanEl[3].innerHTML = counter[3];
                        } else {
                          currentBudget.innerHTML = budget;
                          spanEl[3].innerHTML = counter[3];
                        }
                    } else if (budget < 5) {
                        el1.setAttribute('draggable', false);
                        el2.setAttribute('draggable', false);
                        el3.setAttribute('draggable', false);
                        el4.setAttribute('draggable', false);
                        cln1.setAttribute('draggable', false);
                        cln2.setAttribute('draggable', false);
                        cln3.setAttribute('draggable', false);
                        cln4.setAttribute('draggable', false);
                        document.querySelector('div#basket').style.background = "red"
                      }
                  });
