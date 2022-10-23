<template>
    <div>
        <b-carousel
			id="carousel-fade"
			style="text-shadow: 0px 0px 2px #000"
			fade
			indicators
			img-width="1024"
			img-height="480"
		>
			<b-carousel-slide
			caption="Destinos"
			img-src="https://picsum.photos/3000/1000/?image=100"
			></b-carousel-slide>
			<b-carousel-slide
			caption="Hoteles"
			img-src="https://picsum.photos/3000/1000/?image=164"
			></b-carousel-slide>
			<b-carousel-slide
			caption="Actividades"
			img-src="https://picsum.photos/3000/1000/?image=174"
			></b-carousel-slide>
		</b-carousel>
		<br>
		<center>
		<h1>Nuevos Destinos, Hoteles y Actividades</h1>
		</center>
		<br>
		<div style="display:flex">
			<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://media.istockphoto.com/photos/beautiful-sunset-over-cartagena-colombia-picture-id1148861090?k=20&m=1148861090&s=612x612&w=0&h=tnBj9jgcNH0WZIVr3xAVFv-tbYQIEKLnhcgJatoe4Y4="
			>
			<v-card-title style="color:white">
				Destinos
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Colombia</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Whitsunday Island, Whitsunday Islands</div>
			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
				
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>

		<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://www.lugaresdenieve.com/sites/default/files/imagenes-reportajes/whistler-village.jpg"
			>
			<v-card-title style="color:white">
				Hoteles
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Canada</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Moose Hotel and Suites</div>

			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
				
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>

		<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://www.lugaresdenieve.com/sites/default/files/whistler-heliskiing_0.jpg"
			>
			<v-card-title style="color:white">
				Actividades
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Suiza</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Snowboarding</div>

			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
				
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>
		</div>

		<br>
		<div style="display:flex">
			<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://www.egiptoexclusivo.com/wp-content/uploads/2022/08/historia-del-antiguo-egipto.jpg"
			>
			<v-card-title style="color:white">
				Destinos
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Egipto</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Whitsunday Island, Whitsunday Islands</div>
			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>

		<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://www.exoticca.com/es/blog/wp-content/uploads/2018/07/02.06.-EXOTICCA.jpg"
			>
			<v-card-title style="color:white">
				Hoteles
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Indonesia</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Moose Hotel and Suites</div>

			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>

		<v-card
			class="mx-auto"
			max-width="400"
		>
			<v-img
			height="400px"
			src="https://sobreaustralia.com/wp-content/uploads/2012/01/surf-australia1.jpg"
			>
			<v-card-title style="color:white">
				Actividades
			</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">
			<h6>Australia</h6>
			</v-card-subtitle>

			<v-card-text style="color:black">
			<div>Surfing</div>

			<br>
			</v-card-text>

			<v-card-actions>
			<v-btn
				style="color:orange"
				text
			>
				<!--Explore-->
			</v-btn>
			</v-card-actions>
		</v-card>
		</div>
		
		<br>
        <Nuxt />
    </div>
</template>

<script>
import swal from 'sweetalert';

export default {
    layout: "header_index",

   data () {
    },

	beforeMount(){
	},

	methods:{
	}
}
</script>

<style>
.margen{
  margin: 1%;
}

</style>