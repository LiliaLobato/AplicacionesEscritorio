
const Tarea = require('./../modelos/tarea')

const tareasController = {
    ver: (req,res)=>{
       },
    
    crear:(req,res)=>{
       
    },

    listar: (req,res)=>{
        Tarea.find().then(response =>{
            console.log('Respuesta: ', response)
            res.render('tareas',{'tareas':response})
        })
        .catch(error=>{
            res.status(400).send("Algo salió mal")
        })
        
    },

    actualizar: (req,res)=>{
       
    },

    eliminar: (req,res)=>{}
    

}
    /*function crearTarea(req,res){
        console.log(req.body)
    
        res.send("tarea creada")}
    
    function actualizarTarea(req,res){
        res.send('tarea actualizada correctamente')
    }
    
    function getTareas(req,res){
        
        res.render('tareas',{tareas})
    }
    
    function getListaTareas(req,res){
        const id = req.params.id
        res.send('Detalles de la tarea' + id)
    }

    TareaControlador = { create : crearTarea,update:actualizarTarea,get: getTareas,getLista: getListaTareas}

module.exports = TareaControlador*/

module.exports = tareasController