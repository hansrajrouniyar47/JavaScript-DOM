
const list = document.querySelector('#book-list ul');
const hidebox = document.querySelector('#hide');

hidebox.addEventListener('change',function(e){
  if(hidebox.checked){
    list.style.display = "none";
  }
  else{
    list.style.display = "initial";
  }
});