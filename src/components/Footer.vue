<template>
  <div class="footerContainer">
    <div class="footerBox">

      <div class="footerCard">
        <img src="../assets/reyent.png" alt="reyent" class="imgFooter">
        <p class="txtSmall">
          Es un servicio de alquiler de automóviles a nivel nacional, contamos con una gran variedad de modelos a un precio accesible y razonable.</p>
      </div>
    </div>
    <div class="footerBox">
      <div class="footerCard">
        <p><b>Encontramos en:</b></p>
        <p class="txtSmall">Calle Jose Falcon entre Alberdi y Chile</p>
        <p class="txtSmall"><b>Lunes a Viernes</b></p>
        <p class="txtSmall boxHour">08:00 a 18:00HS.</p>
        <p class="txtSmall "><b>Sabados</b></p>
        <p class="txtSmall boxHour">08:00 a 12:00hs</p>
      </div>
    </div>
    <div class="footerBox">
      <div class="footerCard">
          <p class="txtSmall"><b>Seguinos en nuestras redes:</b></p>
          <i class="fa-brands fa-facebook fa-xl paddingIcons"></i> <i class="fa-brands fa-instagram fa-xl paddingIcons"></i>
          <i class="fa-brands fa-x fa-xl paddingIcons"></i>
          <p class="txtSmall"><b>Contactos:</b></p>
          <p class="txtSmall">Emergencias 24/7</p>
          <span class="txtSmall"> <i class="fa-brands fa-whatsapp">+(595)971 593188</i></span>
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
 flex-direction: row;
 background-color: #F3F8FF;
 justify-content: center;
 box-sizing: border-box;
 text-align: center;
 border-top: 2px solid #bed635;
 
  
}
.footerBox{
  padding: 20px;
  width: calc(100%/3);


}
.footerCard{
  padding: 10px;
}
.imgFooter{
  width: 10em;
  height: auto;
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
@media screen and (max-width: 768px){
  .footerBox{
    max-width: 100%;
  }

}

@media screen and (max-width: 480px){
  .footerContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footerBox{
    width: 80%;
  }
  
 
}
</style>