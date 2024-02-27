<template>


</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      flota: [],
      places: [],
      reservation: [],
    };
  },
  mounted() {
    this.loadFlota();
    this.loadPlaces();
    this.loadReservation();
  },
  methods: {
    loadFlota() {
      axios.get('http://localhost:3000')
        .then(response => {
          this.flota = response.data;
          console.log("cars:", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadPlaces() {
      axios.get('http://localhost:3000/view_places')
        .then(response => {
          this.places = response.data;
          console.log("places:", this.places);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadReservation() {
      axios.get('http://localhost:3000/reservation_view')
        .then(res => {
          this.reservation = res.data;
          console.log("reservas:", this.reservation);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
/* Tus estilos CSS aquí */
</style>
