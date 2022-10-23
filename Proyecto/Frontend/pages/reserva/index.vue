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
              <b-col>
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
                <br />
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
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
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-row>
              <b-col>
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
                <br />
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
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
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-row>
              <b-col>
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
                <br />
                <v-card class="mx-auto" max-width="344" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">OVERLINE</div>
                      <v-list-item-title class="text-h5 mb-1">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                    ></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined rounded text> Borrar </v-btn>
                  </v-card-actions>
                </v-card>
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
export default {
  layout: "header_principal",
  data() {
    return {
      text: `
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
            brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
            wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
            vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
            synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
    };
  },

  beforeMount() {},

  methods: {},
};
</script>

<style>
.margen {
  margin: 1%;
}
.btnDestinos {
  border: 3px solid rgba(100, 100, 100, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  width: 300px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-size: 300%;
}

.btn:hover {
  background-position: right;
}

.btn1 {
  background-image: linear-gradient(to left, #00b7da, #161569, #00b7da);
}
</style>