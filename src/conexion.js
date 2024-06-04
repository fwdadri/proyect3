//consultas de datos
//todas las funciones que tenga FETCH deben ir en una misma hoja
//Modulos se refiere a acomoa por hojas separadas las funciones

async function addtarea(tarea) {//es necesario el tarea entre ()

    try { //porque try
     const response = await fetch("http://localhost:3000/api/task", {//llama al api

       method: 'POST',//post empuja/guarda/inserta el contenido
       headers: {//muestra el tipo de contenido que se guarda/ empuja
       'Content-Type': 'application/json'
      },

      body: JSON.stringify({// convesion de todo a un string  //body se refiere a todo el contenido?

       task:tarea

     })
   });
  

    const data = await response.json(); //esperando a que se realice la funcion de conversion anterior          
     console.log(data)
    } catch(error) {
               
     console.log(error)
    } 
  }

  async function getTask() { //entonces todo esto para que?
    try { 
     const response = await fetch( "http://localhost:3000/api/task");//aqui esta llamando al local host?
     const data = await response.json(); //esta volviendo el localhost en un jaseon
     return data
    
    } catch (error) { 
     console.log(error);//que tipo de error atrapa
    }
  }

  export{getTask,addtarea}
