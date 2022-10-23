<template>
  <div class="form">
    <h1>Hola</h1>
  </div>
</template>

<script>
import swal from "sweetalert";
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        console.log(JSON.stringify(this.form))
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
          window.open("destinos", "_self");
        }, 2000);
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
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

}
</style>