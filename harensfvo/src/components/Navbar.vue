<template>
  <nav>
    <v-toolbar flat app class="toolbar">
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
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="greenCyan" right>
      <v-list class="drawerList">
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" class="listItem">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          { icon: 'home', text: 'Hem', route: '/' },
          { icon: 'book', text: 'Fiskekort & Regler', route: '/fiskekort' },
          { icon: 'info', text: 'Historia', route: '/historia' },
          { icon: 'nature', text: 'Fiskarter', route: '/fiskarter' },
          { icon: 'link', text: 'Camping', route: '/camping' },
        ]
      }
    }
  }
</script>

<style>
  .toolbar {
    border-bottom: 2px solid #26d07c;
  }

  .drawerList {
    margin-top: 50px;
  }

  .listItem {
    padding: 15px;
    border-bottom: 1px solid rgb(255, 255, 255);
  }

  .listItem:nth-child(1) {
    border-top: 1px solid rgb(255, 255, 255);
  }
</style>
