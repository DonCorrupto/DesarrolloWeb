<template>
  <div>
    <center>
      <h1>Mis Reservas</h1>
    </center>
    <br />
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-1
            variant="info"
            style="height: 100px"
            ><h5>Destinos</h5></b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-row>
              <b-col v-for="reservas in reserva" :key="reservas.id">
                <b-card-group deck>
                  <b-card
                    v-if="reservas.userId === id_user"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 350px;"
                  >
                    <b-row v-for="ciudades in ciudad" :key="ciudades.id" no-gutters>
                      <b-col>
                        <b-card-img
                          v-if="ciudades._id === reservas.opcionId"
                          :src="ciudades.imgCiudad"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                        <b-card-body v-if="ciudades._id === reservas.opcionId" :title=ciudades.ciudad>
                          <b-card-text v-for="paises in pais" :key="paises.id">
                            <p v-if="ciudades.idPais === paises._id">
                              {{paises.pais}}
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrar = reservas._id ,passBorrado()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Borrar
                          </v-btn>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-2
            variant="info"
            style="height: 100px"
            ><h5>Hoteles</h5></b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-2"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-row>
              <b-col v-for="reservas in reserva" :key="reservas.id">
                <b-card-group deck>
                  <b-card
                    v-if="reservas.userId === id_user"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 350px;"
                  >
                    <b-row v-for="hoteles in hotel" :key="hoteles.id" no-gutters>
                      <b-col>
                        <b-card-img
                          v-if="hoteles._id === reservas.opcionId"
                          :src="hoteles.imgHotel"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                        <b-card-body v-if="hoteles._id === reservas.opcionId" :title=hoteles.hotel>
                          <b-card-text v-for="ciudades in ciudad" :key="ciudades.id">
                            <p v-if="hoteles.idCity === ciudades._id">
                              {{ciudades.ciudad}}
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrar = reservas._id, passBorrado()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Borrar
                          </v-btn>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-3
            variant="info"
            style="height: 100px"
            ><h5>Actividades</h5></b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-3"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-row>
              <b-col v-for="reservas in reserva" :key="reservas.id">
                <b-card-group deck>
                  <b-card
                    v-if="reservas.userId === id_user"
                    no-body
                    class="overflow-hidden"
                    style="max-width: 350px;"
                  >
                    <b-row v-for="actividades in actividad" :key="actividades.id" no-gutters>
                      <b-col>
                        <b-card-img
                          v-if="actividades._id === reservas.opcionId"
                          :src="actividades.imgActividad"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                        <b-card-body v-if="actividades._id === reservas.opcionId" :title=actividades.Actividad>
                          <b-card-text v-for="ciudades in ciudad" :key="ciudades.id">
                            <p v-if="actividades.idTown === ciudades._id">
                              {{ciudades.ciudad}}
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrar = reservas._id, passBorrado()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Borrar
                          </v-btn>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import { mdiDelete } from "@mdi/js";
export default {
  layout: "header_principal",
  data() {
    return {
      idBorrar:null,
      reserva: null,
      id_user: null,
      mdiDelete,
      ciudad: null,
      hotel: null,
      actividad: null,
      pais:null,
    };
  },

  beforeMount() {
    this.obtenerReservas();
  },

  methods: {
    async obtenerReservas() {
      const urlReservas = "https://desarrolloweb-app.herokuapp.com/api/reservas";
      const dataReservas = await axios.get(urlReservas);
      const reservas = dataReservas.data;
      //console.log(reservas[0].userId);
      this.reserva = reservas;
      this.id_user = localStorage.getItem("idUser");
      //console.log(typeof localStorage.getItem("idUser"));

      const urlCiudades = "https://desarrolloweb-app.herokuapp.com/api/destinos";
      const dataCiudades = await axios.get(urlCiudades);
      const ciudades = dataCiudades.data;
      this.ciudad = ciudades;

      const urlHoteles = "https://desarrolloweb-app.herokuapp.com/api/hoteles";
      const dataHoteles = await axios.get(urlHoteles);
      const hoteles = dataHoteles.data;
      this.hotel = hoteles;

      const urlActividades = "https://desarrolloweb-app.herokuapp.com/api/actividades";
      const dataActividades = await axios.get(urlActividades);
      const actividades = dataActividades.data;
      this.actividad = actividades;

      const urlPaises = "https://desarrolloweb-app.herokuapp.com/api/paises";
      const dataPaises = await axios.get(urlPaises);
      const paises = dataPaises.data
      this.pais = paises;
    },

    async passBorrado() {
      swal({
        title: "Esta Seguro?",
        text: "Una vez borrado, tendras que reservarlo de nuevo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://desarrolloweb-app.herokuapp.com/api/reservas/${this.idBorrar}`)

          swal("Poof! Tu destino ha sido borrado!", {
            icon: "success",
          });
          setTimeout(() => {
              window.open("../reserva", "_self");
            }, 1500);
        } else {
          swal("Tu destino esta ha salvo!");
        }
      });
    },
  },
};
</script>
