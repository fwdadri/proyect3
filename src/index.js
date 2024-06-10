//llamados
import { getTask, addtarea, deleteTask, UpdateCheck} from "./conexion";//siempre hay que indicar de donde se importan

//validaciones 
let agregar = document.getElementById("agregando")
let input = document.getElementById("tarea");
let container = document.getElementById("container")
let texto = document.getElementById("contador")
let contador= 0;


//el codigo s lee d arriba para abajo, por esa razon se llamo a la funcionn vizualizar aqui arriba
visualizacion()


//------------------ENTER-------------------------------------------------------------------------------------------

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

//--------------------BOTON AGREGAR-------------------------------------------------------------------------------

agregar.addEventListener("click",function(){

  if (agregar != "false" && input.value != ""){//porque hay un false aqui (es solo un ejemplo del profesor, no era necesario usarlo)

    console.log("AQUI VAMOS", input.value);

    addtarea(input.value);

    location.reload()

  }else{

    alert ("agrege una tarea");

  }
});

//------------------VISUALIZAR CONTENIDO------------------------------------------------------------------------------

async function visualizacion(){//funcion para vizualizar datos obtenidos de gettask en la pagina

  const data = await getTask()//el await es para esperar que se ejecute la funcion anterior

  if (data.length === 0 ){// si los dato son 0 muetra e inserta un parrafo en la hoja html
    
    let p =document.createElement("p");
    p.id ="nothing" 
    p.innerHTML= "No existen tareas" ;
    container.appendChild(p); //se inserto la p anterior// div conteiner ya esta definido en html

  } 
    
  for (let i = 0; i < data.length; i++) {//por cada dao agregado al local host se crea una etiqueta
    
    let p =document.createElement("p")
    let div = document.createElement("div");
    let input = document.createElement("input");//se refiere al checkbox
    let trash = document.createElement("img");
    let cantidad = document.getElementById("contador");//cantidad == a contador

    p.innerHTML=data[i].task

    div.id= "cuadros";
    input.type= "checkbox";//aqui estamos indicndo que el input es un checkbox
    input.id= "check";
    trash.id= "trash";
    trash.src = "http://localhost:1234/borrar.34139a88.png"; //se inserto la src de la pagina wed
    p.id= "list";

    container.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    div.appendChild(trash);

    if (data[i].estado == "completo") {// funcion para mantener los checkbox marcados que se guardaron

      input.checked = true;// si estado es completo, marca el checkbox

    } else if(data[i].estado == "Incompleto"){

      input.checked = false;// si estado es incompleto, desmarca el checkbox
    }
    if (input.checked == true) {

      contador++; //no se necesitaba el contador--, solo sumamos lo marcados
      texto.innerHTML = contador
    }
    
      input.addEventListener("click",function name() {//se envia los datos de estadocheck
        location.reload()
        
        if (check[i].checked == true) { // aqqui check podria llamarse input //aqui se esta usando el primer for para reiterar en los datos

          estadoCheck = 'completo'; //se envia el cambio de estado de checkbox

        }else if (check[i].checked == false){ 

         estadoCheck = "Incompleto";
        }  
          //se envia los parametros a la funcion, se cambia la funcion con estadocheck
          UpdateCheck(data[i].id,estadoCheck); // entre estos parentesis esta los dosparametros de UpdateCheck (id,estadoCheck) separados por una coma
        })
          
    trash.addEventListener('click', function() {//----------funcion eliminar

      console.log("eliminando",data[i].task) //aqui se visualiza en console el task que se esta eliminando al hacer click
 
      deleteTask(data[i].id); //se busco el id de cada dato para borrarlo

      window.location.reload() 

    });
}};
      // if (input.checked) {// el input checked ya es un boleano verdadero
      //  cantidad.innerHTML = contador};//no se mostraba la resta porque estaba insertando cantiadad en el html
      //  UpdateCheck(data[i].id,"completo"); // entre estos parentesis esta los dosparametros de UpdateCheck (id,estadoCheck) separados por una coma