<template>
  <div class="form">
    <b-img
      src="https://picsum.photos/950/937/?image=1075"
      fluid
      alt="Responsive image"
    >
    </b-img>
    <div class="login">
      <h1 style="font-family: sans-serif">Subir Destinos</h1>
      <h6>Ingresa Nuevos Destinos</h6>
      <br>
      <p>* Es obligatorio</p>
      <b-form
        action="javascript:void(0)"
        @submit="onSubmit()"
        @reset="onReset"
        v-if="show"
      >
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.pais"
            placeholder="* Pais"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.imagePais"
            placeholder="* Url de la imagen que represente al pais"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.ciudad"
            placeholder="* Ciudad"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.imageCiudad"
            placeholder="* Url de la imagen que represente a la Ciudad"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-5" label-for="input-5">
          <b-form-textarea
            id="input-5"
            v-model="form.descripcionCiudad"
            placeholder="* Descripcion de la Ciudad"
            required
            style="border-radius: 15px"
            rows="5"
          ></b-form-textarea>
        </b-form-group>
        <br />
        <b-button
          style="border-radius: 15px; width: 500px"
          type="submit"
          variant="primary"
          >Subir Destino</b-button
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
        pais: "",
        imagePais: "",
        ciudad: "",
        imageCiudad: "",
        descripcionCiudad: "",
      },
      show: true,
    };
  },

  beforeMount() {},

  methods: {
    async onSubmit() {
      try {
        const pais = {
          pais: this.form.pais,
          imgPais: this.form.imagePais,
        };
        //console.log(pais);
        const urlPais = "http://localhost:3001/api/paises";
        const responsePais = await axios.get(urlPais);
        const obtenerPais = responsePais.data;
        //console.log(obtenerPais);

        for (let i = 0; i < obtenerPais.length; i++) {
          let nombrePais = obtenerPais[i].pais;
          if (pais.pais === nombrePais) {
            const idPais = obtenerPais[i]._id;
            const ciudad = {
              ciudad: this.form.ciudad,
              imgCiudad: this.form.imageCiudad,
              descripcionCiudad: this.form.descripcionCiudad,
              idPais: idPais
            };
            const urlCiudad = "http://localhost:3001/api/destinos";
            await axios.post(urlCiudad, ciudad);
            swal(
              "Destino Creado",
              "El destino ingresado ha sido creado",
              "success"
            );
            setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 2000);
            break;
          } else if (i === obtenerPais.length - 1) {
            const infoPais = await axios.post(urlPais, pais);
            //console.log(infoPais.data._id);
            const ciudad = {
              ciudad: this.form.ciudad,
              imgCiudad: this.form.imageCiudad,
              descripcionCiudad: this.form.descripcionCiudad,
              idPais: infoPais.data._id,
            };
            const urlCiudad = "http://localhost:3001/api/destinos";
            await axios.post(urlCiudad, ciudad);
            swal(
              "Destino Creado",
              "El destino ingresado ha sido creado",
              "success"
            );
            setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 2000);
          }
        }
      } catch (error) {
        swal("Destino NO Creado", "No se pudo crear el destino", "error");
        setTimeout(() => {
          window.open("../subirInfo/destinos", "_self");
        }, 1500);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.pais = "";
      this.form.imagePais = "";
      this.form.ciudad = "";
      this.form.imageCiudad = "";
      this.form.descripcionCiudad = "";
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
  margin-top: 10%;
}
</style>
