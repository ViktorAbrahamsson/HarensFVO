<template>
  <v-app light>
    <Navbar />
    <v-content>
      <router-view></router-view>
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