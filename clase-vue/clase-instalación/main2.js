/* //vanilla Js

const h1 = document.querySelector('h1');
const input = document.querySelector('input')

input.addEventListener('keyup', () => h1.innerHTML = input.value)
 */

//Vue.js
//directivas: son atributos que dan 'superpoderes' o capacidades extras a elementos html
// renderizado condicional: mostrar elementos determinados a condiciones que parte del modelo

// new Vue({
//     el: 'main',
//     data: {
//       mensaje: 'Hola mundo!'
//     }
//   })

// const vm = new Vue ({

//     el: 'main',
//     data: {
//         conectado: false,
//         edad: 44,
//     }
// })

new Vue ({

    el: 'main',
    data: {
    
        laborales: ['Lunes','Martes','Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'Hacer la compra', prioridad: 'alta'},
            {nombre: 'Aprender vue.js y firebase', prioridad: 'alta'},
            {nombre: 'comprar adaptador', prioridad: 'media'}
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'dev',
            ciudad: 'Valencia',
        }
    },
})