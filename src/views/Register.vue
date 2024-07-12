<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { auth } from 'firebase';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const register = async () => {
  try {
    await createUserWithEmailAndPassword(getAuth, email.value, password.value);
    console.log('Successfully registered!');
  } catch (error) {
    console.error('Error during registration:', error.message);
  }
};
</script>
