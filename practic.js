let inp1 = document.querySelector('.inp1').value;

let inp2=document.querySelector('.inp2');

let button=document.querySelector('.btn');
button.addEventListener('click', function () {
    
    inp2.value=Number(inp1)*Number(inp1);
   
  });
