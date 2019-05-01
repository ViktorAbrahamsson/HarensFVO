<template>
  <v-carousel class="carousel">
    <v-carousel-item
      v-for="(item,i) in items"
      :src="item.src"
      :key="i"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [ /* Copyrighted images from flickr that I have uploaded. */
          { 
            src: 'https://live.staticflickr.com/65535/33874972208_250790a7d9_o.png'
          },
          {
            src: 'https://live.staticflickr.com/4794/40590585442_8621b68613_o.jpg'
          },
          {
            src: 'https://live.staticflickr.com/4650/40590587252_14aff04ecb_o.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .carousel{
    min-width: 100%;
  }
</style>
