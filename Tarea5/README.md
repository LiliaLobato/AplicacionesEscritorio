# Tarea 5 - CRUD
Desarrollar y documentar un api para administrar tareas.

### Especificaciones:
Esta tarea consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.
Como administrador de tareas, el usuario debe tener la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente.
Para ello, se deberán realizar los endpoints necesarios para que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes.

Cada tarea deberá contar, por lo menos, con las siguientes propiedades:
* Título
* Descripción
* Status
* Fecha de creación (formato a elegir)

Se debe seguir la estructura de endpoints que se lista a continuación:

**Endpoint**  | **Descripción**
------------- | -------------
**GET /tareas**  | Listar tareas debe regresar un arreglo de objetos
**GET /tareas/:id**  | Ver una tarea debe devolver el objeto que coincida con el ID enviado
**POST /tareas** | Crear una tarea debe retornar el objeto almacenado en la base de datos
**PUT /tareas/:id**  | Actualizar una tarea debe retornar el objeto actualizado en la base de datos
**DELETE /tareas/:id**  | Eliminar una tarea debe devolver el objeto recién eliminado

### Consideraciones:
* Se deberá crear un nuevo proyecto de Node mediante npm init
* El proyecto deberá utilizar Express y mongoose
* Librerías adicionales son bienvenidas mas no requeridas
* El desarrollo de la aplicación debe implementar MVC
* Se deberá crear un endpoint para cada una de las acciones del crud a realizar
* Se deberá documentar cada uno de los endpoints utilizados para dicho API mediante Swagger.
* La aplicación NO DEBE tener archivos que no sean necesarios para la funcionalidad descrita en la tarea.
* No habrá HTML en esta entrega (res.send en vez de res.render)
* Se deberá incluir un archivo Readme con la información relevante del proyecto

### Notas:
* Crea un .dev file con MONGO_URL = ~~mongodb+srv://******************~~
* Instala dependencias:
```bash
npm install
```
* Para correr el proyecto:
```bash
npm run start
```


[localhost:3000/swagger](localhost:3000/swagger)