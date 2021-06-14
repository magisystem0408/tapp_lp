<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <div class="mamushi">

          ねこねこねこ
        </div>

        <AboutFeature></AboutFeature>

        <v-btn
          rounded
          color="#C09B0F"
          class="btn"

        >予約する
        </v-btn>


        <div class="test">
          テストで入力しています
        </div>

        <Form></Form>


      </v-container>
    </v-main>
  </v-app>


</template>

<script>
import header from "~/components/header";
import About from "~/components/AboutFeature";

import Form from "~/components/Form";

export default {}
</script>

<style lang="scss">

.mamushi {
  width: 100%;
  height: 1000px;
}


.test {
  margin-top: 8000px;
}

.btn {
  margin-top: 1000px;
  color: white;
}

</style>
