<template>
  <div>
    <br />
    <center>
      <h1>Hoteles</h1>
    </center>
    <br />
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
                <b-col v-for="hoteles in hotel" :key="hoteles.id" md="4">
                  <b-card
                    v-if="hoteles.idCity === ciudades._id"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src="hoteles.imgHotel"
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=hoteles.hotel>
                          <b-card-text>
                            {{hoteles.descripcionHotel}}
                          </b-card-text>
                          <v-btn
                            @click="idHotel = hoteles._id, elegirHotel()"
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
      idHotel: null,
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
      hotel: null,
      ciudad: null,
    };
  },

  beforeMount() {
    this.obtenerHoteles();
  },

  methods: {
    async obtenerHoteles() {
      const urlHoteles = "http://localhost:3001/api/hoteles";
      const dataHoteles = await axios.get(urlHoteles);
      const hoteles = dataHoteles.data;
      this.hotel = hoteles;
      //console.log(hoteles);
      const urlCiudades = "http://localhost:3001/api/destinos";
      const dataCiudades = await axios.get(urlCiudades);
      const ciudades = dataCiudades.data;
      this.ciudad = ciudades;
      //console.log(ciudades);
    },

    async elegirHotel() {
      try {
        const datoReserva = {
        userId: localStorage.getItem("idUser"),
        opcionId: this.idHotel,
        nombreOpcion: "hoteles"
      }
      const urlReserva = "http://localhost:3001/api/reservas";
      await axios.post(urlReserva, datoReserva);
      swal("Hotel Seleccionado!", "Hotel ha sido agregado!", "success");
      } catch (error) {
        swal("Hotel NO agregado", "No se pudo agregar el hotel a la reserva", "error");
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