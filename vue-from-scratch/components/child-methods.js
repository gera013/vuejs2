Vue.component('child-methods', {
    data() {
        return{
            cmpName: 'Child Data CMP'
        }
    },
    methods:{
        showCmpName () {
            console.log("Llamada al metodo showCmpName", this.cmpName)
        }
    },
    template: `
        <div>
            <h2>Acceso a metodos del cmp child desde cmp padre</h2>
        </div>
    `
});