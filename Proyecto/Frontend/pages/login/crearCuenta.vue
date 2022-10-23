<template>
    <center>
        <div class="form">
            <h1>Iniciar Sesión</h1>
            <br>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Correo Electronico:"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Nombre y Apellido:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Contraseña:"
                label-for="input-3"
            >
                <b-form-input
                id="input-3"
                v-model="form.password"
                type="password"
                required
                ></b-form-input>
            </b-form-group>
            <b-button pill type="submit" variant="outline-secondary">Sign in</b-button>
            <b-button pill  @click="signUp()" variant="">Sign up</b-button>
            </b-form>
        </div>
    </center>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      async signUp (){
        window.open("crearCuenta", "_self")
      }
    }
  }
</script>

<style>
.form{
    border: 2px solid red;
    width: 30%;
    margin-top: 5%;
}
</style>