//llamados y validaciones 
import { getTask, addtarea, deleteTask } from "./conexion";

let agregar = document.getElementById("agregando")
let input = document.getElementById("tarea");
let container = document.getElementById("container")

visualizacion()

agregar.addEventListener("click",function(){
  

  if (agregar != "false" && input.value != ""){//porque hay un false aqui (es solo un ejemplo del profesor, no era necesario usarlo)
    console.log("AQUI VAMOS", input.value)
    addtarea(input.value)
    window.location.reload() 
  }else{

    alert ("agrege una tarea");

  }
})

async function visualizacion(){//funcion para vizualizar datos obtenidos de gettask en la pagina

  const data = await getTask()//el await es para esperar que se ejecute la funcion anterior

  for (let i = 0; i < data.length; i++) {//por cada item creado se crea una p
    console.log(data[i])

      let p =document.createElement("p")
      let div = document.createElement("div");
      let input = document.createElement("input");
      let trash = document.createElement("img");

     p.innerHTML=data[i].task

     div.id= "cuadros";
     input.type= "checkbox";
     input.id= "check";
     trash.id= "trash";
     trash.src = "http://127.0.0.1:5500/src/img/borrar.png"; //se inserto la src de la pagina wed

     container.appendChild(div);
     div.appendChild(input);
     div.appendChild(p);
     div.appendChild(trash);

     trash.addEventListener('click', function() {

      console.log("aqui",data[i].task) //aqui se visualiza en console el task que se esta eliminando al hacer click

      deleteTask(data[i].id); //se busco el id de cada dato para borrarlo
      
    });
  }
}

