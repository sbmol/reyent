<template class="bg">
  <div class="bg">
    <h2 class="titleFleet">Variedad de Vehiculos</h2>
    <h3>Encontra el auto mas acorde a vos, en <span class="reyentColor">Reyent</span> te ofrecemos la gamma mas versatil del mercado</h3>
    <div class="mainFleet">
    <div class="mainBox">
      <div class="fleetCard">
        
        <div>
          <img src="../assets/picanto.png" alt="picanto" class="hb20">
        </div>
        <p><span class="txtCarTitle">Kia Picanto</span></p>
        <div class="txtCentered"><img src="../assets/transmission.svg" alt="" class="icons"> TRANSMISION MECANICA</div>
        <div class="txtCentered"><img src="../assets/aa.svg" alt="" class="icons"> MOTOR 1.000 CC</div>
        <div class="txtCentered"><img src="../assets/engine.svg" alt="" class="icons"> Aire Acondicionado</div>


      </div>
    </div>
    <div class="mainBox">
      <div class="fleetCard">
        <div>
          <img src="../assets/hb20s.png" alt="" class="hb20">
        </div>
      <p><span class="txtCarTitle">Hyundai HB20s</span></p>
      <div class="txtCentered"><img src="../assets/transmission.svg" alt="" class="icons"> TRANSMISION AUTOMATICA</div>
        <div class="txtCentered"><img src="../assets/aa.svg" alt="" class="icons"> MOTOR 1.400 CC</div>
        <div class="txtCentered"><img src="../assets/engine.svg" alt="" class="icons"> Aire Acondicionado</div>
      </div>
    </div>
    <div class="mainBox">
      
      <div class="fleetCard">
        <p> <img src="../assets/creta.png" alt="" class="creta"></p>
      <p><span class="txtCarTitle">Hyundai Creta</span></p>
      <div class="txtCentered"><img src="../assets/transmission.svg" alt="" class="icons"> TRANSMISION MECANICA</div>
        <div class="txtCentered"><img src="../assets/aa.svg" alt="" class="icons"> MOTOR 2.000 CC</div>
        <div class="txtCentered"><img src="../assets/engine.svg" alt="" class="icons"> Aire Acondicionado</div>
        

      </div>
    </div>
  </div>
  </div>
  
</template>
<script>
export default {
  
}
</script>
<style >
.mainFleet{
  display: flex;
  flex-direction: row;
  background-color: #191919;
  justify-content: center;
  color: #f9f9f9
}
.mainBox{
  width: calc(100%/3);
  padding: 20px;
  align-items: center;
}
.bg{
  background-color: #191919;
  color: #f9f9f9;
  
}
.titleFleet{
  padding: 10px;
}
.reyentColor{
  color: #BED635;
  font-weight: bold;
}
.carsImg{
  width: auto;
  height: 135px;
}
.hb20{
  width: auto;
  height: 150px;
}
.creta{
  width: auto;
  height: 135px;
}
.txtCarTitle{
  color: #191919;
  background-color: #bed635;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
}
.fleetCard{
  width: 100%;
  padding: 5px;
  height: 300px;
  align-items: left;
  
}
.icons{
  width: 25px;
  height: 25px;
  padding: 0 2px 0 2px;
  
}
.txtCentered{
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  text-align: center;
  justify-content: left;
  
}
@media screen and (max-width: 768px){
  .mainFleet{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
  
</style>