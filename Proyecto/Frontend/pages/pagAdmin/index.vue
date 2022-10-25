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
                    header="#Pais"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="dark"
                    footer="#button borrar "
                    footer-tag="footer"
                    footer-bg-variant="success"
                    footer-border-variant="dark"
                    title="#Ciudad"
                    style="max-width: 20rem"
                  >
                    <b-card-text>#Button de subir o borrar una ciudad</b-card-text>
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
                    header="#Hotel"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="dark"
                    footer="#button borrar "
                    footer-tag="footer"
                    footer-bg-variant="success"
                    footer-border-variant="dark"
                    title="#Ciudad"
                    style="max-width: 20rem"
                  >
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
                    header="#Ciudad"
                    header-text-variant="white"
                    header-tag="header"
                    header-bg-variant="dark"
                    footer="#button borrar "
                    footer-tag="footer"
                    footer-bg-variant="success"
                    footer-border-variant="dark"
                    title="#Actividad"
                    style="max-width: 20rem"
                  >
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
export default {
  layout: "panelAdmin",
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