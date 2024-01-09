<template >
  <Header />
  <div class="leasingContainer">
    <div class="leasingBox">
      <h1 class="leasingTitle">Que es el Leasing</h1>
      <p><small>El leasing de autos es un tipo de acuerdo financiero que permite a una persona o empresa utilizar un vehículo por un período de tiempo específico a cambio de pagos mensuales. También se conoce como arrendamiento a largo plazo. En lugar de comprar el vehículo directamente, el arrendatario (la persona que arrienda el automóvil) paga una tarifa regular durante el período del contrato, que generalmente varía de dos a cinco años.</small></p>
      
    </div>
    <div class="leasingBox">
      <div class="imgPosition">
        <img src="../assets/leasing.png" alt="" class="leasingImg">
      </div>
      
    </div>
    
  </div>
  <div class="leasingContainer customBgLeasing">

      <div class="leasingBox">
        <h2 class="customTitle"><i class="fa-solid fa-circle-info"></i> VENTAJAS DEL LEASING</h2>
        <p class=""><i class="fa-solid fa-check colorIcons"></i> Pagos mensuales más bajos en comparación con la compra</p>
        <p><i class="fa-solid fa-check colorIcons"></i> Acceso a vehículos nuevos</p>
        <p><i class="fa-solid fa-check colorIcons"></i> Menos preocupación por la depreciación</p>
        <p><i class="fa-solid fa-check colorIcons"></i> Opciones de compra al final del contrato</p>
        <p><i class="fa-solid fa-check colorIcons"></i> Beneficios fiscales para empresas</p>
      </div>
      <div class="leasingBox">
        <div class="leasingDescription">
         <h3 class="titleDecoration">Requisitos:</h3>
          <ul>
            <li>Ser mayor de 21 años</li>
            <li>No contar con Antecedentes penales/judiciales</li>
            <li>Poseer una tarjeta de credito</li>
            <li>No figurar en inforcomf</li>
            <li>Certificado de trabajo</li>
            <li>Antiguedad minima de 1 año.</li>
          </ul>
        </div>
      </div>
  </div>
  <Footer />
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
<style >
.leasingContainer{
  /* background-color: #F3F8FF; */
  display: flex;
  padding: 50px;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(25, 25, 25, 0.5);
  align-items: center;
}
.leasingBox{
  width: calc(100%/2);
  padding: 20px;
  color: #191919;
  text-align: left;
}
.leasingTitle{
  color: #BED635;
  font-weight: bold;
}
small{
  color: #F8FDFF;
  opacity: 0.7;
}
.colorIcons{
  color: #BED635;
}
.leasingImg{
    width: 500px;
    height: auto;
    border: 2px #BED635 solid;
    border-radius: 10px;
}
.imgPosition{
  display: flex;
  justify-content: center;
}
.leasingDescription{
  display: flex;
  color: #191919;
  padding: 20px;
  text-align: left;
  align-items: flex-start;
}
.customTitle{
  width: 500px; 
  height: 30px; 
  background: #BED635;
  padding: 5px;
  -webkit-transform: skew(-25deg, 0deg);
  -moz-transform: skew(-25deg, 0deg);
  -ms-transform: skew(-25deg, 0deg);
  -o-transform: skew(-25deg, 0deg);
  transform: skew(-25deg, 0deg);
  text-align: center;
}
.customBgLeasing{
  background-color: #F8FDFF;
}
.titleDecoration{
  text-decoration: underline 2px #BED635;
}

@media only screen and (max-width: 768px){
  .leasingContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .leasingBox{
    width: 100%;
    text-align: center;
  }
  .leasingImg{
    max-width: 100%;
  }
  .customTitle{
    max-width: 100%;
  }
 
}
</style>