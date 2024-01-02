<template>
  <Header />
  <Masterhead />
  <Services />
  <Fleet />
  <Footer />
</template>

<script>
// @ is an alias to /src

import Masterhead from '@/components/Masterhead.vue';
import Header from '../components/Header.vue'
import Services from '../components/Services.vue'
import Fleet from '../components/Fleet.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "HomeView",
  components: {
    Header,
    Masterhead,
    Services,
    Fleet,
    Footer,
},
};
</script>
