<template>
<div>
    <b-row>
      <b-col v-for="network in networks" :key="network.id">
        <b-card-group deck>
          <b-card 
          :title="network.name" 
          style="width: 300px; margin-left:40px; margin-top:4%" 
          >
            <b-card-text>
              <h6>Nombre de la compañia: {{Array.isArray(network.company)?network.company[0]:network.company}}</h6>
            </b-card-text>
            <template #footer>
              <small>{{network.location.country}} ({{network.location.city}})</small>
            </template>
            <br>
            <b-button @click="idNet=network.id, company=network.company, getStationsNetworks()" v-b-modal.modal-xl variant="primary">Mostrar Estaciones</b-button>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-modal id="modal-xl" size="xl" :title="company">
      <h5>Total de bicicletas libres: {{bicLibres}}</h5>
      <h5>Total de espacios libres: {{spaceLibres}}</h5>
      <br>
      <div class="accordion" role="tablist" v-for="(station, index) in stations" :key="station.id">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="'accordion' + index" variant="dark">{{station.name}}</b-button>
          </b-card-header>
          <b-collapse :id="'accordion' + index"  accordion="my-accordion" role="tabpanel"><!-- ARREGLAR PARA QUE EL CLICK SEA INDEPENDIENTE ID Y V-B-TOOGLE-->
            <b-card-body>
              <b-card-text>{{station.timestamp}}</b-card-text>
              <b-card-text>
                <h6>Bicicletas Libres: {{station.free_bikes}}</h6>
                <h6 v-if="station.empty_slots == null">Espacios Libres: 0</h6>
                <h6 v-else>Espacios Libres: {{station.empty_slots}}</h6>
                <h6>Total de Espacios: {{station.free_bikes + station.empty_slots}}</h6>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-modal>
    <Nuxt />
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "default",
  data(){
    return {
      networks: [],
      idNet : null,
      company : null, 
      stations : [],
      bicLibres: null,
      spaceLibres:null,
    }
  }, 

 beforeMount(){
    this.getTodosNetworks();
    this.getStationsNetworks();
  },

  methods:{
    async getTodosNetworks(){
      const url = "http://api.citybik.es/v2/networks";
      const response = await axios.get(url);
      console.log(response);
      this.networks = response.data.networks;
    },

    //movePag(){
    //  //console.log(this.idNet);
    //  localStorage.setItem("id", JSON.stringify(this.idNet));
    //  localStorage.setItem("compañia", JSON.stringify(this.company));
    //  window.open("estaciones", "_self");
    //},

    // Obtener los datos del total de bicicletas libres y espacios libres
    async getStationsNetworks(){
      const url = `http://api.citybik.es/v2/networks/${this.idNet}`;
      const response = await axios.get(url);
      console.log(response);

      const datos = await response.data.network.stations;
      //console.log(datos);
      this.stations = datos;

      var contador_bikes = null;
      var contador_space = 0;

      for (const n in datos ) {
        //console.log(response.data.network.stations[info].empty_slots);
        //console.log(response.data.network.stations[info].free_bikes);
        contador_bikes += response.data.network.stations[n].free_bikes
        if (response.data.network.stations[n].empty_slots != null){
          contador_space += response.data.network.stations[n].empty_slots
        } 
      }
      this.bicLibres = contador_bikes;
      this.spaceLibres = contador_space;
      console.log(contador_bikes);
      console.log(contador_space);

    },
  },
}
</script>



  
