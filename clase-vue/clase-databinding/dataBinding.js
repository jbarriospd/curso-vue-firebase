new Vue ({

    el: 'main',
    data: {

        tareas: [  

            {titulo: 'Hacer la compra', completado: false},
            {titulo: 'Aprender Vue.js', completado: false},
            {titulo: 'Aprender Firebase', completado: false},
            {titulo: 'Domninar ES6', completado: false},
            {titulo: 'Salir a comer', completado: false},

        ]
    },
    methods: {
        completarTarea(tarea){
            // console.log(tarea)
            tarea.completado = !tarea.completado
        }
    },
    computed :{
        tareasCompletadas (){
            return this.tareas.filter((tarea) => tarea.completado)
        }
    }

})