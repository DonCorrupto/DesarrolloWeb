<template>
  <div class="form">
    <b-img
      src="https://picsum.photos/950/937/?image=1075"
      fluid
      alt="Responsive image"
    >
    </b-img>
    <div class="login">
      <h1 style="font-family: sans-serif">Subir Hoteles</h1>
      <h6>Ingresa Nuevos Hoteles</h6>
      <br />
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
            v-model="form.ciudad"
            placeholder="* Ciudad"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.hotel"
            placeholder="* Nombre del Hotel"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.imageHotel"
            placeholder="* Url de la imagen del Hotel"
            required
            style="border-radius: 15px"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label-for="input-4">
          <b-form-textarea
            id="input-4"
            v-model="form.descripcionHotel"
            placeholder="* Descripcion del Hotel"
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
          >Subir Hotel</b-button
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
        ciudad: "",
        hotel: "",
        imageHotel: "",
        descripcionHotel: "",
      },
      show: true,
    };
  },

  beforeMount() {
  }, 

  methods: {
    async onSubmit() {
      try {
        const ciudad = {
          ciudad: this.form.ciudad,
        };

        const urlCiudad = "https://desarrolloweb-app.herokuapp.com/api/destinos";
        const responseCiudad = await axios.get(urlCiudad);
        const obtenerCiudad = responseCiudad.data;
        //console.log(obtenerCiudad);

        for (let i = 0; i < obtenerCiudad.length; i++) {
          let nombreCiudad = obtenerCiudad[i].ciudad;
          if (ciudad.ciudad === nombreCiudad) {
            const idCiudad = obtenerCiudad[i]._id;
            const hotel = {
              hotel: this.form.hotel,
              imgHotel: this.form.imageHotel,
              descripcionHotel: this.form.descripcionHotel,
              idCity: idCiudad
            };
            const urlHotel = "https://desarrolloweb-app.herokuapp.com/api/hoteles";
            await axios.post(urlHotel, hotel);
            swal(
              "Hotel Creado",
              "El hotel ingresado ha sido creado",
              "success"
            );
            setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 2000);
            break;
          } else if (i === obtenerCiudad.length - 1) {
            swal(
              "Error",
              "Tienes que crear un destino para relacionarlo con el hotel ",
              "error"
            );
            setTimeout(() => {
              window.open("../subirInfo/destinos", "_self");
            }, 4000);
          }
        }
      } catch (error) {
        swal("Hotel NO Creado", "No se pudo crear el hotel", "error");
        setTimeout(() => {
          window.open("../subirInfo/hoteles", "_self");
        }, 1500);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.ciudad = "";
      this.form.hotel = "";
      this.form.imageHotel = "";
      this.form.descripcionHotel = "";
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