<template>

  <div class="bg mt-8">
    <v-container class="container">
      <div>
        <p class="mb-11 mt-3">参加者特典</p>
        <h2
          data-aos="fade-right"
          data-aos-anchor-placement="-10px"
          class="mb-10">
          無料コンサルティングを<span>何度でも<br>
            ご自身のスケジュールに合わせて</span><br>
          受けられます
        </h2>
        <p class="text-center">
          年収500万円以上の正社員・公務員限定
        </p>
      </div>

      <div class="text-center mb-3">
        <v-btn
          rounded
          color="#FFCE00"
          class="px-9 py-7 btn"
          data-aos="fade-up"
        >
          <nuxt-link
            v-scroll-to="'#form'"
            class="to_form"
            to
          >
            1対1WEB相談同時開催
          </nuxt-link>
        </v-btn>

      </div>
    </v-container>
  </div>

</template>

<script>
export default {
  name: "privelege"
}
</script>

<style scoped lang="scss">

.bg {
  background:linear-gradient(45deg,$Csub 0%,$Csub 50%, #103A64 50%,#103A64 100%);
  color: white;
  span {
    color: $Cmain;
  }

  .btn {
    font-size: 20px;
    font-weight: bold;
    color: white;

    .to_form {
      color: white;
      text-decoration: none !important;
    }

  }

}


</style>
