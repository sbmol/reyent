<template >
  <meta name="csrf-token" ref="csrfToken">
  <Header />
  <div class="containerRegistration">
    <div class="rowRegistration">
      <div class="boxRegistration">
        <ul>
          <h3>Tu reserva: </h3>

          <div v-if="finalData">
            <p> <span class="pDecoration">Categoria:</span> <span class="txtDecoration">{{ finalData.modelCar }} -
                {{ finalData.categoryModel }} o similar</span></p>
            <p> <span class="pDecoration">Fecha y hora de retiro:</span> {{ finalData.pickupDate }}</p>
            <p> <span class="pDecoration">Fecha y hora de devolucion:</span> {{ finalData.returnDate }}</p>
            <p> <span class="pDecoration">Cantidad de dias: </span> <span
                class="txtDecoration">{{ finalData.daysDifference }}</span></p>
            <p> <span class="pDecoration">Lugar de Retiro: </span> <span
                class="txtDecoration">{{ finalData.pickupLocationName }}</span></p>
            <p> <span class="pDecoration">Lugar de Devolucion: </span> <span
                class="txtDecoration">{{ finalData.returnLocationName }}</span></p>
            <h4>Adicionales:</h4>
            <div class="boxAdds">
              <ul v-for="add in finalData.selectedAdditionals" :key="add.idAdds">
                <li> <i class="fa-solid fa-check"></i> {{ add.add_name }}</li>
              </ul>
            </div>
            <p class="txtDecoration">Total a Pagar: Gs. {{ totalPayment }} <span class="smallTxt">(Incluye impuestos y
                gastos administrativos)</span></p>
            <button class="btnColor" @click="guardarReservaEnRails">RESERVAR</button>

          </div>
        </ul>
      </div>
    </div>
    
      <div class="rowRegistration">
        <div v-if="tokenPresent" class="successRegistration">
            <p>¡Registro exitoso! Ahora puedes continuar con la reserva del auto.</p>
        </div>
        <div class="registrationCard" v-else>
          <h3>Regístrate para continuar</h3>
          <form @submit.prevent="submitForm">
            <label for="nombre">Nombre:</label>
            <input v-model="user.name" type="text" id="nombre" placeholder="Ingresa tu nombre completo" />

            <label for="usuario">Usuario:</label>
            <input v-model="user.username" type="text" id="usuario" placeholder="Ingresa tu usuario" />

            <label for="email">Correo Electrónico:</label>
            <input v-model="user.email" type="text" id="email" placeholder="Correo electrónico"
              autocomplete="current-email" />

            <label for="pass1">Contraseña:</label>
            <input v-model="user.password" type="password" id="pass1" placeholder="Ingresa tu contraseña"
              autocomplete="current-password" />
            <button class="btnColor">REGISTRARME</button>
          </form>
        </div>
      </div>
    </div>
  
</template>
<script>
import Header from "../Header.vue";
import axios from 'axios';

export default {
  components: {
    Header,
  },
  mounted() {
    this.loadReservationFinal();
  },
  methods: {
    loadReservationFinal() {
      const reservationFinal = JSON.parse(localStorage.getItem('reservationFinal'))
      if (reservationFinal) {
        this.finalData = reservationFinal
        console.log("data:", this.finalData)
      } else {
        console.error("error", error);
      }
      this.totalPayment = this.finalData.totalAdd + this.finalData.totalAmount
      console.log(this.finalData.selectedAdditionals)
    },
      async guardarReservaEnRails() {
    try {
      const apiUrl = 'http://localhost:3000/create_reservation';
      
      
      
      const requestData = {
      booking: {
        start_date: this.finalData.pickupDate,
        end_date: this.finalData.returnDate,
        total_payment: this.finalData.totalAmount,
        fleet_id: this.finalData.carId,
        pickup: this.finalData.pickupLocationName,
        return: this.finalData.returnLocationName,
        additional_id: this.finalData.selectedAdditionals,
        category_id: this.finalData.categoryId,

    }
  
};
    

    const response = await axios.post(apiUrl, requestData);

    console.log('Reserva creada en Rails:', response.data);
    console.log('Solicitud completa:', { url: apiUrl, method: 'POST', data: requestData });

    alert(`¡Reserva creada con éxito! Número de reserva: ${response.data.reservation_number}`);
  } catch (error) {
    console.error('Error al guardar reserva en Rails:', error);
  }
},

    submitForm() {
      axios.post('http://localhost:3000/users', { user: this.user })
        .then(response => {
          if (response.data && response.data.token) {
            sessionStorage.setItem('token', response.data.token);
            this.reservationCreated = true;
            this.token = response.data.token; // Corregir aquí, quitando "this."
          } else {
            console.error('Respuesta inesperada del servidor:', response.data);
          }
        })
        .catch(error => {
          console.error('Error al enviar la solicitud:', error);
        });
    },
  },
  data() {
    return {
      finalData: [],
      totalPayment: 0,
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
      reservationCreated: false,
      token: sessionStorage.getItem('token'),
      tokenPresent: !!sessionStorage.getItem('token'),
    };
  },
}
</script>

<style >
  .containerRegistration{
    display: flex;
    flex-direction: row;
    background-color: #Fafafa;
    justify-content: space-around;
    padding: 50px;
    padding-top: 100px;
    align-items: center;
  }
  .rowRegistration{
    width: calc(100%/2);
    color: #191919;
    flex-direction: columns;
  }
  .boxRegistration{
    background-color: rgba(9, 38, 53, 1);
    border: 1px  solid #BED635;
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    color: #fafafa;
  }
  li{
    list-style: none;
  }
  .txtDecoration{
    color: #191919;
    font-weight: bold;
    background-color: #BED635;
    padding: 5px;
    margin-left: 10px;
  }
  .pDecoration{
    
    font-weight: bold;
    text-decoration: underline 2px #BED635
  }
  .boxAdds{
    background-color: rgba(25, 25,25, 0.2);
    padding: 5px;
    border-radius: 5px;
    color: #fafafa;
    border: 2px solid #BED635;
  }
  .smallTxt{
    font-size: 10px;
  }
 
  .rowRegistration {
    text-align: center;
    
    width: auto;
  }

  .registrationCard {
    border: 2px #bed635 dotted;
    border-radius: 10px;
    margin: 0 auto;
    padding: 30px;
  }

  .registrationCard label {
    display: block;
    margin-bottom: 5px;
  }

  .registrationCard input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  .successRegistration{
    color: #191919;
    background-color: #bed635;
    padding: 5px;
    border-radius: 12px;
    justify-content: center;
    width: 400px;
    height: 400px;
    align-items: center;

  }

  
</style>