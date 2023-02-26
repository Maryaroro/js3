let price1= document.querySelector('.price1');
let price2 =document.querySelector('.price2');
let price3 =document.querySelector('.price3');
let price4 =document.querySelector('.price4');

let total= Number(price1.textContent)+Number(price2.textContent)+Number(price3.textContent)+Number(price4.textContent);
let sum=document.querySelector('.sum')
sum.textContent=total;

let button=document.querySelector('.button')
button.addEventListener('click', function () {
let total2=(Number(total)*Number(0.8));
sum.textContent=total2;
price1.textContent=(Number(price1.textContent)*0.8); 
price2.textContent=(Number(price2.textContent)*0.8); 
price3.textContent=(Number(price3.textContent)*0.8); 
price4.textContent=(Number(price4.textContent)*0.8); 
  }, {once: true});
