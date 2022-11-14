<template>
  <div>
    <br />
    <center>
      <h1>Actividades</h1>
    </center>
    <br>
    <b-row v-for="(ciudades, index) in ciudad" :key="ciudades.id">
      <b-col>
        <v-card class="mx-auto" max-width="90%">
          <b-carousel
            :id="'carousel' + index"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              :img-src="ciudades.imgCiudad"
              style="height: 500px"
            ></b-carousel-slide>
          </b-carousel>

          <v-card-title> {{ ciudades.ciudad }} </v-card-title>

          <v-card-subtitle> Ciudad </v-card-subtitle>

          <v-card-actions>
            <v-btn style="color: orange" text @click="show = !show">
              Explore
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <b-row>
                <b-col v-for="actividades in actividad" :key="actividades.id" md="4">
                  <b-card
                  v-if="actividades.idTown === ciudades._id"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src="actividades.imgActividad"
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=actividades.Actividad>
                          <b-card-text>
                            {{actividades.descripcionActividad}}
                          </b-card-text>
                          <v-btn @click="idActvidad = actividades._id, elegirActividad()" style="color: purple" text> Escoger </v-btn>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
              <br />
            </div>
          </v-expand-transition>
        </v-card>
        
        <br>

      </b-col>
    </b-row>
    <br />
    <Nuxt />
  </div>
</template>


<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  layout: "header_principal",

  data() {
    return {
      idActvidad: null,
      show: false,
      slide: 0,
      sliding: null,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      actividad: null,
      ciudad: null,
    };
  },

  beforeMount() {
    this.obtenerActividades()
  },

  methods: {

    async obtenerActividades() {
      const urlActividades = "http://localhost:3001/api/actividades";
      const dataActividades = await axios.get(urlActividades);
      const actividades = dataActividades.data
      this.actividad = actividades;
      //console.log(actividades);
      const urlCiudades = "http://localhost:3001/api/destinos";
      const dataCiudades = await axios.get(urlCiudades);
      const ciudades = dataCiudades.data;
      this.ciudad = ciudades;
      //console.log(ciudades);
    },

    async elegirActividad(){
      try {
        const datoReserva = {
        userId: localStorage.getItem("idUser"),
        opcionId: this.idActvidad,
        nombreOpcion: "actividades"
      }
      const urlReserva = "http://localhost:3001/api/reservas";
      await axios.post(urlReserva, datoReserva);
      swal("Actividad Seleccionada!", "La actividad ha sido agregado!", "success");
      } catch (error) {
        swal("Actividad NO agregada", "No se pudo agregar la actividad a la reserva", "error");
      }
    },

    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>