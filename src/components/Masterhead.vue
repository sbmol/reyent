<template>
  <div>
    <div class="masterhead">
      <div class="rowContainer">
        <h1 class="h1Leading">RESERVA TU AUTO HOY!</h1>
        <h3><span class="txtBgColor">3X2 reservando hoy!</span></h3>
        <h3></h3>
        <p class="">Consegui el mejor precio del mercado, disponible para entrega en Asuncion y gran Asuncion.</p>
        <br>
        <a href="" class="btnColor">RESERVA AHORA</a>

      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.masterhead{
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 400px;
  color: #F3F8FF;
  justify-content: right;
  align-items: right;
  padding: 50px;
}
.rowContainer{
  width: 55%;
  max-height: 400px;
  height: 400px;
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #F3F8FF;
  /* background-color: rgba(243, 248, 255, 0.5); */
  padding: 10px;
  border-radius: 15px;
}
.h1Leading{
  letter-spacing: 2px;
}
.txtBgColor{
  background-color: #BED754;
  color: #191919;
  padding: 5px;
  
}
.btnColor{
  padding: 10px;
  background-color: #191919;
  color: #F3F8FF;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  border-left: 5px #BED754 solid;
  transform: skew(-20deg);
  
}
.btnColor:hover{
  background-color: #BED754;
  color: #191919;
  border-bottom: none;
  border-right: 5px solid #F3F8FF;
} 
</style>