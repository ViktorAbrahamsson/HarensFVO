<template>
  <div>
    <v-layout justify-center wrap row>
      <div class="containerStyle">
        <h1 class="greenCyan--text text-xs-center mb-4">Länk till Välornas Camping</h1>
        <div class="imagePosition">
          <a target="_blank" href="https://caravanclub.se/camping/valorna/#information">
            <v-img
              contain
              src="/camping_valorna.jpg"
              alt="Välornas Camping av Västra Småland"
              title="Välornas camping"
            ></v-img>
          </a>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.imagePosition {
  max-width: 1200px;
  margin: 0 auto;
}

/* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */
@media (min-width: 1281px) {
}

/* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
@media (min-width: 1025px) and (max-width: 1280px) {
}

/* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
@media (min-width: 768px) and (max-width: 1024px) {
}

/* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
@media (min-width: 481px) and (max-width: 767px) {
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
  */
@media (min-width: 375px) and (max-width: 480px) {
}
</style>