<template>
    <div>
    <video
       id="top"
       playsinline
       muted
       autoplay
       loop
       src= "~/assets/movie/top.mp4"
    >
    </video>
      <div class="title mt-2 d-flex justify-center">
        <div class="main">
<!--          <div class="mb-2">年収500万以上の正社員・公務員の方限定</div>-->
          <img src="~/assets/img/main.png" class="mb-2">
          <div>第二の収入源を作るお金の勉強会</div>
        </div>
      </div>
    </div>



</template>

<script>
export default {
  name: "top",
  data(){
    return{
      main_img:require("@/assets/img/main.png")
    }
  },
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
