Vue.component('curso',
{   
    props: ['curso'],
    template: `
    <div>
    <input type="checkbox" :id="curso.value" :value="curso.value" @change="onchange">
    <label :for="curso.value">{{curso.nombre}}</label>
    </div>`,
    methods:{
        
        onchange: function (ev) {
            this.$emit('checked', this.curso.value, ev.target.checked)
        }
    }

    
});
const vm = new Vue({
    el: '#app', 
    data: {
        nombre: '',
        cursos: [
            {nombre: 'Curso de Vue.js', value: 'vue'},
            {nombre: 'Curso de React.js', value: 'react'},
            {nombre: 'Curso de Angular.js', value: 'angular'}
        ],
        cursosSeleccionados: [],
    },
    // filters: {
    //     uppercase: function (str) {
    //         return str.toUpperCase()
    //     }
    // },
    methods: {
        submit: function () {
            console.log('Se ejecuta')
            console.log(this.cursosSeleccionados)
        },
        selectCurso: function (curso,checked){
            if(checked){
                this.cursosSeleccionados.push(curso)
            }else{
                let index = this.cursosSeleccionados.indexOf(curso)
                this.cursosSeleccionados.splice(index, 1)
            }

        }
    }

})