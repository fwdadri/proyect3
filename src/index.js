//llamados y validaciones 
import { getTask,addtarea } from "./conexion";

let agregar = document.getElementById("agregando")
let input = document.getElementById("tarea");
let container = document.getElementById("container")

visualizacion()

agregar.addEventListener("click",function(){
  
  if (agregar != "false" && input.value != ""){//porque hay un false aqui?
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
  
     p.innerHTML=data[i].task

     container.appendChild(p)

  }
 
}

