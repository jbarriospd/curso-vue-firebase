const vm = new Vue ({
    el: '#app',
    data: {
        titulo: 'evaluacion ',
        subtitulo: 'item numero 1',
    },
    filters:{
        uppercase: function(str){
            return str.toUpperCase()
        },
        lowercase: function (str){
            return str.toLowerCase()
        },
        capitalize: function(str){
            c = str.trim().charAt(0);
            return str.replace(c,c.toUpperCase());
        }
    }
})