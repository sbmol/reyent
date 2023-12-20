<template>
  <div class="container">
        <header>
        <div class="navHeader borderBottom">
         <div class="row">
          <li class="listUl">
            <span><i class="fa-brands fa-whatsapp fa-lg"> </i></span>
          </li>
          <li class="listUl">
            <span><img src="../assets/py.png" alt="" class="flag"> <a href="https://wa.me//+595991423174" class="">+ (595) 991 xxx xxx</a></span>
          </li>
        </div>
        <div class="row">
          <ul>
            <li class="listUl">
              <span><i class="fa-brands fa-instagram fa-lg"></i></span>
            </li>
            <li class="listUl">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </li>
            <div class="listUl">
              <i class="fa-brands fa-tiktok fa-lg"></i>
            </div>
          </ul>
        </div>
        </div>
        <div class="navHeader">
          <div class="row">
                <ul class="listUl">
                  <li class="listUl"><img src="../assets/Reyent6.png" alt="" class="imgLogo"></li>
                </ul>
          </div>
          <div class="row">
            <li class="listUl"><a href="#">Inicio</a></li>
            <li class="listUl"><a href="#">Nosotros</a></li>
            <li class="listUl"><a href="#">Flota</a></li>
            <li class="listUl"><a href="#">Contacto</a></li>
          </div>
         
            </div>
           
          </header>
          <div class="masterhead">
              <div class="rowContainer">
                <h1>ALQUILER DE AUTOS</h1>
                <h3><span class="titleEffect">ECONOMICOS</span></h3>
                <p class="">Consegui el mejor precio del mercado, disponible para entrega en Asuncion y gran Asuncion.</p>
                <br>
                <a href="" class="btnColor">SOLICITAR COTIZACION</a>
                
              </div>
            </div>
    
      </div>
</template>
<script>
export default {
  
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

*{
  font-family: 'Nunito', sans-serif;
}

body{
  padding: 0;
  margin: 0;
  background: url('../assets/fondo.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: 500px;
  background-attachment: fixed;
  
}

.navHeader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: #F3F8FF;
 
}
.borderBottom{
  border-bottom: 1px rgba(9, 38, 53, 0.2) solid;
}
.navHeaderColor{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: #FF6600;
  
}
.textColor {
  color:#F3F8FF !important;
}

.listUl{
  display: inline-block;
  padding: 0 10px 0 10px;
  color: #092635;
  
}
.listLogo{
  display: flex;
  text-align: center;
  width: 200px;
  height: 200px;

}
.flag{
  width: 15px;
  height: 15px;
}
a:hover{
  border-bottom: 4px #FF6600 solid;
  transition: 5.ms;
  color: #092635;
  -ms-text-kashida-space: inherit;
  
}
a {
  text-decoration: none;
  color:#092635;
  font-weight: bold;
  font-size: 18px;
}
.row{
  display: flex;
  align-items: center;
}
.imgLogo{
  width: 15em;
  height: 5em;
}

/* MASTERHEAD INSIDE HEADER */
.masterhead{
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 400px;
  color: #000;
  justify-content: right;
  align-items: center;
  padding: 50px;
}
.rowContainer{
  width: 45%;
  height: 300px;
  font-size: large;
  font-weight: bold;
  color: #092635;
  background-color: rgba(243, 248, 255, 0.5);
  padding: 10px;
  border-radius: 25px;
  

  /* border: 2px #092635 solid; */
}
.rowCenter{
  padding: 25px;
  text-align: center;
  align-items: center;
}
.imgRow{
  width: 25rem;
  height: 15em;
}
.titleEffect{
  background: #FF6600;
  padding: 5px;
  color: #fff;
  
}
.titleEffect2{
  background: rgba(255, 102, 0, 0.5);
  padding: 5px;
  color: #092635;
  border-radius: 50px;
  
}
.btnColor{
  padding: 10px;
  background-color: #092635;
  color: #F3F8FF;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}
.btnColor:hover{
  background-color: #FF6600;
  color: #092635;
  border-bottom: none;
  
  
}


/* header responsive  */
@media only screen and (max-width: 768px) {

  .navHeader{
    font-size: 10px;
    flex-direction: row;
  }

}
  
</style>