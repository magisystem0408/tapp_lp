<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="mb-12"
    >
      <div class="abFe">
        <img src="~assets/img/about.png"
             data-aos="fade-left"
             alt="リアルタイム解説">

        <div class="about_content">

          <p class="title mb-11">About.</p>

          <h1 data-aos="fade-right" class="mb-6">
            <span>リアルタイム</span>解説<br>
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
      </div>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <div class="abFe">
        <img src="~assets/img/feture.png"
             data-aos="fade-left"
             alt="年収500万以上の正社員・公務員に特化">

        <div class="about_content">

          <p class="title mb-11">Feature.</p>

          <h1 data-aos="fade-right" class="mb-6">
            <span>年収500万以上の</span><br>
            <span>正社員・公務員</span>に特化
          </h1>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="-10px"
          >
            当セミナーは、<span>招待制のONLINEセミナー</span>です。<br>
            <span>
            専属ナビゲーターがリアルタイム解説・質疑応答、<br>
            個別相談も完全無料！</span>しつこい勧誘は一切ありません。
          </p>
        </div>
      </div>
    </v-col>
  </v-row>


</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped lang="scss">

.abFe {
  position: relative;

  img {
    position: absolute;
    right: 0;
  }

  .title {
    color: $Cmain;
  }

  .about_content {

    h1 {
      font-size: 24px;

      span {
        color: $Cmain;
      }
    }

    p {
      font-size: 14px;
      span{
        color:$Csub;
      }
    }
  }

}


</style>
