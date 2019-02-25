//Propiedades computadas: manipulacion del modelo antes de renderizar en la vista.
// Propiedades computadasvs methods_ un metodo se evalua constantemente y el otro se evalua cuando cambian las dependencias (ej: mensajes tareas)


new Vue({

    el: 'main',
    data: {
        mensaje: 'hola mundo',
        nuevaTarea: null,
        tareas: [
            
        {
            titulo: 'Aprender Vue.js',
            prioridad: true,
            antiguedad: 90
        },
        {
            titulo: 'Aprender ES6',
            prioridad: false,
            antiguedad: 9
        },
        {
            titulo: 'Publicar algo todos los días',
            prioridad: true,
            antiguedad: 200
        },

        ]
    },
    methods: {
        agregarTarea (){
            // this hace referencia a la instancia vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            })
            this.nuevaTarea = null;
        },
      
    },

    computed: {

        mensajeAlReves(){

            return this.mensaje.split('').reverse().join('')
            
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad)
        },
        tareasConPrioridad () {

            return this.tareas.filter(tarea => tarea.prioridad);
        },



    }

})