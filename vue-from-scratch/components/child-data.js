Vue.component('child-data', {
    data() {
        return{
            cmpName: 'Child Data CMP'
        }
    },
    template: `
        <div>
            <h2>Acceso a datos del cmp child desde cmp padre</h2>
        </div>
    `
});