//  una instacia es un intermediario entre el DOM y la logica de la app. 
// Usas v-text para mostrar el contenido del modelo y usas {{}} cuando quieres combinar o concatenar contenido estático con el valor del modelo ( ej.: Hola {{ nombre }}  )

const vm1 = new Vue({

    el: 'main',
    data: {

        mensaje: "Instancia vue1"
    },
    beforeUpdate(){
        console.log('BeforeUpdate:', this.mensaje)
    },
    updated (){
        console.log('Update:', this.mensaje)
        
    },
    methods: {

        alReves(){

            this.mensaje =this.mensaje.split('').reverse().join('')
            // vm2.mensaje = 'Hola desde instancia 1'
        }
    },

    computed:{
        mensajeMayusculas(){

            return this.mensaje.toUpperCase ()
        }
    }

});

const vm2 = new Vue({

    el: '#app',
    data: {

        mensaje: "Instancia vue 2"
    },
})