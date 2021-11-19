<template>
  <div class="cover">
    <div class="tittle">
      <span class="name">CANDRA KURNIAWAN</span>
      <span class="position">FULLSTACK WEB DEVELOPER</span>
    </div>
    <div class="imgProfile"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted() {
    document.title = 'Candra Kurniawan';
  },
};
</script>

<style lang="scss">
.cover {
  width: 100vw;
  height: 60vh;
  background: url("../assets/images/cover.jpg");
  background-position: left;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .tittle {
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .name{
      font-size: 30px;
      color: white;
    }

    .position{
      color: white;
      font-size: 15px;
    }
  }

  .imgProfile {
    border-radius: 50%;
    width: 230px;
    height: 230px;
    background-color: $primary;
    margin-bottom: -115px;
    border: 10px solid #ffff;
  }
}

// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: $sm) {
  .cover{
    .tittle{
      .name{
        color: red;
      }
    }
  }
 }

// Medium devices (tablets, 768px and up)
/* @media (min-width: 768px) {  } */

// Large devices (desktops, 992px and up)
/* @media (min-width: 992px) {  } */

// X-Large devices (large desktops, 1200px and up)
/* @media (min-width: 1200px) {  } */

// XX-Large devices (larger desktops, 1400px and up)
/* @media (min-width: 1400px) {  } */
</style>
