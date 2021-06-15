<template>
  <div class="mt-13 consule">
    <div class="consulemenber mb-4">
      <h2 class="mb-7">
        <span>セミナー中、</span><br>
        <span>コンサルタント</span>による <br>
        <span>質疑応答・WEB相談</span>が可能
      </h2>
      <p class="subtitle">
        投資・資産運用の始め方、時期、投資商品の見直し、税金対策など、ウェビナーにご参加頂いている方はそのまま１対１でWEB無料相談をご利用頂けます。経験と実績に基づき、私たちがお客様に最適な資産運用プランを無料でご提案致します。
      </p>
    </div>

<!--    <v-carousel v-model="model">-->
<!--      <v-carousel-item>-->

<!--        <v-sheet-->
<!--          height="100%"-->
<!--          tile-->
<!--        >-->
<!--          <v-row-->

<!--          >-->

<!--          </v-row>-->

<!--        </v-sheet>-->
<!--      </v-carousel-item>-->

<!--    </v-carousel>-->

  </div>
</template>

<script>
export default {
  name: "Tappmember",
  data(){
    // model:0

  }
}
</script>

<style scoped lang="scss">
span {
  color: $Cmain;
}

.consulemenber {
    .subtitle {
      font-size: 14px;
      line-height: 25px;
    }
}
</style>
