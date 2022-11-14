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
              <b-col>
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://picsum.photos/400/400/?image=20"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="#Pais">
                          <b-card-text>
                            <p>
                              #Ciudades
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <v-btn
                                class="mx-2"
                                fab
                                style="background-color: #e30000"
                                color="primary"
                                x-small
                                @click="passBorrado()"
                              >
                                <v-icon dark> {{ mdiDelete }} </v-icon>
                              </v-btn>
                            </p>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="passBorrado()"
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
              <b-col>
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://picsum.photos/400/400/?image=20"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="#Hotel">
                          <b-card-text>
                            <h6>#Ciudad</h6>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="passBorrado()"
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
              <b-col>
                <b-card-group deck>
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://picsum.photos/400/400/?image=20"
                          alt="Image"
                          class="rounded-0"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="#Actividad">
                          <b-card-text>
                            <h6>#Pais</h6>
                          </b-card-text>
                          <v-btn
                            style="background-color: #e30000"
                            color="primary"
                            small
                            @click="passBorrado()"
                          >
                            <v-icon dark> {{ mdiDelete }} </v-icon>
                            Delete
                          </v-btn>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col> </b-row
            >z
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import swal from "sweetalert";
import { mdiDelete } from "@mdi/js";
export default {
  layout: "header_principal",
  data() {
    return {
      idBorrar:null,
      mdiDelete,
      ciudad: null,
      hotel: null,
      actividad: null,
      pais:null,
    };
  },

  beforeMount() {
    this.obtener()
  },

  methods: {
    async obtener() {
      const urlCiudades = "http://localhost:3001/api/destinos";
      const dataCiudades = await axios.get(urlCiudades);
      const ciudades = dataCiudades.data;
      this.ciudad = ciudades;

      const urlHoteles = "http://localhost:3001/api/hoteles";
      const dataHoteles = await axios.get(urlHoteles);
      const hoteles = dataHoteles.data;
      this.hotel = hoteles;

      const urlActividades = "http://localhost:3001/api/actividades";
      const dataActividades = await axios.get(urlActividades);
      const actividades = dataActividades.data;
      this.actividad = actividades;

      const urlPaises = "http://localhost:3001/api/paises";
      const dataPaises = await axios.get(urlPaises);
      const paises = dataPaises.data
      this.pais = paises;
    },
    async passBorrado() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    },
  },
};
</script>

<style>
.margen {
  margin: 1%;
}
</style>