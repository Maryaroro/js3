let inp1 = document.querySelector('.inp1');

let inp2=document.querySelector('.inp2');

let button=document.querySelector('.btn');
button.addEventListener('click', function () {
    
    return(inp2.value=Number(inp1.value)**2);
   
  });
