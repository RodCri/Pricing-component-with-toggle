let toggle = document.querySelector('.toggle-checkbox');

const dataAnnually = [199.99, 249.99, 399.99];
const dataMonthly = [19.99, 24.99, 39.99];

let dataPrice = document.querySelectorAll('.card__price');
const arr = [...dataPrice]

toggle.addEventListener('change', ()=>{
  
  if(toggle.checked){  
    arr.forEach((element, index) =>{
      element.childNodes[1].data = dataMonthly[index]
    })
  }else{    
    arr.forEach((element, index) =>{
      element.childNodes[1].data = dataAnnually[index];
    })
  }
});