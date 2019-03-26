// cada instancia de cada componente tiene un ambito aislado, por eso su modelo su modelo -propieda data en los componentes es una funcion que retorna un objeto y en las instacias solo es un objeto
// data = modelo, prpiedad = autor
// no se pueden cambiar las propiedades del modelo directamente, si no que se tiene que se tiene que cambiar sus valores iniciales en un funcion para esto la documentancion presenta dos formas de realizarlo 
Vue.component('autor',{
    props: ['nombre'],
    template: `<h1>{{nombre}}</h1>`,
    mounted (){
        // las props son accesibles desde this
        console.log(this.nombre)
    }
})

new Vue({

    el: 'main',
    data: {
        autor: 'Juan Andres'
    },
})