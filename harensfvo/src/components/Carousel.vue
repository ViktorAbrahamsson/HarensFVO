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
            src: 'https://live.staticflickr.com/4752/25761962937_c5f08cb905_o.jpg'
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
