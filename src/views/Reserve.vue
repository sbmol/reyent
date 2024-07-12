<template>
  <div>
    <h2>Reserva</h2>
    <form @submit.prevent="submit">
      <div>
        <label>Nombre:</label>
        <input type="text" v-model="reservation.name" required>
      </div>
      <div>
        <label>Fecha:</label>
        <input type="date" v-model="reservation.date" required>
      </div>
      <button type="submit">Reservar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { db } from '.firebase'';
import { collection, addDoc } from 'firebase/firestore';

const reservation = ref({
  name: '',
  date: ''
});

const submit = async () => {
  try {
    const docRef = await addDoc(collection(db, 'reservations'), reservation.value);
    console.log('Reserva creada con ID:', docRef.id);
    // Limpia el formulario
    reservation.value.name = '';
    reservation.value.date = '';
  } catch (error) {
    console.error('Error al crear la reserva:', error.message);
  }
};
</script>
