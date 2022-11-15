<template>
  <div>
    <br />
    <center>
      <h1>Destinos</h1>
    </center>
    <br />
    <b-row v-for="(paises, index) in pais" :key="paises.id">
      <b-col>
        <v-card class="mx-auto" max-width="90%">
          <b-carousel
            :id="'carousel' + index"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              :img-src=paises.imgPais
              style="height: 500px;"
            ></b-carousel-slide>
          </b-carousel>

          <v-card-title> {{paises.pais}} </v-card-title>

          <v-card-subtitle> Pais </v-card-subtitle>

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
                <b-col v-for="ciudades in destino" :key="ciudades.id" md="4">
                  <b-card v-if="ciudades.idPais === paises._id"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src=ciudades.imgCiudad
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=ciudades.ciudad>
                          <b-card-text>
                            {{ciudades.descripcionCiudad}}
                          </b-card-text>
                          <v-btn
                            @click="idCiudad=ciudades._id, elegirDestino()"
                            style="color: purple"
                            text
                          >
                            Escoger
                          </v-btn>
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

        <br />
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
      idCiudad: null,
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

      destino: null,
      pais: null,
    };
  },

  beforeMount() {
    this.obtenerDestinos()
  },

  methods: {

    async obtenerDestinos () {
      const urlDestinos = "https://desarrolloweb-app.herokuapp.com/api/destinos";
      const dataDestinos = await axios.get(urlDestinos);
      const destinos = dataDestinos.data
      this.destino = destinos;
      //console.log(destinos);
      const urlPaises = "https://desarrolloweb-app.herokuapp.com/api/paises";
      const dataPaises = await axios.get(urlPaises);
      const paises = dataPaises.data
      this.pais = paises;
      //console.log(paises);
    },

    async elegirDestino() {
      try {
        const datoReserva = {
        userId: localStorage.getItem("idUser"),
        opcionId: this.idCiudad,
        nombreOpcion: "destinos"
      }
      const urlReserva = "https://desarrolloweb-app.herokuapp.com/api/reservas";
      await axios.post(urlReserva, datoReserva);
      swal("Destino Seleccionado!", "Tu destino ha sido agregado!", "success");
      } catch (error) {
        swal("Reserva NO agregada", "No se pudo agregar el destino a la reserva", "error");
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