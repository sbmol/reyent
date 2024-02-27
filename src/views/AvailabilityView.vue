<template>
  <div class="availableContainer">
    <h2>Buscar Disponibilidad</h2>
    <label for="category">Selecciona la categoría del vehículo:</label>
    <select v-model="selectedCategory" id="carCategory">
      <option v-for="auto in flotaData" :key="auto.id" :value="auto.categoryInfo.cat_name">
        {{ auto.categoryInfo.cat_name }}</option>
    </select>

    <button @click="searchAvailability">Buscar Disponibilidad</button>

    <div v-if="availabilityResults.length">
      <h3>Resultados de Disponibilidad</h3>
      <ul>
        <li v-for="result in availabilityResults" :key="result.id">
          {{ result.flota_nombre }} - {{ result.fecha_disponible }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No hay disponibilidad para la categoría seleccionada.</p>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      selectedCategory: null,
      availabilityResults: [],
    };
  },
 
  mounted(){
    console.log('flotaData;', this.flotaData)
  },
  methods: {
    searchAvailability() {
      if (!this.selectedCategory) {
        alert('Selecciona una categoría antes de buscar disponibilidad.');
        return;
      }

      // Realizar una solicitud a tu API para verificar la disponibilidad
      axios.get(`http://localhost:3000/reservation?category=${this.selectedCategory}`)
        .then(response => {
          this.availabilityResults = response.data;
        })
        .catch(error => {
          console.error('Error al buscar disponibilidad:', error);
          this.availabilityResults = [];
        });
    },
    
  },

  // 
  props: {
    flotaData: {
      type: Array,
      default: ()=> [],
    }
  },
 
};
</script>

<style>
  .availableContainer{
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    background-color: #FAF8EA;
    padding: 50px;
  }

</style>
