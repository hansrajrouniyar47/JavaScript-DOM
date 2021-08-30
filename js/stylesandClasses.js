
const addbk = document.forms["add-book"];

addbk.addEventListener('submit',function(e){
  e.preventDefault();
  const val = addbk.querySelector('input[type="text"]').value;
  console.log(val);

  const list = document.querySelector('#book-list ul');
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = 'delete';
  bookName.textContent = val;


///////////////////////////////////////////
  //adding styles classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
 ///////////////////////////////////////


 
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});