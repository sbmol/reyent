<template>
  <div class="whoContainer" id="nosotros">
    <div class="rowWhoContainer">
      <img src="../assets/carrental.jpg" alt="" class="imgRental">
    </div>
    <div class="rowWhoContainer">
      <div class="whoCard">
        <h2><span class="titleWhoColor">REYENT</span></h2><br>
      <p class="pWho">Bienvenidos a nuestra empresa, donde la excelencia y la innovación convergen para ofrecerte una experiencia única en movilidad! Fundada hace tres años en la vibrante ciudad de Asunción, Paraguay, nos enorgullece destacar como líderes en el mercado automotriz local.</p>
      <p class="pWho">Imagínate explorando la belleza de Paraguay al volante de nuestra moderna flota de autos nuevos. En estos tres años de trayectoria, hemos dedicado nuestro esfuerzo a proporcionarte no solo vehículos de última generación, sino también un servicio que supera tus expectativas.</p>
      <p class="pWho">Nos apasiona brindar soluciones de movilidad que se adapten a tus necesidades, ya sea un viaje de negocios, unas vacaciones en familia o simplemente un paseo por la ciudad. Con un compromiso inquebrantable con la calidad, cada vehículo en nuestra flota refleja nuestro deseo de proporcionarte la mejor experiencia de conducción posible.

      En nuestra empresa, no solo valoramos la eficiencia y la comodidad, sino también la conexión con nuestra querida comunidad. Creemos que cada kilómetro recorrido es una oportunidad para crear recuerdos inolvidables y contribuir al desarrollo sostenible de Asunción.</p>
      </div>
    </div>


    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.whoContainer{
  display: flex;
  flex-direction: row;
  background: linear-gradient(to left, #191919);
  background-attachment: fixed;
  background-size: cover;
  color: #FAFAFA;

  
}
.rowWhoContainer{
  display: flex;
  flex: auto;
  padding: 0px 10px 0px 10px;
  justify-content: space-around
}
.whoCard{
  flex-direction: column;
  padding: 10px;
  
}
.imgRental{
  background-size: cover;
  width: 500px;
  height: auto;
}
.titleWhoColor{
  color: #FAFAFA;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 36px;
}
.pWho{
  font-weight: bold;

}
@media only screen and (max-width: 768px){
  .whoContainer{
    display: flex;
    flex-direction: column;
  }
  .imgRental{
    max-width: 100%;
  }
}
@media only screen and(max-width: 480px){
  .imgRental{
    max-width: 50%;
  }
}
  
</style>