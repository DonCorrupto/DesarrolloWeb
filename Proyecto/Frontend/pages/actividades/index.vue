<template>
  <div>
    <br />
    <center>
      <h1>Actividades</h1>
    </center>
    <br>
    <b-row>
      <b-col>
        <v-card class="mx-auto" max-width="90%">
          <b-carousel
            id="carousel-1"
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
              img-src="https://picsum.photos/1750/480/?image=395"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=665"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=610"
            ></b-carousel-slide>
          </b-carousel>

          <v-card-title> Colombia </v-card-title>

          <v-card-subtitle> Actividades </v-card-subtitle>

          <v-card-actions>
            <v-btn style="color: orange" text @click="show1 = !show1">
              Explore
              <v-icon>{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <b-row>
                <b-col v-for="item in items" :key="item.id" md="4">
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://www.semana.com/resizer/2noyXlnQe0xA-d-VdDa6-acgYhk=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/KI2722K53VBFVN7BR7OMCXSPWM.jpg"
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="Medellín">
                          <b-card-text>
                            This is a wider card with supporting text as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </b-card-text>
                          <v-btn @click="elegirActividad()" style="color: purple" text> Escoger </v-btn>
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
        
        <br>
        <v-card class="mx-auto" max-width="90%">
          <b-carousel
            id="carousel-1"
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
              img-src="https://picsum.photos/1750/480/?image=452"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=638"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=651"
            ></b-carousel-slide>
          </b-carousel>

          <v-card-title> Canada </v-card-title>

          <v-card-subtitle> Actividades </v-card-subtitle>

          <v-card-actions>
            <v-btn style="color: orange" text @click="show2 = !show2">
              Explore
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <b-row>
                <b-col v-for="item in items" :key="item.id" md="4">
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://www.semana.com/resizer/2noyXlnQe0xA-d-VdDa6-acgYhk=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/KI2722K53VBFVN7BR7OMCXSPWM.jpg"
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="Medellín">
                          <b-card-text>
                            This is a wider card with supporting text as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </b-card-text>
                          <v-btn @click="elegirActividad()" style="color: purple" text> Escoger </v-btn>
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

        <br>
        <v-card class="mx-auto" max-width="90%">
          <b-carousel
            id="carousel-1"
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
              img-src="https://picsum.photos/1750/480/?image=643"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=645"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://picsum.photos/1750/480/?image=58"
            ></b-carousel-slide>
          </b-carousel>

          <v-card-title> Jamaica </v-card-title>

          <v-card-subtitle> Actividades </v-card-subtitle>

          <v-card-actions>
            <v-btn style="color: orange" text @click="show3 = !show3">
              Explore
              <v-icon>{{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <b-row>
                <b-col v-for="item in items" :key="item.id" md="4">
                  <b-card
                    no-body
                    class="overflow-hidden"
                    style="max-width: 540px; margin-left: 1%"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <b-card-img
                          src="https://www.semana.com/resizer/2noyXlnQe0xA-d-VdDa6-acgYhk=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/KI2722K53VBFVN7BR7OMCXSPWM.jpg"
                          alt="Image"
                          class="rounded-0"
                          style="height: 200px"
                        ></b-card-img>
                      </b-col>
                      <b-col md="6">
                        <b-card-body title="Medellín">
                          <b-card-text>
                            This is a wider card with supporting text as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </b-card-text>
                          <v-btn @click="elegirActividad()" style="color: purple" text> Escoger </v-btn>
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

      </b-col>
    </b-row>
    <br />
    <Nuxt />
  </div>
</template>


<script>
export default {
  layout: "header_principal",

  data() {
    return {
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
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    async elegirActividad(){
      swal("Good job!", "You clicked the button!", "success");
    },
  },
};
</script>