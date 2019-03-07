Vue.component('methods', {
    data() {
        return {
            name: 'Isreael',
            surname: 'Parra'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello (){
            alert(this.fullName);
        }
    },
    template: `
        <div>
            <h2> Ejecutar metodos con Vuejs</h2>
            <p @click="hello"> Pulsa aqui para ejecutar el metodo hello.</p>
        </div>
    `
});