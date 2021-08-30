
var btns = document.querySelectorAll("#book-list .delete");
console.log(btns);

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  });
});

//you have preventDefault method if you want to prevent the default action of an event or say default functionalities of any of the tags
//like example href tag has functionality to direct you to another site on clicking the link and same can be prevented with preventDefault() method

const link = document.querySelector("#page-banner");
//you have a href in page banner consider
link.addEventListener('click',function(e){
  e.preventDefault();

});
