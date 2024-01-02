<template>
  <div class="container">
    <header>
      <div class="navHeader titleEffect">
        <div class="row titleEffect">
          <li class="listUl">
            <span><img src="../assets/py.png" alt="" class="flag"> <a href="https://wa.me//+595991423174"
                class="phoneLink">+ (595) 991 xxx xxx</a></span>
          </li>
        </div>
        <div class="row">
          <ul class="listUl">
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
            <li class="listUl"><img src="../assets/R.png" alt="" class="imgLogo"></li>
          </ul>
        </div>
        <div class="row" >
          <ul class="listUl">
            <RouterLink to="/">Inicio</RouterLink>
            <li class="listUl"><a href="#nosotros" @click="toggleMenu">Nosotros</a></li>
            <li class="listUl"><a href="#fleet" @click="toggleMenu">Flota</a></li>
            <li class="listUl"><a href="#" @click="toggleMenu">Contacto</a></li>
            <li class="listUl">
              <router-link to="/leasing">Leasing</router-link>
            </li>
          </ul>
        </div>
        <div class="hamburger-menu" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

     
        
      </div>
    </header>

  </div>
</template>
<script>
// import { mapActions } from 'vuex';
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    
  },

  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@400&display=swap');

*{
  /* font-family: 'Noto Sans Display', sans-serif; */
  font-family: 'Commissioner', sans-serif;
}

body{
  padding: 0;
  margin: 0;
  background: linear-gradient(to left, #191919, transparent), url("../assets/hyundai.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  min-height: 500px;
  background-attachment: fixed;
  
}
.h1Leading{
  letter-spacing: 2px;
}


.navHeader{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  /* background-color: #F3F8FF; */
 
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
  background-color: #1CD6CE;
  
}
.textColor {
  color:#F3F8FF !important;
}

.listUl{
  display: inline-block;
  padding: 0 10px 0 10px;
  color: #F3F8FF;
  
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
  border-bottom: 4px #BED754 solid;
  transition: 5.ms;
  color: #F3F8FF;
  -ms-text-kashida-space: inherit;
  
}

a {
  text-decoration: none;
  color: #BED754;
  font-weight: bold;
  text-transform: uppercase;
}
.buttom{
  width: 100px; 
  height: 30px; 
  background: #BED635;
  -webkit-transform: skew(-25deg, 0deg);
  -moz-transform: skew(-25deg, 0deg);
  -ms-transform: skew(-25deg, 0deg);
  -o-transform: skew(-25deg, 0deg);
  transform: skew(-25deg, 0deg);
}
.row{
  display: flex;
  align-items: center;
}
.imgLogo{
  width: 10em;
  height: 10em;
}

/* MASTERHEAD INSIDE HEADER */
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
  background: #191919;
  padding: 5px;
  color: #BED754;
}
.txtBgColor{
  background-color: #BED754;
  color: #191919;
  padding: 5px;
  
}
.titleEffect2{
  background: rgba(255, 102, 0, 0.5);
  padding: 5px;
  color: #092635;
  border-radius: 50px;
  
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
#navLinks {
  display: flex;
  flex-direction: column;
  background-color: #092635;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

#navLinks.show {
  opacity: 1;
  visibility: visible;
}

#navLinks li {
  margin-bottom: 10px;
}

#navLinks a {
  text-decoration: none;
  color: #fff;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding-left: 10px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
}
.phoneLink{
  font-size: medium;
  border-bottom: none !important;
  color: #F3F8FF !important;
  font-weight: bold;
  
}



/* header responsive  */
@media only screen and (max-width: 768px) {

  .navHeader{
    font-size: 10px;
    flex-direction: column;
    text-align: center;
  }

  .row{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .masterhead{
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  .rowContainer{
    width: 90%;
  }
  body{
    background-size:cover;
  }
  a{
    color: #F3F8FF;
  }
  #navLinks {
    display: flex;
  }

  .hamburger-menu {
    display: flex;
  }
  .phoneLink{
    font-size: 12px;
    border-bottom: none;
    color: #BED635 !important;
    font-weight: bold;
    text-decoration: none;
  }

  /* from here the hamburguer menu */
  


}
@media only screen and(max-width: 480px) {
  .rowContainer{
    width: 100%;
    border-radius: 0;
    padding: 10px;
    align-items: center;

  }
  body{
    background-size: contain;
  }
  #navLinks {
    display: flex;
  }

  .hamburger-menu {
    display: flex;
  }
  .row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
}
  
</style>