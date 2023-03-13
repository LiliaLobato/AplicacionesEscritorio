const Tarea = {
    buscar: (filtros) => {
        const tareas = [
            {titulo: 'Tarea 1', estado: "terminada"},
            {titulo: 'Tarea 2', estado: "en progreso"},
            {titulo: 'Tarea 3', estado: "nueva"},
            {titulo: 'Tarea 4', estado: "nueva"}
        ]

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(tareas)//Despues del tiempo indicado regreso los datos que me pidan
            },1000)
        })
    }

}

module.exports = Tarea