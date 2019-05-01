<template>
  <v-app light>
    <v-content>
      <Navbar />
      <Carousel />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'

export default {
  name: 'App',
  components: {
    Navbar,
    Carousel
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

  html {
    overflow-y: hidden;
  }

</style>