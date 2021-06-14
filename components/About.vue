<template>
  <!--  背景入れないといけないので必要-->

  <div class="about pa-6"
  >

    <v-container class="about pa-6">
      <div class="mb-11">About</div>

      <div class="about_content">

        <h1 data-aos="fade-right" class="mb-6">
          <span>リアルタイム解説</span>解説<br>
          <span>質疑応答</span>のセミナー
        </h1>

        <p
          data-aos="fade-up"
          data-aos-anchor-placement="-10px"
        >
          投資・資産運用の始め方、時期、投資商品の見直し、<br>
          税金対策など、そのまま１対１でWEB相談OK
        </p>

      </div>

      <button>aaaa</button>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss">

.about {
  background-color: $C_gray;

  .about_content {

    h1 {
      font-size: 24px;

      span {
        color: $Cmain;
      }
    }

    p {
      font-size: 14px;
    }
  }
}


</style>
