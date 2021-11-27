<template>
  <div class="cover">
    <div class="tittle">
      <span class="name">CANDRA KURNIAWAN</span>
      <span class="position">FULLSTACK WEB DEVELOPER</span>
    </div>
    <div class="socialBanner">
      <img class="socialIcon" :src="linkedin" alt="" />
      <img class="socialIcon" :src="github" alt="" />
      <img class="socialIcon" :src="discord" alt="" />
      <img class="socialIcon" :src="whatsapp" alt="" />
      <img class="socialIcon" :src="email" alt="" />
    </div>
    <div class="imgProfileWrapper">
      <img class="imgProfile" :src="avatar" alt="" />
    </div>
  </div>
  <About/>
</template>

<script>
import linkedin from '../assets/logos/linkedin.svg';
import github from '../assets/logos/github.svg';
import discord from '../assets/logos/discord.svg';
import whatsapp from '../assets/logos/whatsapp.svg';
import email from '../assets/logos/email.svg';
import avatar from '../assets/images/avatar.jpg';
import About from '../components/About.vue';

export default {
  name: 'Home',
  mounted() {
    document.title = 'Candra Kurniawan';
  },
  data() {
    return {
      linkedin,
      github,
      discord,
      whatsapp,
      email,
      avatar,
    };
  },
  components: {
    About,
  },
};
</script>

<style lang="scss" scoped>
.cover {
  width: 100vw;
  height: 60vh;
  background: url("../assets/images/cover.jpg");
  background-position: right;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  /* &::after{
    background-color: red;
  } */

  .tittle {
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .name {
      font-size: 30px;
      color: white;
      font-family: "righteous";
    }

    .position {
      color: white;
      font-size: 15px;
      font-family: "monda";
    }
  }

  .socialBanner {
    padding-top: 70px;
    justify-content: space-around;
    display: flex;
    width: 200px;

    .socialIcon {
      width: 34px;
    }
  }

  .imgProfileWrapper {
    border-radius: 50%;
    width: 230px;
    height: 230px;
    background-color: white;
    margin-bottom: -190px;
    border: 10px solid #ffff;

    .imgProfile {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }
}
</style>
