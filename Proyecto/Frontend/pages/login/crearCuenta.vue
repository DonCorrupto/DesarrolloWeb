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
      <br />
      <b-form
        action="javascript:void(0)"
        @submit="onSubmit()"
        @reset="onReset"
        v-if="show"
      >
        <b-form-group id="input-group-1" label-for="input-1">
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
            type="string"
            placeholder="Nombre y Apellido"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.password"
            type="password"
            placeholder="Contraseña"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button
          style="border-radius: 15px; width: 500px"
          type="submit"
          variant="primary"
          >Crear Cuenta</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        tipo: "USER",
      },
      show: true,
    };
  },

  beforeMount() {},

  methods: {
    async onSubmit() {
      try {
        const dataClick = this.form;
        console.log(dataClick);
        const url = "http://localhost:3001/api/users";
        const data = await axios.post(url, dataClick);
        console.log(data);
        swal("Cuenta Creada", "Tu cuenta ha sido creada", "success");
        setTimeout(() => {
          window.open("../login/iniciarSesion", "_self");
        }, 2000);
      } catch (error) {
        swal("Usuario NO Creado", "No se pudo crear la cuenta", "error");
        setTimeout(() => {
          window.open("./login/crearCuenta", "_self");
        }, 2000);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
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

.login {
  width: 500px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 15%;
}
</style>
