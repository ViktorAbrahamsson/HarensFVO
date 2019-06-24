<template>
  <div>
    <v-layout justify-center wrap row>
        <div class="containerStyle">
          <h1 class="greenCyan--text text-xs-center">Fiskarter</h1>
          <table class="">   
            <tr v-for="fact in facts" :key="fact.id">
              <td>{{ fact.title }}</td>
            </tr> 
          </table>
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
          { title: 'Abborre', id: '1' },
          { title: 'Benlöja', id: '2' },
          { title: 'Braxen', id: '3' },
          { title: 'Gädda', id: '4' },
          { title: 'Gers', id: '5' },
          { title: 'Gös', id: '6' },
          { title: 'Lake', id: '7' },
          { title: 'Mört', id: '8' },
          { title: 'Ål', id: '9' }
        ]
      }
    }
  }
</script>

<style scoped>

  table {
    background: #fff;
    margin: 0 auto;
  }

  thead, tbody, tfoot, tr, td, th {
    text-align: center;
    margin: auto;
    border: 1px solid #dedede;
    padding: 1rem;
    width: 30%;
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
</style>