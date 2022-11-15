<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>ViajaCon</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="passDestinos()">Destinos</b-nav-item>
          <b-nav-item @click="passHoteles()">Hoteles</b-nav-item>
          <b-nav-item @click="passActividades()">Actividades</b-nav-item>
          <b-nav-item v-if="tipo === null" @click="passMisReserva()">Mis Reservas</b-nav-item>
          <b-nav-item v-if="tipo !== null" @click="passAdmin()">Panel de Administrador</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="tipo !== null" @click="subirDestinos()">Subir Destinos</b-nav-item>
          <b-nav-item v-if="tipo !== null" @click="subirHoteles()">Subir Hoteles</b-nav-item>
          <b-nav-item v-if="tipo !== null" @click="subirActividades()">Subir Acividades</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{user}}</em>
            </template>
            <b-dropdown-item @click="cerrarSesion()"
              >Cerrar Sesión</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    user: null,
    tipo: null,
  }),

  beforeMount() {
    this.obtenerUser()
  },

  methods: {
    async obtenerUser (){
      this.user = localStorage.getItem("name");
      this.tipo = localStorage.getItem("tipo");      
      if (localStorage.getItem("name") == null) {
        window.open("../login/iniciarSesion", "_self");
      }
      if (localStorage.getItem("tipo") !== "ADMIN") {
        this.tipo = null;
      }
    },

    async passDestinos() {
      window.open("destinos", "_self");
    },

    async passHoteles() {
      window.open("hoteles", "_self");
    },

    async passActividades() {
      window.open("actividades", "_self");
    },

    async passMisReserva() {
      window.open("reserva", "_self");
    },

    async passAdmin() {
      window.open("pagAdmin", "_self");
    },

    async subirDestinos() {
      window.open("subirInfo/destinos", "_self");
    },

    async subirHoteles() {
      window.open("subirInfo/hoteles", "_self");
    },

    async subirActividades() {
      window.open("subirInfo/actividades", "_self");
    },

    async cerrarSesion() {
      localStorage.clear();
      swal("Sesión Cerrada!", "Tu Sesión ha sido cerrada!", "success");
      setTimeout(() => {
        window.open("../login/iniciarSesion", "_self");
      }, 2000);
    },
  },
};
</script>
