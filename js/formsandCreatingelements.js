

const addbk = document.forms["add-book"];

addbk.addEventListener('submit',function(e){
  e.preventDefault();
  const val = addbk.querySelector('input[type="text"]').value;
  console.log(val);

  const list = document.querySelector('#book-list ul');

  //create elements to be added on click of add button

  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add textcontent to be appeared on button and deltebutton
  deleteBtn.textContent = 'delete';
  bookName.textContent = val;


  //add both the spans on li of item
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  //finally add all those to the list of items
  list.appendChild(li);
});