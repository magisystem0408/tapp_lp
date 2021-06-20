<template>
        <v-row class="mx-1 mt-3">
          <v-col
            cols="12"
            md="6"
            v-for="benefit in benefits"
            :key="benefits.sub"
          >
            <v-card
              data-aos ="fade-up"
              elevation="4"
              outlined
              class ="py2 pr-1"
            >
              <v-list-item
                two-line
              >
                <v-list-item-avatar>
                  <v-img
                    v-bind:src="image_src"
                    max-height="150"
                    max-width="150"
                    contain
                  >
                  </v-img>
                </v-list-item-avatar>

                <v-list-item-text
                  class="pl-3"
                >
                  <div class="sub">
                    {{benefit.sub}}
                  </div>
                  <div class="main">
                    {{benefit.main}}
                  </div>

                </v-list-item-text>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
</template>

<script>
export default {
  name: "Benefits",
  data(){
    return{
      image_src:require("@/assets/img/hit.png"),
      benefits:[
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

<style scoped lang="scss">
.sub{
  font-size: 15px;
}

.main{
  font-size: 20px;
}

</style>
