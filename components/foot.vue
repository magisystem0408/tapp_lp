<template>
  <div class="foot text-center">
    <v-btn
      data-aos="fade-up"
      data-aos-anchor-placement="1000px"
      color="#C09B0F"
      class="reserve_btn px-8 py-8"
    >
      <nuxt-link
        v-scroll-to="'#form'"
        class="to_form"
        to
      >
        今スグ<br>
        オンラインセミナー予約
      </nuxt-link>
    </v-btn>


    <!--      <v-btn-->
    <!--        color="#003366"-->
    <!--        class="px-4 chat_btn"-->
    <!--      >-->
    <!--        相談する-->
    <!--      </v-btn>-->
  </div>

</template>

<script>
export default {
  name: "foot",
}
</script>

<style scoped lang="scss">
.foot {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .reserve_btn {
    font-size: 20px;
    font-weight: bold;
  }

  .to_form {
    color: white;
    text-decoration: none !important;
  }

}
</style>
