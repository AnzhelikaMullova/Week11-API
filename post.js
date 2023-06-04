
let inTitle = document.getElementById("inTitle").value;
let inBody = document.getElementById("inBody").value;
let button = document.getElementById("button");
function postCards(){
    
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
    
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => 
    { 



        button.addEventListener('click' , postCards() );
       
    })

}