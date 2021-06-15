<script src="../nuxt.config.js"></script>
<template>
  <div class="mt-13">
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <h2
          data-aos="fade-right">
          <span>年間一万人以上の</span><br>
          <span>方がご来場</span>
        </h2>
      </v-col>

      <v-col cols="auto" class="resize pt-9">
        02
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <p class="pt-4">
      TBSなどの大手テレビ局を始め、多くのメディア様に取り上げられています！
    </p>


      <v-card
      elevation="7"
      data-aos="fade-up"
      >
        <video id="video" src="~/assets/movie/achive.mp4" playsinline muted autoplay loop></video>

      </v-card>


  </div>

</template>

<script>
export default {
  name: "Achive",

}
</script>

<style scoped lang="scss">

h2 {
  span {
    color: $Cmain
  }
}

.resize {
  font-size: 40px;
  color: #F0F0F0;
}

p {
  font-size: 14px;
}

#video {
  width: 100%;
}


</style>
