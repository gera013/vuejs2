Vue.component('computed-properties', {
    data(){
        return {
            name: 'Isreael',
            surname: 'Parra'
        }
    },
    computed:{
        fullName () {
            return `${this.name} ${this.surname}`;
        }
    },
    template: `
    <div>
        <h2>Computed Properties</h2>
        <p>{{ fullName }}</p>
    </div>
    `
});
