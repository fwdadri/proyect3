//llamados y validaciones 
import { getTask, addtarea, deleteTask, UpdateCheck} from "./conexion";

let agregar = document.getElementById("agregando")
let input = document.getElementById("tarea");
let container = document.getElementById("container")
let contador= 0;



visualizacion()

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (agregar != "false" && input.value != ""){//porque hay un false aqui (es solo un ejemplo del profesor, no era necesario usarlo)

      console.log("AQUI VAMOS", input.value);
  
      addtarea(input.value);
  
      location.reload()// se remplazo el window.location.reload() con visualizcion para visualizar o lo subido
  
    }else{
  
      alert ("agrege una tarea");
  
    }
  }
})

agregar.addEventListener("click",function(){

  if (agregar != "false" && input.value != ""){//porque hay un false aqui (es solo un ejemplo del profesor, no era necesario usarlo)

    console.log("AQUI VAMOS", input.value);

    addtarea(input.value);

    location.reload()

  }else{

    alert ("agrege una tarea");

  }
});


async function visualizacion(){//funcion para vizualizar datos obtenidos de gettask en la pagina

  const data = await getTask()//el await es para esperar que se ejecute la funcion anterior

  if (data.length===0 ){
    
    let p =document.createElement("p");
    p.id ="nothing" 
    p.innerHTML= "No existen tareas" ;
    container.appendChild(p); //se inserto la p anterior// div conteiner ya esta definido en html

  } else {
    
  for (let i = 0; i < data.length; i++) {//por cada item creado se crea una p
    
    let p =document.createElement("p")
    let div = document.createElement("div");
    let input = document.createElement("input");
    let trash = document.createElement("img");
    let cantidad = document.getElementById("contador");

    p.innerHTML=data[i].task

    div.id= "cuadros";
    input.type= "checkbox";
    input.id= "check";
    trash.id= "trash";
    trash.src = "http://localhost:1234/borrar.34139a88.png"; //se inserto la src de la pagina wed
    p.id= "list";

    container.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    div.appendChild(trash);

    input.addEventListener('click', function() {//atributo checked

      if (input.checked) {// el input checked ya es un boleano verdadero

       contador++;

       console.log ("tarea hecha")
       cantidad.innerHTML = contador;

       console.log(data[i].id)

       UpdateCheck(data[i].id,"completo"); // entre estos parentesis esta los dosparametros de UpdateCheck (id,estadoCheck) separados por una coma

      }else if (input.checked==false){ 
             
        UpdateCheck(data[i].id,"Incompleto"); // entre estos parentesis esta los dosparametros de UpdateCheck (id,estadoCheck) separados por una coma
        contador--;
        cantidad.innerHTML = contador;//no se mostraba la resta porue cantaba insertar la cantiadad den ek html

      } 
   })
          
    trash.addEventListener('click', function() {

     console.log("eliminando",data[i].task) //aqui se visualiza en console el task que se esta eliminando al hacer click
 
      deleteTask(data[i].id); //se busco el id de cada dato para borrarlo

      window.location.reload() 

    });
}
}
};

