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
              v-model="form.imageCiudad"
              placeholder="Url de la imagen que represente el Hotel"
              required
              style="border-radius: 15px"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label-for="input-4">
            <b-form-textarea
              id="input-4"
              v-model="form.descripcionCiudad"
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
          email: "",
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
          window.open("../pagAdmin", "_self");
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
    margin-top: 10%;
    
  }
  </style>