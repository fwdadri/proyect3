//consultas de datos
//todas las funciones que tenga FETCH deben ir en una misma hoja
//Modulos se refiere a acomoda por hojas separadas las demas funciones
//async significa asincronico, es un tipo de funcion


//----------------------POST-addtarea-------------------------------------------------------------------------------

async function addtarea(tarea) {//es necesario el tarea entre ()

    try { //porque try
     const response = await fetch("http://localhost:3000/api/task", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

        task:tarea, // hace que todas las tareas guardadas  salgan como task
        estado:"Incompleto",
      })
   });
  
    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          
     console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
}

//------------------GET----------------------------------------------------------------------------------------------

async function getTask() { //todos los asyn necesitan un await, un try y catch
   try { 
     const response = await fetch( "http://localhost:3000/api/task"); // obtenido los datos los local host 
     const data = await response.json(); //esta volviendo el localhost en un jason para poder ser leidos
     return data
    
    } catch (error) { 
     console.log(error);//que tipo de error atrapa
    }
}

//------------------DELATE----------------------------------------------------------------------------------------------

async function deleteTask(id) {
  try{
  const response = await fetch('http://localhost:3000/api/task/' + id, {
  method: 'DELETE',
  headers: { 
    'Content-type': 'application/json'

  }})
  }catch (error) { 

    console.log(error);//que tipo de error atrapa
   }
   window.location.reload()
}

//------------------PUT--UPDATE----------------------------------------------------------------------------------------

async function UpdateCheck(id,estadoCheck) {//dos parametros 
  try{
    const response = await fetch('http://localhost:3000/api/task/' + id, {//aqui el id identifica cual es que se quiere cambiar
    method: 'PUT',
    headers: { 
      'Content-type': 'application/json'
    },
    
    body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido

      estado:estadoCheck //muetra en el api las tareas que ya eatn marcadas
    })
  });
  const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          
   console.log(data)
  } catch(error) {
             
   console.log(error)
  } 
}


export{getTask,addtarea, deleteTask, UpdateCheck }