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
                            <p>#Ciudades</p>
                            <p>#Ciudades</p>
                            <p>#Ciudades</p>
                          </b-card-text>
                          <b-button variant="danger">
                            #Button Borrar
                          </b-button>
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
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
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
                          <b-button variant="danger">
                            #Button Borrar
                          </b-button>
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
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
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
                          <b-button variant="danger">
                            #Button Borrar
                          </b-button>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-card-group>
              </b-col>
            </b-row>z
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

  methods: {
    async passBorrado() {
      swal("Good job!", "You clicked the button!", "success");
    },
  },
};
</script>

<style>
.margen {
  margin: 1%;
}
</style>