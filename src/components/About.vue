<template>
  <div class="about">
    <span class="sub-tittle">about</span>
    <br />
    <span class="tittle">PERSONAL DETAIL</span>
    <p class="about-content">
      A fullstack web developer who likes new things, and very interested in the world of
      technology. Friendly, easy to communicate and able to balance between hard skills and soft
      skills. Having experience completing projects on time including creating realtime chat
      projects, digital wallets and vehicle rentals using several frameworks and libraries such as
      ReactJs, NextJs, and ExpressJs.
    </p>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss" scoped>
.about {
  margin-top: 120px;
  text-align: center;
  .sub-tittle {
    @include sub-tittle;
  }

  .tittle {
    font-family: "droid-sans";
    font-weight: bolder;
    font-size: 30px;
  }

  .about-content{
    font-family: 'mulish';
    display: block;
    padding: 10px 20px;
  }
}
</style>
