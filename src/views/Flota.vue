<template>
  <div>
    <h2>Hola soy la flota que flota</h2>
    <div>
    <h2>Lista de Flotas</h2>
    <ul>
      <li v-for="item in flotum" :key="item.id" class="txtFlota">
      {{ item.car_brand }} - {{ item.car_model }} - {{ item.car_year }}
      <p v-if="item.categoryInfo">
          Category Name: {{ item.categoryInfo.cat_name || 'N/A' }}
        </p>
        <p v-if="item.categoryInfo">
          Category Price: {{ item.categoryInfo.cat_price || 'N/A' }}
        </p>
      </li>
    </ul>
    <ul>
      <li v-for="add in add_values" :key="add.id" class="txtFlota">
        Titulo addicional: {{ add.add_name  }} | Valor por dia: Gs. {{ add.price }}
      </li>
    </ul>
    <h3>Lugares de alquiler</h3>
    <ol>
      <li v-for="places in viewPlaces" :key="places.id" class="txtFlota">
        Lugar: {{ places.place }} - Costo entrega: {{ places.place_price }}

      </li>
    </ol>
  </div>
    
  </div>
  <!-- <Reservation :additionalData="add_values" :placesData="viewPlaces" /> -->
  
 
  
</template>
<script>
// import Reservation from '../components/Reservation.vue'
import axios from 'axios';
export default {
  data(){
    return{
      flotum: [],
      add_values: [],
      viewPlaces: [],
    };
    
  },
  mounted(){
    axios.get('http://localhost:3000', {params: {include: 'category'}})
    .then(response =>{
     
      this.flotum = response.data;
      console.log("API RESPONSE:", response.data)
      this.flotum.forEach(item => {
        axios.get(`http://localhost:3000/categories/${item.category_id}`)
        .then(categoryResponse => {
          item.categoryInfo = categoryResponse.data;
        }).catch(error =>{
          console.error(error);
        })
      })
    }).catch(error => {
      console.error(error);
    });
    // From here the additionals values to catch 
    axios.get('http://localhost:3000/add_values')
    .then(res => {
      this.add_values = res.data;
      console.log(this.add_values)
    }).catch(err => {
      console.log(err);
    });
    // from here the rental places to catch
    axios.get('http://localhost:3000/view_places')
    .then(response => {
      this.viewPlaces = response.data;
      console.log(this.viewPlaces)
    }).catch(error => {
      console.log(error);
    })
  },
  components: {
    Reservation,
  }
  
};
</script>
<style>
h2{
  color: #fff;
}
.txtFlota{
  color: #fff;
}
  
</style>