<template>
  <v-app>
    <Header></Header>

    <v-main>

      <div class="mamushi">

        ねこねこねこ
      </div>

      <About></About>



      <div class="test">
        テストで入力しています
      </div>
    </v-main>
  </v-app>






</template>

<script>
import header from "~/components/header";
import About from "~/components/About";

export default {

}
</script>

<style lang="scss">
.mamushi{
  width: 100%;
  height: 1000px;
}


.test{
  margin-top: 8000px;
}

</style>
