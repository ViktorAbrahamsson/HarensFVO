<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase"> <!--Title changes depending on screen size.-->
        <span id="titleMobile" class="hidden-md-and-up">Härens FVO</span>
        <span id="titleDesktop" class="hidden-sm-and-down">Härens Fiskevårdsförening</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

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

</style>