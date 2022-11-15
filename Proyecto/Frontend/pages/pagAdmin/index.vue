<template>
  <div>
    <center>
      <h1>Panel de Administrador</h1>
    </center>
    <br />
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-1
            variant="light"
            style="height: 100px"
            ><h3>Destinos</h3></b-button
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
              <b-col v-for="paises in pais" :key="paises.id">
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src=paises.imgPais
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=paises.pais>
                          <b-card-text v-for="ciudades in ciudad" :key="ciudades.id">
                            <p v-if="ciudades.idPais === paises._id">
                              {{ciudades.ciudad}}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <v-btn
                                class="mx-2"
                                fab
                                style="background-color: #e30000"
                                color="primary"
                                x-small
                                @click="idBorrarCiudad = ciudades._id ,passBorradoCiudad()"
                              >
                                <v-icon dark> {{ mdiDelete }} </v-icon>
                              </v-btn>
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrarPais = paises._id, passBorradoPais()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Delete
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
    <br />
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-2
            variant="light"
            style="height: 100px"
            ><h3>Hoteles</h3></b-button
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
              <b-col v-for="hoteles in hotel" :key="hoteles.id">
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src=hoteles.imgHotel
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=hoteles.hotel>
                          <b-card-text v-for="ciudades in ciudad" :key="ciudades.id">
                            <p v-if="hoteles.idCity === ciudades._id">
                              {{ciudades.ciudad}}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrarHotel = hoteles._id, passBorradoHotel()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Delete
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
    <br />
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button
            block
            v-b-toggle.accordion-3
            variant="light"
            style="height: 100px"
            ><h3>Actividades</h3></b-button
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
              <b-col v-for="actividades in actividad" :key="actividades.id">
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          :src=actividades.imgActividad
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title=actividades.Actividad>
                          <b-card-text v-for="ciudades in ciudad" :key="ciudades.id">
                            <p v-if="actividades.idTown === ciudades._id">
                              {{ciudades.ciudad}}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="idBorrarActividad = actividades._id, passBorradoActividad()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Delete
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
import { mdiCommentEdit } from "@mdi/js";
export default {
  layout: "header_principal",
  data() {
    return {
      dialog: false,
      idBorrarCiudad: null,
      idEditarCiudad: null,
      idBorrarPais: null,
      idBorrarHotel: null,
      idBorrarActividad: null,
      mdiDelete,
      mdiCommentEdit,
      ciudad: null,
      hotel: null,
      actividad: null,
      pais: null,
    };
  },

  beforeMount() {
    this.obtener();
  },

  methods: {
    async obtener() {
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
      const paises = dataPaises.data;
      this.pais = paises;

      const tipo = localStorage.getItem("tipo");

      if (tipo === null) {
        window.open("../login/iniciarSesion", "_self");
        localStorage.clear();
      }
    },
    async passBorradoCiudad() {
      swal({
        title: "Esta Seguro?",
        text: "Una vez borrado, tendras que ingresarlo de nuevo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://desarrolloweb-app.herokuapp.com/api/destinos/${this.idBorrarCiudad}`)

          swal("Poof! La ciudad ha sido borrado!", {
            icon: "success",
          });
          setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 1500);
        } else {
          swal("La ciudad esta ha salvo!");
        }
      });
    },

    async passBorradoPais() {
      swal({
        title: "Esta Seguro?",
        text: "Una vez borrado, tendras que ingresarlo de nuevo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://desarrolloweb-app.herokuapp.com/api/paises/${this.idBorrarPais}`)

          swal("Poof! El pais ha sido borrado!", {
            icon: "success",
          });
          setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 1500);
        } else {
          swal("El pais esta ha salvo!");
        }
      });
    },

    async passBorradoHotel() {
      swal({
        title: "Esta Seguro?",
        text: "Una vez borrado, tendras que ingresarlo de nuevo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://desarrolloweb-app.herokuapp.com/api/hoteles/${this.idBorrarHotel}`)

          swal("Poof! El pais ha sido borrado!", {
            icon: "success",
          });
          setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 1500);
        } else {
          swal("El pais esta ha salvo!");
        }
      });
    },

    async passBorradoActividad() {
      swal({
        title: "Esta Seguro?",
        text: "Una vez borrado, tendras que ingresarlo de nuevo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`https://desarrolloweb-app.herokuapp.com/api/actividades/${this.idBorrarActividad}`)

          swal("Poof! La actividad ha sido borrado!", {
            icon: "success",
          });
          setTimeout(() => {
              window.open("../pagAdmin", "_self");
            }, 1500);
        } else {
          swal("La actividad esta ha salvo!");
        }
      });
    },

    async passEditarCiudad(){
      console.log(this.idEditarCiudad)
    },
  },
};
</script>

<style>
.margen {
  margin: 1%;
}
</style>