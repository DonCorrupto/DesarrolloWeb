<template>
  <div class="form">
    <b-img
      src="https://picsum.photos/950/937/?image=1044"
      fluid
      alt="Responsive image"
    >
    </b-img>
    <div class="login">
      <h1 style="font-family: sans-serif">Crear Cuenta</h1>
      <h6>Sé parte de nosotros</h6>
      <br>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Correo Electronico"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Nombre y Apellido"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.password"
            type = "password"
            placeholder="Contraseña"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <br>
        <b-button style="border-radius: 15px; width:500px " type="submit" variant="primary">Crear Cuenta</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      show: true,
    };
  },

  beforeMount() {},

  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
      swal("Good job!", "You clicked the button!", "success");
      setTimeout(() => {
        window.open("../destinos", "_self");
      }, 2000);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.form {
  background-color: whitesmoke;
  
  display: flex;
  flex-direction: row;
  min-height: 100%;
  position: relative;
}

.login{
  
  width: 500px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 15%;
  
}
</style>