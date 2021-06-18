<template>
  <v-app>
    <Header></Header>

    <v-main>
    <Foot></Foot>
      <Top></Top>
      <v-container>

        ここにcrezymoney
        <AboutFeature></AboutFeature>
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
import top from "@/components/top";
import About from "~/components/AboutFeature";
import foot from "@/components/foot";
import methods from "~/components/methods";
import Achive from "~/components/Achive";

import privelege from "@/components/privelege";

import problem from "~/components/problem";
import Tappmember from "@/components/Tappmember";
import Form from "~/components/Form";

export default {
  components: {About}
}
</script>

<style lang="scss">

.test {

  margin-top: 2000px;
}

</style>
