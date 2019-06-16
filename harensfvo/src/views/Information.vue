<template>
  <div>
    <v-layout justify-center wrap row>
      <div class="containerStyle">
        <h1 class="greenCyan--text text-xs-center">Information</h1>
        <div v-for="fact in historia" :key="fact.id">  
          <div class="text-xs-center mb-4 mt-2">{{ fact.text }}</div>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>

  export default {
    components: {
      
    },
    data() {
      return {
        historia: [
          { text: 'Hären med flera sjöars fiskevårdsområde bildades 1938. En gemensam strävan var att vårda och bevara de sjöar som vid den tiden låg inom föreningens förvaltarskap.', id: '1' },
          { text: 'Försäljningen av fiskekort kunde nu ske under mer ordnade former. Under de första åren var förvaltningen inriktad på fiskevård i form av utsättningar av gös och gädda, men också förbättring av fiskens miljöer och dess uppehållsplatser.', id: '2' },
          { text: 'Dagens förvaltning är till stor del inriktad på utvecklandet av fritidsfisket i sjön Hären med kringliggande sjöar. Fiskevården i föreningen bedrivs idag med samma grundsyfte som tidigare; att gynna förutsättningarna för fisket och arbeta för en sund fiskevård som gynnar fiskbestånden.', id: '3' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>