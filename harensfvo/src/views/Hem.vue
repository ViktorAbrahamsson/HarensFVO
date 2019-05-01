<template>
  <div>
    <Carousel />
      <div class="cardContent">
      <v-layout justify-center wrap>

          <v-card class="card" v-for="card in cards" :key="card.id">
            <v-img
              class="white--text"
              height="200px"
              :src="card.img"
            >
              <v-container fill-height fluid>
              </v-container>
            </v-img>

            <v-card-title>
              <div>
                <span><strong>{{ card.title }}</strong></span>
              </div>
            </v-card-title>

            <v-card-text class="cardText">
              <div>
                {{ card.text }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn flat router :to="card.route">Läs mer</v-btn>
            </v-card-actions>
          </v-card>
        
      </v-layout>
    </div>
  </div>
</template>

<script>
  import Carousel from '../components/Carousel'

  export default {
    components: {
      Carousel
    },
    data() {
      return {
        cards: [
          { title: 'Fiskekort & Regler', text: 'Här kan du ta reda på alla gällande priser och regler som är kopplade till fisket i Hären.', id: '1', img: 'https://images.pexels.com/photos/294674/pexels-photo-294674.jpeg?cs=srgb&dl=activity-adult-bait-294674.jpg&fm=jpg', route: '/fiskekort' },
          { title: 'Historia', text: 'Hären med flera sjöars fiskevårdsområde bildades 1938. En gemensam strävan var att vårda och bevara de sjöar som vid den tiden låg inom föreningens förvaltarskap.', id: '2', img: 'https://live.staticflickr.com/65535/32808671217_2a9bd1e732_o.jpg', route: '/historia' },
          { title: 'Fiskarter', text: 'I Hären finns det 8 stycken fiskarter, exempelvis Gädda och Gös.', id: '3', img: 'https://live.staticflickr.com/4752/25761962937_c5f08cb905_o.jpg', route: '/fiskarter' }
        ]
      }
    }
  }
</script>

<style scoped>
  .cardContent {
    margin-top: 20px;
  }

  .card {
    width: 300px;
    margin-bottom: 20px;
  }

  .cardText {
    height: 125px;
  }

  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */
  @media (min-width: 1281px) {
    .card {
      width: 350px;
      margin-right: 30px;
    }
  }

  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  @media (min-width: 1025px) and (max-width: 1280px) {
    .card {
      width: 325px;
      margin-right: 20px;
    }
  }

  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) {
    .card {
      width: 225px;
      margin-right: 10px;
    }

    .cardText {
      height: 160px;
    }
  }

</style>