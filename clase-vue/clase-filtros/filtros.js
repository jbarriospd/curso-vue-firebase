
Vue.filter('alReves',valor =>  valor.split('').reverse().join(''))
new Vue({

    el: 'main',
    data: {
        busqueda: "",
        minimo: 5,
        juegos: [

            {
                titulo: 'Batlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilization VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: ' Resident evil 7',
                genero: true,
                puntuacion: 7
            }

        ]
    },

    computed: {

        mejoresJuegos() {

            return this.juegos.filter(juego => juego.puntuacion >= this.minimo)

        },
        buscarJuego() {
            return this.juegos.filter(juego => juego.titulo.includes(this.busqueda))
        }

        

    }

})