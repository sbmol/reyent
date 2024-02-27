<template>
  <Header />
  
  <div class="addContainer">
    <div class="centerTitle">
    <h2 class="txtCustom">Ahora selecciona tus adicionales paso <span class="circle">2</span></h2>

    </div>
    <div class="rowAdd">
      <div v-if="reservationDate">
        <h3>Detalle de la reserva: </h3>
        <p><b>Fecha de la reserva: </b>{{ reservationDate.pickupDate }}</p>
        <p><b>Lugar de devolucion:</b> {{ reservationDate.returnDate }}</p>
        <p><b>Lugar de retiro:</b> {{ reservationDate.pickupLocationName }}</p>
        <p><b>Lugar de devolución:</b> {{ reservationDate.returnLocationName }}</p>
        <p><b>Valor final reserva:</b> <span class="">Gs. {{ totalAmount + totalAdd }}</span></p>
        <p><b>Categoria Auto:</b> {{ reservationDate.categoryModel }}</p>
        <router-link to="/reservations/cotizar" class="btnColor">MODIFICAR</router-link>
        <router-link class="btnColor" to="#" @click="confirmReservation">Confirmar Reserva</router-link>
        <!-- Otros detalles de la reserva... -->
      </div>
    </div>
    <div class="rowAdd">
      <h3>Selección de Adicionales:</h3>
      <div v-for="add in additionals.additionals" :key="add.id">
        <button class="adds" @click="() => selectExtra(add)" type="checkbox">{{ add.add_name }} - Usd. {{ add.price }}</button>
        
      </div>
      <p > <b>Total de Adicionales:</b> Gs.{{ totalAdd }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '../Header.vue';

export default {
  components: {
    Header,
  },
  mounted() {
    this.loadReservationData();
    axios.get('http://localhost:3000/')
      .then(response => {
        this.additionals = response.data;
        // console.log("adicionales", this.additionals)
        console.log(this.additionals.additionals)
      });
  },
  methods: {
    loadReservationData() {
      const reservationData = JSON.parse(localStorage.getItem('reservationData'));
      if (reservationData) {
        // Asigna la información recuperada a las propiedades de tu componente
        this.reservationDate = reservationData;
        // console.log(localStorage.getItem('reservationData'));

        let totalAmount = this.reservationDate.daysDifference * this.reservationDate.categoryPrice + this.reservationDate.totalLocation
        this.totalAmount = totalAmount

      }
    },
    selectExtra(extra){
      extra.isSelect = !extra.isSelect;
      this.updateTotalExtras();
    },
    updateTotalExtras(){
      this.totalExtras = this.additionals.additionals
      .filter(extra => extra.isSelect)
      .reduce((total, extra) => total + extra.price, 0);
      console.log("total extras:", this.totalExtras)
      this.totalAdd = this.totalExtras * this.reservationDate.daysDifference;
      console.log("total:", this.totalAdd)
      console.log("total amount:", this.totalAmount)
      this.totalRental = this.totalAmount + this.totalAdd
      
    },
    updateTotalRental(){
      console.log("total amount:", this.totalAmount)
      console.log("total add:", this.totalAdd)
    },
    confirmReservation() {
    this.saveDataToLocalStorage();
    // Aquí puedes agregar cualquier otra lógica que necesites al confirmar la reserva
      alert (`La reserva fue realizada con éxito!`); 
      window.location.href="./registration";
  
    
    
  },
    saveDataToLocalStorage() {

    const reservationFinal = {
    pickupDate: this.reservationDate.pickupDate,
    returnDate: this.reservationDate.returnDate,
    pickupLocationName: this.reservationDate.pickupLocationName,
    returnLocationName: this.reservationDate.returnLocationName,
    daysDifference: this.reservationDate.daysDifference,
    categoryPrice: this.reservationDate.categoryPrice,
    modelCar: this.reservationDate.modelCar,
    carId: this.reservationDate.carId,
    categoryModel: this.reservationDate.categoryModel,
    selectedAdditionals: this.additionals.additionals.filter(extra => extra.isSelect),
    totalExtras: this.totalExtras,
    totalAmount: this.totalAmount,
    totalAdd: this.totalAdd,
    categoryId: this.reservationDate.categoryId,    
  };
  

  localStorage.setItem('reservationFinal', JSON.stringify(reservationFinal));
},

  },
  data() {
    return {
      reservationDate: '',
      additionals: [],
      totalAmount: '',
      totalExtras: 0,
      totalAdd: '',
      totalRental: '',
    }
  }
}
</script>

<style>
.addContainer{
  display: flex;
  justify-content: center;
  padding: 15px;  
  background-color: #fafafa;

  
  
}
.txtCustom{
  font-weight: bold;
}
.circle{
  border: 3px #bed635 dotted;
  background-color: #fafafa;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 3px 10px 3px 10px;
}
.rowAdd{
  width: calc(100%/2);
  background-color: #fafafa;
  color: #191919;
}
.adds{
  color: #fafafa;
  font-weight: bold;
  background-color: #BED635;
  border-radius: 25px;
  cursor: pointer;
  margin: 2px;
}
.centerTitle {
  margin-bottom: 20px; /* Ajusta según sea necesario */
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