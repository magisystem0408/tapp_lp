<template>
  <div>
    {{text[0].main}}
  </div>
</template>

<script>
export default {
  name: "Benefits",
  data(){
    return{
      image_src:require("@/assets/img/hit.png"),
      text:[
        {sub:'今の年収のまま',main:'手取りを増やす方法とは？'},
        {sub:'お金に働かせる',main:'5,000万の差がつく投資法とは？'},
        {sub:'Afterコロナ対策',main:'お金の不安を解消しよう！'},
        {sub:'今の年収のまま',main:'手取りを増やす方法とは？'},
        {sub:'お金のプロに',main:'無料WEB相談ができる！'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
