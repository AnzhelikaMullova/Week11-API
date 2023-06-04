let button = document.getElementById("button");
let post = document.getElementById("post");


function postCards(){  // пишем функцию для создания постов
let inTitle = document.getElementById("inTitle").value; //  Находим первый инпут и его значение
let inBody = document.getElementById("inBody").value; // Находим второй инпут и его значени



if(inTitle!=="" || inBody !==""){ // если хотя бы один инпут не пустой, то пост публикуется

  let divPost =document.createElement("div");// создаем див и у него разметку
  divPost.innerHTML=
  `
  <p> Заголовок : ${inTitle}</p>
       <p> Статья : ${inBody}</p>
  `
  post.appendChild(divPost);


}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: inTitle,
      body: inBody,
    
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => 
    {  

   
  console.log(json);
       
    })

}
button.addEventListener('click' ,postCards);