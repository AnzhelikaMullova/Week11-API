fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        
        let container=document.querySelector(".container");
        json.forEach(element => {
            console.log(element.title)

            let div = document.createElement("div");// создаем элемент
            div.classList.add ="div-cards";// добавляем ему класс
            div.innerHTML=
            `<p> Заголовок : ${element.title}</p>
             <p> Статья : ${element.body}</p>
            `
            container.appendChild(div);
            
            
        })
        .catch((error)=>{
     let divError =document.querySelector("div");
     divError.innerHTML=`<p>Произошла ошибка</p>`
     container.appendChild(divError);

        })
    
    
    })
     
