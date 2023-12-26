<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
<Header />
<Fleet />
<Services />
<!-- <Who /> -->

<Footer />
</template>
<script>
  import Header from './components/Header.vue'
  import Services from './components/Services.vue'
  // import Who from './components/who.vue'
  import Footer from './components/Footer.vue'
  import Fleet from './components/Fleet.vue'
  export default {
    components: {
      Header, 
      Services, 
      // Who, 
      Footer,
      Fleet,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
