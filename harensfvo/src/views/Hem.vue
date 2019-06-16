<template>
  <div>
    <Carousel />
      <div class="cardContent">
      <v-layout justify-center wrap row>
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
                <span><strong class="greenCyan--text">{{ card.title }}</strong></span>
              </div>
            </v-card-title>

            <v-card-text class="cardText">
              <div>
                {{ card.text }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn flat router :to="card.route" class="greenCyan--text">Läs mer</v-btn>
            </v-card-actions>
          </v-card>
      </v-layout>
    </div>
    <v-layout justify-center wrap row>
        <div class="containerStyle containerText">
          <h1 class="greenCyan--text">Fakta &amp; Djupkarta</h1>
          <table>   
            <tr v-for="fact in facts" :key="fact.id">
              <td>{{ fact.title }}</td>
              <td>{{ fact.value }}</td>
            </tr> 
          </table>
        </div>
        <div class="containerStyle containerImage">
          <!-- Mobile/Tablet Image -->
          <v-img contain src="/djupkarta.png" class="image hidden-md-and-up" alt="Djupkarta över Hären" title="Djupkarta"></v-img>
          <!-- Desktop Image -->
          <v-img contain src="/djupkarta.png" class="image hidden-sm-and-down" alt="Djupkarta över Hären" title="Djupkarta"></v-img>
        </div>
    </v-layout>
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
          { title: 'Information', text: 'Hären med flera sjöars fiskevårdsområde bildades 1938. En gemensam strävan var att vårda och bevara de sjöar som vid den tiden låg inom föreningens förvaltarskap.', id: '2', img: 'https://live.staticflickr.com/65535/32808671217_2a9bd1e732_o.jpg', route: '/information' },
          { title: 'Fiskarter', text: 'I Hären finns det 8 stycken fiskarter, exempelvis Gädda och Gös.', id: '3', img: 'https://live.staticflickr.com/4752/25761962937_c5f08cb905_o.jpg', route: '/fiskarter' }
        ],

        facts: [
          { title: 'Huvudavrinningsområde', value: '101,Nissan', id: '1' },
          { title: 'Höjd över havet', value: '163m', id: '2' },
          { title: 'Areal', value: '4,01km²', id: '3' },
          { title: 'Maxdjup', value: '10,7m', id: '4' },
          { title: 'Medeldjup', value: '2,6m', id: '5' },
          { title: 'Volym i miljoner', value: '10,4m³', id: '6' },
          { title: 'Avr.-område', value: '106,9km²', id: '7' }
        ]
      }
    }
  }
</script>

<style scoped>
  .cardContent {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .card {
    width: 300px;
    margin-bottom: 20px;
  }

  .cardText {
    height: 125px;
  }

  .containerText h1 {
    text-align: center;
  }

  .containerImage {
    display: flex;
    justify-content: center;
    width: 500px;
    margin-top: 0px;
  }

  .image {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    width: 260px;
    background-color: #fff;
  }

  table {
    background: #fff;
  }

  thead, tbody, tfoot, tr, td, th {
    text-align: center;
    margin: auto;
    border: 1px solid #dedede;
    padding: 1rem;
    width: 50%;
  }

  .table    { display: table; width: 50%; }
  .tr       { display: table-row;  }
  .thead    { display: table-header-group }
  .tbody    { display: table-row-group }
  .tfoot    { display: table-footer-group }
  .col      { display: table-column }
  .colgroup { display: table-column-group }
  .td, .th  { display: table-cell; width: 50%; }
  .caption  { display: table-caption }

  .table,
  .thead,
  .tbody,
  .tfoot,
  .tr,
  .td,
  .th{
    text-align: center;
    margin: auto;
    padding: 1rem;
  }

  .table{
    background: #fff;
    margin: auto;
    border:none;
    padding: 0;
    margin-bottom: 5rem;
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

    .containerText h1 {
      text-align: start;
    }

    .containerText {
      width: 300px;
    }

    .image {
      height: 700px;
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

    .containerText h1 {
      text-align: start;
    }

    .image {
      height: 70%;
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

    .containerStyle, .containerText {
      width: 320px;
    }

    .containerText h1 {
      text-align: start;
    }

    .image {
      height: 600px;
    }
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