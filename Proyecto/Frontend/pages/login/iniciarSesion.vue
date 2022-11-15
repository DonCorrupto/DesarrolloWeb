<template>
  <div class="form">
    <b-img
      src="https://picsum.photos/950/937/?image=1035"
      fluid
      alt="Responsive image"
    >
    </b-img>
    <div class="login">
      <h1 style="font-family: sans-serif">Iniciar Sesión</h1>
      <h6>Bienvenido a ViajaCon</h6>
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
          >Iniciar Sesión</b-button
        >
        <br />
        <br />
        <p>
          Aun no tienes una Cuenta?
          <b-link @click="signUp()">Crear Cuenta</b-link>
        </p>
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
        password: "",
      },
      show: true,
    };
  },

  beforeMount() {},

  methods: {
    async onSubmit() {
      try {
        const login = this.form;
        //console.log(this.form);
        const url = "https://desarrolloweb-app.herokuapp.com/api/users";
        const data = await axios.get(url);
        const iniciarSesion = data.data;
        //console.log(iniciarSesion);

        for (let i = 0; i < iniciarSesion.length; i++) {
          if (
            login.email === iniciarSesion[i].email &&
            login.password === iniciarSesion[i].password
          ) {
            localStorage.setItem("idUser", iniciarSesion[i]._id);
            localStorage.setItem("name", iniciarSesion[i].name);
            localStorage.setItem("tipo", iniciarSesion[i].tipo);
            setTimeout(() => {
              window.open("../destinos", "_self");
            }, 2000);
            break;
          } else if (i === iniciarSesion.length - 1) {
            swal(
              "Error",
              "Email o Contraseña Incorrecta ",
              "error"
            );
            setTimeout(() => {
              window.open("../login/iniciarSesion", "_self");
            }, 4000);
          }
        }
      } catch (error) {
        swal("Error", "Error al iniciar sesion", "error");
        setTimeout(() => {
          window.open("../login/iniciarSesion", "_self");
        }, 1500);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    async signUp() {
      window.open("crearCuenta", "_self");
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