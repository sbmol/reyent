<template>
    <div id="scrollToTopBtn" class="scroll-to-top-btn">
    <i class="fas fa-arrow-up"></i>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <RouterView />
  <a href="https://wa.me/595971593188" target="_blank" id="whatsapp-button">
    <i class="fa-brands fa-whatsapp fa-2x"></i>
  </a>
 

</template>
<script>
  import HomeView from './views/HomeView.vue';


  export default {
    components: {
      HomeView
    }
  };
  document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Muestra u oculta el botón basado en la posición de desplazamiento
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  // Desplázate hacia arriba cuando se hace clic en el botón
  scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
  });
});
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

  #whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366;
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    text-align: center;
  }

  #whatsapp-button:hover {
    background-color: #128C7E;
  }

  #whatsapp-button i {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  .scroll-to-top-btn {
    position: fixed;
    bottom: 15px;
    left: 20px;
    background-color: #191919;
    /* Puedes personalizar el color */
    color: #BED635;
    border: none;
    border-radius: 50%;
    padding: 15px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    display: none;
    /* El botón estará oculto inicialmente */
  }

  .scroll-to-top-btn:hover {
    background-color: #BED635;
    color: #191919;
    /* Cambia el color al pasar el ratón */
  }

  
</style>
