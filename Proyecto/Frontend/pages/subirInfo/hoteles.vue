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
        <br>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.pais"
              placeholder="Pais"
              required
              style="border-radius: 15px"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.ciudad"
              placeholder="Ciudad"
              required
              style="border-radius: 15px"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              id="input-3"
<<<<<<< HEAD
              v-model="form.hotel"
              placeholder="Nombre del Hotel"
=======
              v-model="form.imageCiudad"
              placeholder="Url de la imagen que represente el Hotel"
>>>>>>> 0331a22c43999e97a2c038420acab8a6d8711833
              required
              style="border-radius: 15px"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label-for="input-4">
<<<<<<< HEAD
            <b-form-input
              id="input-4"
              v-model="form.imageHotel"
              placeholder="Url de la imagen del Hotel"
              required
              style="border-radius: 15px"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-5" label-for="input-5">
            <b-form-textarea
              id="input-5"
              v-model="form.descripcionHotel"
=======
            <b-form-textarea
              id="input-4"
              v-model="form.descripcionCiudad"
>>>>>>> 0331a22c43999e97a2c038420acab8a6d8711833
              placeholder="Descripcion del Hotel"
              required
              style="border-radius: 15px"
              rows="5"
            ></b-form-textarea>
          </b-form-group>
          <br>
          <b-button style="border-radius: 15px; width:500px " type="submit" variant="primary">Subir Hotel</b-button>
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
<<<<<<< HEAD
          pais: "",
          ciudad: "",
          hotel: "",
          imageHotel: "",
          descripcionHotel: "",
=======
          email: "",
          password: "",
>>>>>>> 0331a22c43999e97a2c038420acab8a6d8711833
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
          window.open("../pagAdmin", "_self");
        }, 2000);
      },
      onReset(event) {
        event.preventDefault();
        // Reset our form values
<<<<<<< HEAD
        this.form.pais = "";
        this.form.ciudad = "";
        this.form.hotel = "";
        this.form.imageHotel = "";
        this.form.descripcionHotel = "";
=======
        this.form.email = "";
        this.form.name = "";
>>>>>>> 0331a22c43999e97a2c038420acab8a6d8711833
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
    margin-top: 10%;
    
  }
  </style>