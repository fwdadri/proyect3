async function getTask() { //fetch principal
  try { 
   const response = await fetch( "http://localhost:3000/api/task");//aqui esta llamando al local host?
   const data = await response.json(); //esta volviendo el localhost en un jaseon?
   console.log(data);
  
  } catch (error) { 
   console.log(error);//que tipo de error atrapa
  }
}

  //getTask()

const asyncPostCall = async () => {//que hace el async?
  try {
   const response = await fetch("http://localhost:3000/api/task", {
     method: 'POST',//esta mostrando?
     headers: {// y esto que?
     'Content-Type': 'application/json'
    },

    body: JSON.stringify({// y esto que ?
             
     title: "My post title",
     body: "My post content."
   })
  });

  const data = await response.json();            
  console.log(data);

  } catch(error) {
             
   console.log(error)
  } 
}

//asyncPostCall();

const linkData = "http://localhost:3000/api/task";





let tarea = document.getElementById('tarea');
let agregando = document.getElementById('agregando');
let container = document.getElementById("container");


  agregando.addEventListener("click",function () {

    if (tarea.value != "") {
      
      let p= document.createElement("p")
      let boton = document.createElement('button');
      let div = document.createElement("div");
      let input = document.createElement("input");

      p.innerHTML=tarea.value;

      div.id= "cuadros";
      boton.id= "btn";
      boton.textContent = "ELIMINAR";
      input.type= "checkbox";
      input.id= "check";

      container.appendChild(div);
      div.appendChild(input);
      div.appendChild(boton);
      div.appendChild(p);
      

      

    }else{

      alert ('Escriba una Tarea');

    }   
} );




//var checkboxes = document.getElementById("conteiner").checkbox;

//  for (var x=0; x < checkboxes.length; x++) {
// if (checkboxes[x].checked) {
//  cont = cont + 1;


