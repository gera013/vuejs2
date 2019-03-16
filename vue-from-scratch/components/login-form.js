Vue.component('login-form', {
    data () {
        return {
            logged:false,
            user:{
               email:'',
               password:'' 
            }
        }
    },
    methods: {
            login () {
                this.logged = this.user.email === 'test@m.com' && this.user.password === '1234';
            }
    },
    template: `
    <div>
        <div>
            <h2>Formulario de login</h2>
            <p v-show="logged" style="background: green; color: #fff;">
                Has iniciado sesion con los datos: {{ user }}
            </p>
        </div>
        <form @submit.prevent="login">
            <input autocomplete="off" type="email" v-model="user.email" name="email"/> 
            <input type="password" v-model="user.password" name="password" />
            <input type="submit" value="Iniciar sesion" />
        </form>
    </div>
    `
});