<template>
  <v-app light>
    <v-content>
      <Navbar />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
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