// Si se estaba utilizando vue-resource y quiero pasar a axios utilizaria lo siguente:

Vue.prototype.$http = axios;

// Teniendo en cuenta que la respuesta canbia de body a data(el cambio es de la respuesta no de la Api)

new Vue({

    el: 'main',
    mounted() {

        // console.log('Instancia montada');
        this.cargarPersonas()
    },

    data: {

        personas: []
    },

    methods: {

        cargarPersonas() {

            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta)=>{
                    
                    this.personas = respuesta.data.results;
                })
            // axios.get('https://randomuser.me/api/?results=500')
            //     .then((respuesta) => {
            //         this.personas = respuesta.data.results; 
            //     })
        }
        
    }
    
})