<template>
    <v-app-bar color="white" app>

      <v-img
        v-bind:src="image_src"
        max-height="40"
        max-width="40"
        class="img_header"
        contain
      >
      </v-img>

      <div class="header_title">
        <small> TV・メディア取材殺到！</small><br>
        <small class="header_title_b">先着1,000名様無料で</small><br>
        <small>特典付きウェビナーにご招待</small>
      </div>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    </v-app-bar>

</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      image_src: require("@/assets/img/header_logo.png")
    }
  }
}
</script>

<style scoped lang="scss">
.img_header {
  margin-right: 13px;
}

.header_title {
  line-height: 14px;
  font-size: 12px;

  .header_title_b {
    color: $Cmain;
  }
}

.test {
  margin-top: 8000px;
}

</style>
