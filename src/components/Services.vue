<template>
  <div class="serviceContainer" id="nosotros">
    <h2 class="txtColor">PORQUE ELEGIRNOS</h2>
    <p class="secoundaryTitle">Por que somos una empresa nacional, ofrecemos servicio de alquiler de autos, donde nuestra confortable flota esta respaldada por un equipo de trabajo que se dedica o proveerle seguridad y eficiencia. Es una empresa donde encontrara que precio, servicio y confort van de la mano.
Los invitamos a  tener una experiencia única kilómetro a kilómetro por las rutas de Paraguay acompañados por nuestro staff antes y durante su viaje.
Bienvenido a <span class="txtColor">REYENT</span>, bienvenido a PARAGUAY!</p>
    <div class="serviceBox">
      <div class="serviceCard">
        <img src="../assets/percent.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">Precios Bajos</div>
        <p class="txtServiceMute">En Reyen ofrecemos servicios de primera clase a un precio accesible.</p>
      </div>
      <div class="serviceCard">
        <img src="../assets/staff.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">Personal Calificado</div>
        <p class="txtServiceMute">
Contratamos a los mejores expertos en todo lo referente al alquiler de coches.</p>
      </div>
      <div class="serviceCard">
        <img src="../assets/message.svg"  alt="" class="svgImg">
        <div class="txtDecorationService">24/7</div>
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

.button{
  width: 100px; 
  height: 30px; 
  background: #BED635;
  -webkit-transform: skew(-25deg, 0deg);
  -moz-transform: skew(-25deg, 0deg);
  -ms-transform: skew(-25deg, 0deg);
  -o-transform: skew(-25deg, 0deg);
  transform: skew(-25deg, 0deg);
}


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
  color:#191919;
  font-weight: bold;
  text-decoration: underline #BED635;
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
  .txtDecorationService{
    font-size: 10px;
  }

 }


</style>