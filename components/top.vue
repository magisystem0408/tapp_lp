<template>
  <div>

    <video
       id="top"
       playsinline
       muted
       autoplay
       loop
       src= "https://res.cloudinary.com/dnmwe1whf/video/upload/v1624183977/tapp/video/top.mp4"
    >
    </video>

      <v-container>
      <div class="title mt-2 d-flex justify-center">
        <div class="main">
          <img src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/main_lyfhci.webp" class="mb-2"
          width="100%">
          <div>第二の収入源を作るお金の勉強会</div>
        </div>
      </div>
      </v-container>
  </div>

</template>

<script>
export default {
  name: "top",

}
</script>

<style scoped lang="scss">
  #top{
    width: 100%;
  }

  .title{
    position: relative;
    font-weight: bold;
    color: $Csub;
    font-size: 20px;
    pointer-events: none;
    text-align: center;
  }
</style>
