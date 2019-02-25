new Vue({

    el: 'main',
    mounted() {

        // console.log('Instancia montada');
       this.cargarPersonas()
    },

    data : {

        personas: []
    },

    methods : {

        cargarPersonas(){
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta)=>{
                    
                    this.personas = respuesta.body.results;
                })
        }
    }
    
})