<template >
    <div class="form-popup-overlay">
      <div class="formContainer">
        <button @click="closePopup" class="close-button">Cerrar</button>
        <div class="formRow">
          <img src="../assets/reyent.png" alt="reyent" class="imgLogoForm">
          <h4><b>Contactanos !!</b></h4>
          <small>Completa el formulario de contacto, para solicitar cotizacion o informacion sobre los servicios que
            prestamos.</small> <br />
          <small>Tambien puede llamarnos a los siguientes numeros: </small>
          <h4>Ventas</h4>
          <p><i class="fa-brands fa-whatsapp fa-1x"><a href="https://wa.me/1XXXXXXXXXX" target="_blank"> +595 (09xx) 555
                555</a></i></p>
          <h4>Asistencia mecanica</h4>
          <p><i class="fa-solid fa-wrench"></i> <a href="https://wa.me/1XXXXXXXXXX" target="_blank"> +595 (09xx) 555
              555</a></p>
        </div>
        <div class="formRow">
          <form ref="form" @submit.prevent="sendEmail">
            <label>Nombre:</label>
            <input name="user_name" type="text" required class="input-field"  />
            <label >Correo Electronico:</label>
            <input name="user_email" type="email" required class="input-field"  />
            <label>Mensaje: </label>
            <textarea name="message" cols="30" rows="10" required class="input-field"></textarea>
            <button type="submit" class="btnColor" value="send">Enviar</button>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
export default {
  methods: {
    sendEmail(){
      emailjs.sendForm("service_aj3zb0n", "template_xcylbdt", this.$refs.form, "s26gdd6tw-DTgi3w5").then(
  (result) => {
    this.showSuccessAlert();
    this.closePopup();
  },
  (error) => {  
   this.showErrorAlert();
  }
);
      // aqui dejamos para el metodo de envio
    },
    closePopup(){
      this.$emit("close")
      // aqui la logica para cerrar
    },
    showSuccessAlert(){
      Swal.fire({
        icon: 'success',
        title: 'Gracias por escribirnos!',
        text: 'Nos pondremos en contacto en la brevedad!.'     
      });
    },
    showErrorAlert(){
      Swal.fire({
        icon: 'error',
        title: 'Ups! estamos experimientando problemas',
        text: 'Por favor intente nuevamente mas tarde. '
      })
    }
  }
  
}
</script>
<style >

.formContainer{
  display: flex;
  flex-direction: row;
  background-color: #F8FAEA;
  color: #191919;
  border-radius: 15px;
  width: 60%;
  justify-content: center;

}
.imgLogoForm{
  width: 8em;
  height: auto;;
}
.formRow{
  padding: 20px;
  width: calc(70%/2);
  flex-direction: column;

}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
   /* Espacio entre los labels y los campos de entrada */
}

.input-field {
  margin-bottom: 10px;
  border: none; /* Espacio entre los campos de entrada */
}

.form-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  display: flex;
  align-items: center;
  justify-content: center;
}
.close-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}
.btnColor{
  padding: 10px;
  background-color: #191919;
  color: #F3F8FF;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
  border-left: 5px #BED754 solid;
  transform: skew(0deg);
  
}
button{
  border: none;
}
.close-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
  
</style>