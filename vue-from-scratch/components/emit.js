Vue.component('emit', {
    data() {
        return {
            cardBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos con Vuejs 2</h2>
            <p @click="$emit('cardbrand',cardBrand)"> 
                Pulsa aquí para emitir un evento a la instancia ROOT de Vuejs
            </p>
        </div>
    `
});