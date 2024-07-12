<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { auth } from '.firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Successfully logged in!');
  } catch (error) {
    console.error('Error during login:', error.message);
  }
};
</script>
