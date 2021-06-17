<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <div class="mamushi">

          猫になってしまいました
        </div>

        <AboutFeature></AboutFeature>
        <v-btn
          rounded
          color="#C09B0F"
          class="btn"

        >予約する
        </v-btn>
        <Methods></Methods>
        <Achive></Achive>
      </v-container>

      <Privelege></Privelege>

      <v-container>
        <Benefits></Benefits>
        <Problem></Problem>
      </v-container>

      <Privelege></Privelege>

      <v-container>

        <!--        <Tappmember></Tappmember>-->
        <Form></Form>
        <div class="test">
          ねこねこ
        </div>

      </v-container>
    </v-main>
  </v-app>


</template>

<script>
import header from "~/components/header";
import About from "~/components/AboutFeature";
import methods from "~/components/methods";
import Achive from "~/components/Achive";

import privelege from "@/components/privelege";

import problem from "~/components/problem";
import Tappmember from "@/components/Tappmember";
import Form from "~/components/Form";

export default {}
</script>

<style lang="scss">

.mamushi {
  width: 100%;
  height: 800px;
}


.btn {
  color: white;
}


.test {
  margin-top: 2000px;
}
</style>
