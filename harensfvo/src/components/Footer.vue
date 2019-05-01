<template>
  <v-footer
    class="footer"
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="greenCyan">
        <strong class="subheading footerTitleText">Kontakta oss</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="footerText">
          <address>
              <p><em>Ordförande:</em> Göran Ericsson</p>
              <p><em>Telefon:</em> 072-249 27 12</p>
              <p><em>Email: </em> <a href="mailto:goran@harensten.se">goran@harensten.se</a></p>
          </address><br/>
          <address>
              <p><em>Webmaster:</em> Viktor Abrahamsson</p>
              <p><em>Telefon:</em> 070-612 93 98</p>
              <p><em>Email: </em> <a href="mailto:wicke.abrahamsson@gmail.com">wicke.abrahamsson@gmail.com</a></p>
          </address>
      </v-card-text>

      <v-card-actions class="footerCC justify-center">
        &copy;2019 — <strong>HärensFVO</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>

<style scoped>

    .footerTitleText {
        margin-left: 50px;
    }

    .footerText {
        background: #222;
        font-size: 17px;
        display: flex;
        flex-wrap: wrap;
    }

    .footerText address {
        margin-left: 50px;
    }

    .footerCC {
        background: #161616;
    }

    a {
        color: #ffffff;
    }

    a:hover {
        color: #ffffff;
    }
    
</style>