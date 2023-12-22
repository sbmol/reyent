<template>
  <div class="serviceContainer" id="nosotros">
    <h2>Por que elegir nuestro servicios</h2>
    <p class="secoundaryTitle">Descubre un servicio de alquiler de automóviles excepcional con nuestro equipo experto. En <span class="txtColor">REYENT</span>, no solo encontrarás vehículos de primera categoría, sino también beneficios exclusivos diseñados para ti. Experimenta la diferencia con expertos locales que hacen que cada viaje sea especial. ¡Bienvenido a una experiencia única en cada kilómetro!</p>
    <div class="serviceBox">
      <div class="serviceCard">
        <img src="../assets/percent.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">Precios Bajos</div>
        <p class="txtServiceMute">En Reyen ofrecemos servicios de primera clase a un precio asequible.</p>
      </div>
      <div class="serviceCard">
        <img src="../assets/staff.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">Personal Calificado</div>
        <p class="txtServiceMute">
Contratamos a los mejores expertos en todo lo referente al alquiler de coches.</p>
      </div>
      <div class="serviceCard">
        <img src="../assets/message.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">Atencion 24/7</div>
        <p class="txtServiceMute">
Nuestro equipo garantiza un soporte confiable además de los servicios ofrecidos.</p>
      </div>
      <div class="serviceCard">
        <img src="../assets/location.svg"  alt="" class="svgImg">
        <div class="txtDecorationService"> Meet&Greet</div>
        <p class="txtServiceMute">Ofrecemos la entrega de nuestros vehiculos en cualquier punto de Asuncion y Gran Asuncion.</p>
      </div>
    </div>
    
  </div>

</template>
<script>
export default {
  
}
</script>
<style>

.serviceContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #F3F8FF;
  justify-content: center;

}
.serviceBox{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.serviceCard{
  flex: 0 0 20%;
  box-sizing: border-box;
  justify-content:center;
  margin: 10px;
  padding: 10px;
}

.svgImg{
  
  width: 50px;
  height: 50px;
  padding: 25px;
}
.txtDecorationService{
  background-color: #BED754;
  color: #191919;
  padding: 15px;
  font-weight: bold;

}
.txtColor{
  color:#293462;
  font-weight: bold;
}
.txtServiceMute{
  color: rgba(9, 38, 53, 0.5);
  font-size: 0.8em;
  padding-top: 20px;
}
.secoundaryTitle{
  padding: 0 40px 0 40px;
}

@media only screen and(max-width: 768px){
  .serviceContainer{
    max-width: 100%;
  }
  .serviceCard{
    width: 15%;
  }


 

}
@media only screen and(max-width: 768px){
 .serviceCard{
  flex: 0 0 48%;
 }
}
 @media only screen and(max-width: 480px){
  .serviceCard{
    flex: 0 0 100%;
  }

 }


</style>