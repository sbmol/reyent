<template>
  <div class="footerContainer">
    <div class="footerBox">
      <div class="footerCard">
        <img src="../assets/R.png" alt="reyent" class="imgFooter">
        <p class="txtSmall">
          Es un servicio de alquiler de automóviles a nivel nacional que ofrece automóviles y vehículos de cualquier tamaño y fabricación a un precio accesible y razonable.</p>
      </div>
      <div class="footerCard">
        <p><b>Encontramos en:</b></p>
        <p class="txtSmall">Calle Jose Falcon Nro. xxx entre Alberdi y Chile</p>
        <p class="txtSmall"><b>Lunes a Viernes</b></p>
        <p class="txtSmall boxHour">08:00 a 18:00HS.</p>
        <p class="txtSmall "><b>Sabados</b></p>
        <p class="txtSmall boxHour">08:00 a 12:00hs</p>
      </div>
      <div class="footerCard">
          <p class="txtSmall"><b>Seguinos en nuestras redes:</b></p>
          <i class="fa-brands fa-facebook fa-xl paddingIcons"></i> <i class="fa-brands fa-instagram fa-xl paddingIcons"></i>
          <i class="fa-brands fa-x fa-xl paddingIcons"></i>
          <p class="txtSmall"><b>Contactos:</b></p>
          <p class="txtSmall">Emergencias 24/7</p>
          <span class="txtSmall"> <i class="fa-brands fa-whatsapp">+(595)991 xxx-xxx</i></span>
      </div>
     
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.footerContainer{
  display: flex;
  background-color: #F3F8FF;
  color: #191919;
  padding: 50px;
  justify-content: center;
  
}
.footerBox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #fafafa;
  font-size: 14px;
  padding: 15px;
  align-items: flex-start;
}
.footerCard{
  padding: 10px;
  width: 30%
}
.imgFooter{
  width: 150px;
  height: 150px;
}
.txtSmall{
  font-size: small;

}
.boxHour{
  background-color: #bed635;
  padding: 5px;
}
.paddingIcons{
  padding: 10px;
  color: #191919;
  cursor: pointer;
}
@media only screen and(max-width: 768px){
  .footerCard{
    width: 100%;
  }
}
@media only screen and(max-width: 480px){
  .footerCard{
    width: 100%;
    
  }

}

</style>