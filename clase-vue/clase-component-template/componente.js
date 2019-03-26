Vue.component('elegir-ganador', {
    props: ['listado'], 
    // template: '#elegir-ganador-template',
    methods: {
        elegirGanador(){
            let cantidad = this.participantes.length
            let indice = Math.floor(Math.random()*cantidad)
            this.ganador = this.participantes[indice-1]
        }
    },
    data (){

        return {

            ganador: false,
            participantes: this.listado
        }
    }
})
// Los modelos y los componentes tiene que retornar un objeto.


new Vue({

    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    },
})