<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>ViajaCon</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-text>Navbar text</b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <div>
                    <b-button pill variant="outline-secondary">Sign in</b-button>
                    <b-button pill>Sign up</b-button>
                </div>
                </b-nav-form>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <Nuxt />
        <v-footer
            dark
            padless
        >
            <v-card
            flat
            tile
            class="indigo lighten-1 white--text text-center"
            >
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
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

