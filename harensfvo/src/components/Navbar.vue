<template>
  <nav>
    <!-- Toolbar that display Title and Menuoptions if the screen is big enought. -->
    <v-toolbar flat app fixed class="toolbar">
      <!-- ToolbarTitle changes depending on screen size. -->
      <v-toolbar-title class="headline text-uppercase"> 
        <span id="titleMobile" class="hidden-md-and-up">Härens FVO</span>
        <span id="titleDesktop" class="hidden-sm-and-down">Härens Fiskevårdsförening</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- ToolbarItems parced out with v-for. -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat class="toolbarItem" v-for="link in links" :key="link.text" router :to="link.route">{{ link.text }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up drawerToggle" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <!-- Mobile Drawer for easier navigation. -->
    <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up greenCyan" right>
      <v-list class="drawerList">
        <v-toolbar-side-icon class="hidden-md-and-up white--text drawerToggle drawerToggleMobile" @click="drawer = !drawer"></v-toolbar-side-icon>
        <div class="drawerTiles">
          <v-list-tile class="listItem" v-for="link in links" :key="link.text" router :to="link.route">
            <!-- Icon. -->
            <v-list-tile-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <!-- Text. -->
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
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

<style scoped>
  .toolbar {
    border-bottom: 4px solid #26d07c;
  }

  .toolbarItem:hover {
    color: #26d07c;
  }

  .v-btn--active {
    color: #26d07c;
  }

  .drawerToggle:hover {
    color: #26d07c;
  }

  .drawerToggleMobile {
    margin-left: 250px;
  }

  .drawerTiles {
    margin-top: 50px;
  }

  .listItem {
    border-bottom: 1px solid rgb(255, 255, 255);
  }

  /* Clickable area of the listItem. */
  .v-list__tile {
    height: 75px;
  }

  .listItem:nth-child(1) {
    border-top: 1px solid rgb(255, 255, 255);
  }

  /* Color of the actived menuoption. */
  .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: #26d07c;
}
</style>
