<template>
  <v-app>
    <v-app-bar color="white" app>

      <v-img
        v-bind:src="image_src"
        max-height="40"
        max-width="40"
        class="img_header"
        contain
      >

      </v-img>
<!--      <v-app-bar-nav-icon-->
<!--        class="resizeimage">-->
<!--      <img src="~assets/img/header_logo.png" alt="">-->
<!--      </v-app-bar-nav-icon>-->


      <v-toolbar-title  class="header_title">
        <small> TV・メディア取材殺到！</small><br>
        <small class="header_title_b">先着1,000名様無料で</small><br>
        <small>特典付きウェビナーにご招待</small>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <div class="test">テストで入力している</div>
    </v-main>


  </v-app>


</template>

<script>
export default {

  data(){
    return{
      image_src:require("@/assets/img/header_logo.png")
    }
  }
}
</script>

<style lang="scss">

$Cmain:#003366;
.img_header{
  margin-right: 13px;
}

.header_title{
  font-size:12px ;
  line-height: 14px;
  .header_title_b{
    color: $Cmain;
  }
}

.test{
  margin-top: 8000px;
}

</style>
