Vue.component('candidato', {
    // props: ['nombre', 'correoe', 'imagen'],
    props: {

        nombre: {
            type: [String, Array], //null = * para definir de cualquier typo
            required: true,
        },
        correoe: {
            type: String,
            default: 'juan@wmedia.es'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return {
                    cuidad: 'Valencia'
                }
            }
        },
    },
    template: '#candidato-template',

    
});


new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=50')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});