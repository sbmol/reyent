<template>
  <Header/>
  <div class="containerTerms">
   <div class="termsBox">
    <h2>Términos y condiciones de <span class="titleTerm">REYENT</span></h2>
    <p><i class="fa-solid fa-angles-right arrowColor"></i> El total aproximado del alquiler está basado en la información suministrada al momento de hacer su reservación. El conductor deberá presentar una tarjeta de crédito vigente con suficiente saldo disponible, licencia de conducir vigente y una identificación oficial a la hora de aperturar el contrato. Al momento de hacer válida la reservación se deberá suscribir la apertura del contrato de arrendamiento, y otorgar un depósito con cargo a la tarjeta de crédito, en garantía del cumplimiento fiel y puntual de todas y cada una de sus obligaciones adquiridas en el Contrato de Arrendamiento.</p>
   </div>
    
  </div>
  <Footer/>
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Header,
    Footer,

  }
  
}
</script>
<style>
.containerTerms{
  display: flex;
  flex-direction: column;
  background: rgba(248, 250, 234, 0.7);
  width: 100%;
  height: 400px;
}
.termsBox{
  justify-content: center;
  text-align: left;
  padding: 100px;
}
.titleTerm{
  color: #191919;
  font-weight: 700;
  text-decoration: underline #BED635;
  
}
.arrowColor{
  color: #BED635;
  font-weight: 600;
}

  
</style>