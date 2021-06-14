<template>
  <v-app>
    <Header></Header>

    <v-main>
      <div class="about">
        <v-container>
          テスト
        </v-container>
      </div>


      <div class="test">
        テストで入力しています
      </div>
    </v-main>
  </v-app>






</template>

<script>
import header from "~/components/header";

export default {

}
</script>

<style lang="scss">

.about{
  background-color: $C_gray;
}


.test{
  margin-top: 8000px;
}

</style>
