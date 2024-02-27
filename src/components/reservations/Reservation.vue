<template class="bg-reservation">
  <Header />
  <div class="bg-reservation">
    <div class="rvaContainer">
  <form @submit.prevent="checkAvailability">
    <label for="pickupLocation">Lugar de retiro:</label>
    <select v-model="pickupLocation" required>
      <option v-for="place in places.rental_places" :key="place.id" :value="place.place_price">
        {{ place.place }}
      </option>
    </select>

    <label for="returnLocation">Lugar de devolución:</label>
    <select v-model="returnLocation" required>
      <option v-for="place in places.rental_places" :key="place.id" :value="place.place_price">
        {{ place.place }}
      </option>
    </select>

    <label for="reservationDate">Fecha de reserva:</label>
    <input type="datetime-local" v-model="reservationDate" required>

    <!-- Nueva etiqueta para la fecha de devolución -->
    <label for="returnDate">Fecha de devolución:</label>
    <input type="datetime-local" v-model="returnDate" required>

    <button type="submit">Verificar Disponibilidad</button>
  </form>
</div>

  <h1 class="txtSteps">Elige el auto que necesitas</h1>
  <div class="car-rental-details" v-for="result in availabilityResults.available_cars" :key="result.id">
    
    <p><img src="/src/assets/hyundaihb20.png" alt="" class="imgCar"> <br/>
      <h2 class="car-title"> {{ result.car_brand }}</h2>
      <h3 class="car-info">{{ result.car_model }}</h3>
      <h4 class="car-group">Categoria: <span class="catColor">{{ result.category.cat_name }}</span></h4>
    </p>
    <div class="car-info">
      <ul class="car-features">
        <li><b>Lugar de retiro:</b> {{ pickupLocationName }}</li>
        <li><b>Lugar de devolucion:</b> {{ returnLocationName }}</li>
        <li><b>Fecha de retiro:</b> <span class="dateStyle">{{ reservationDate }}</span></li>
        <li><b>Fecha devolucion:</b> <span class="dateStyle"> {{ returnDate }}</span></li>

      </ul>
    </div>
    <div class="price-info">  
      <button class="btnColor" @click="() => reserveClick(result)" to="/reservations/additional"> Usd. {{ result.category.cat_prices * daysDifference + totalLocation }} <br> Reservar</button>
    </div>
    
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from "../Header.vue"
import { differenceInDays} from 'date-fns'

export default {
  data() {
    return {
      pickupLocation: null,
      returnLocation: null,
      reservationDate: '',
      returnDate: '',
      availabilityResults: [],
      availabilityChecked: false,
      places: [],
      daysDifference: 0,
      totalLocation:0,
      carSelected: [],
    };
  },
  computed: {
    pickupLocationName(){
      return this.getPlaceName(this.pickupLocation)
    },
    returnLocationName(){
      return this.getPlaceName(this.returnLocation)
    }

  },
  mounted() {
    // Llamada a tu API de Rails para obtener los lugares de alquiler
    this.loadRentalPlaces();
  },
  methods: {
  async loadRentalPlaces() {
    try {
      const response = await axios.get('http://localhost:3000');
      this.places = response.data;
      console.log(this.places.rental_places)
    } catch (error) {
      console.error('Error al cargar lugares de alquiler:', error);
    }
  },
  // toma la informacion del lugar de la reserva
    getPlaceName(placePrice){
      const selectedPlaceObj = this.places.rental_places.find(place => place.place_price === placePrice);
      return selectedPlaceObj ? selectedPlaceObj.place : '';
    },
    async checkAvailability() {
    try {
    // Calcular la cantidad de días de alquiler
    let daysDifference = differenceInDays(new Date(this.returnDate), new Date(this.reservationDate));
    this.daysDifference = daysDifference;

    // Realizar la llamada a la API para verificar la disponibilidad
    const response = await axios.get('http://localhost:3000/check_availability', {
      pickupLocation: this.pickupLocation,
      returnLocation: this.returnLocation,
      reservationDate: this.reservationDate,
    });
   
    this.availabilityResults = response.data;
    console.log("respuesta API:", this.availabilityResults)
    this.carSelected = [],

    this.availabilityResults.available_cars.forEach(car => {
        const category = car.category;
        const catPrice = category.cat_prices * daysDifference;
        this.catPrice = this.catPrice

        this.carSelected.push(
          {
          car_brand: car.car_brand,
          car_category: car.category.cat_name,
          car_price: car.category.cat_prices,
          car_categoryId: car.category.id
        });
        
      })
    this.totalLocation = this.returnLocation + this.pickupLocation
    this.totalAmount = this.catPrice + this.totalLocation
    // console.log("monto final a pagar:  ", this.totalAmount)
  } catch (error) {
    // console.error('Error al verificar disponibilidad:', error);
  }
},
reserveClick(result) {
    // Verificar si ya se ha realizado una reserva
    if (this.hasReservation) {
      console.error('Ya se ha realizado una reserva. No se puede realizar otra.');
      return;
    }
    if (result && result.category && result.category.cat_prices) {
      const reservationData = {
        pickupDate: this.reservationDate,
        returnDate: this.returnDate,
        pickupLocationName: this.pickupLocationName,
        returnLocationName: this.returnLocationName,
        daysDifference: this.daysDifference,
        totalLocation: this.totalLocation,
        categoryPrice: result.category.cat_prices,
        modelCar: result.car_brand,
        categoryModel: result.category.cat_name,
        carId: result.id,
        categoryId: result.category.id
      };
      // Guardar la reserva en localStorage
      localStorage.setItem('reservationData', JSON.stringify(reservationData));
      // Actualizar el estado para indicar que se ha realizado una reserva
      this.hasReservation = true;
      this.$router.push('/reservations/additional');
    } else {
      console.error('No se pudo acceder a las propiedades necesarias.');
    }
  },



  


  async checkPlaces(){
    this.places.rental_places = this.selectPlaces
    // console.log("lugares:", this.selectPlaces);
  },
  selectPlaces(type){
    if(type === 'pickup'){
      this.selectPlaces = this.pickupLocation;
    } else if(type === 'return'){
      this.selectPlaces = this.returnLocation;
    }
  }


},
  components: {
    Header,
  }
};
</script>
<style>
.bg-reservation{
  color: #191919;
  background-color: #fafafa !important;
}

.rvaContainer{
 flex-direction: row;
 background-color: #BED634;
 justify-content: center;
 box-sizing: border-box;
 text-align: center;
 border-top: 2px solid #bed635;
 padding: 20px;
 

}
.car-rental-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.5);
  color: #191919;
  padding: 20px;
  border-bottom: #191919 dotted 1px;
}

.car-info {
  flex: 1;
  margin-right: 2rem;
  align-items: center;
}
.numbers{
  color: #fafafa;
  font-weight: bold;
}

.car-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.car-group {
  font-size: 0.7rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.car-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  padding: 5px;
}

.car-features li {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}

.price-info {
  flex: 1;
}

.price-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.price-value {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.price-offer {
  font-size: 10px;
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
.imgCar{
  width: 150px;
  height: 100px;
}

.catColor{
  background-color: #BED634;
  border-radius: 25px;
  padding: 10px;
  color: #191919;
}
.dateStyle{
  color: #BED634;
  font-weight: bold;
}
.txtSteps{
  background-color: #BED754;
  color: #191919;
  padding: 15px;
  font-weight: bold;

}



  
</style>

