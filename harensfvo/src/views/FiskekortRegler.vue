<template>
  <div>    
    <v-layout justify-center wrap row>
      <div class="containerStyle containerText">
        <h1 class="greenCyan--text">Fiskekort</h1>
        <table>   
          <tr v-for="fact in facts" :key="fact.id">
            <td>{{ fact.title }}</td>
            <td>{{ fact.value }}</td>
          </tr> 
        </table>
      </div>

      <div class="containerStyle containerText">
        <h1 class="greenCyan--text">Regler</h1>
        <div v-for="regel in regler" :key="regel.id" class="mt-3">
          <h2>{{ regel.title }}</h2>
          <div class="text-xs-center reglerInfo">{{ regel.value }}</div>
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
        facts: [
          { title: 'Dygnskort', value: '50kr', id: '1' },
          { title: 'Veckokort', value: '150kr', id: '2' },
          { title: 'Årskort', value: '300kr', id: '3' },
          { title: 'Angelkort', value: '100kr', id: '4' },
          { title: 'Angel ismetekort', value: '10kr', id: '5' }
        ],
        regler: [
          { title: 'Angel-ismetetävling', value: 'Klubbar, föreningar och företag. Endast intern tävling. Max 5 angel-ismete per deltagare. Avgift per påbörjat tiotal deltagare 300kr.', id: '1' },
          { title: 'Metartävling & pimpeltävling', value: 'Klubbar, föreningar eller företag. Metartävling, pimpeltävling eller annan tillställning. Per tillfälle 300kr.', id: '2' },
          { title: 'Öppna tillställningar (Tävlingar)', value: 'Klubbar eller föreningar som har öppna tillställningar (Tävlingar) 5kr/pers dock lägst 500kr.', id: '3' },
          { title: 'Korpfisketävlingar', value: 'Klubbar eller föreningar som har öppna tillställningar (Tävlingar) 5kr/pers dock lägst 500kr.', id: '4' },
          { title: 'Gästfiskekort för stugägare', value: 'Gästfiskekort för stugägare. Årskort, datum till datum, 500kr. per kort. Max 2 st per stuga Vid flera personer gäller tillköp av vanliga kort.', id: '5' },
          { title: 'Fisketillstånd Företag & Förening', value: 'Företag eller förening kan köpa årsvis fisketillståd för anställda eller medlemmar efter överenskommelse med fiskevårdsområdet.', id: '6' },
        ]
      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
    color: #26d07c;
  }

  .containerText h1 {
    text-align: center;
  }

  table {
    background: #fff;
    margin: 0 auto;
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
    .reglerInfo {
      width: 300px;
      margin: 0 auto;
    }
  }

  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  @media (min-width: 1025px) and (max-width: 1280px) {
    .reglerInfo {
      width: 300px;
      margin: 0 auto;
    }
  }

  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) {
    .reglerInfo {
      width: 300px;
      margin: 0 auto;
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
