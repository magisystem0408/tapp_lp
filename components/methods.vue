<template>
  <div class="mt-13">
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <h2
          data-aos="fade-right">
          <span>第二の収入源</span>を作る。<br>
          <span>ほったらかし投資</span>
        </h2>
      </v-col>

      <v-col cols="auto" class="resize pt-9">
        01
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row class="cards mt-5">
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          data-aos="fade-up"
          elevation="4"
          outlined
          class="card py-2 pr-2"
        >
          <v-list-item
            two-line
          >
            <v-list-item-avatar>
              <v-img
                src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/check_ddlr9y.webp"
                max-height="90"
                max-width="90"
                contain
              >
              </v-img>
            </v-list-item-avatar>

            <v-list-item-text class="card pl-3">
              自己資産不足でも<span>少額から手軽に資産形成できる方法とは？</span>
            </v-list-item-text>

          </v-list-item>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card
          data-aos="fade-up"
          elevation="4"
          outlined
          class="card py-2 pr-2"
        >
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-img
                src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/check_ddlr9y.webp"
                max-height="90"
                max-width="90"
                contain
              >
              </v-img>
            </v-list-item-avatar>

            <v-list-item-text class="pl-3">
              "リスクを抑えた資産運用"<span>失敗しない為の4つのルール</span>とは？
            </v-list-item-text>

          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          data-aos="fade-up"
          elevation="4"
          outlined
          class="card py-2 pr-2"
        >

          <v-list-item two-line>
            <v-list-item-avatar>
              <v-img
                  src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/check_ddlr9y.webp"
                max-height="90"
                max-width="90"
                contain
              >
              </v-img>
            </v-list-item-avatar>


            <v-list-item-text class="pl-3">
              年収500万円以上の正社員・公務員が<span>今すぐやるべき節税対策</span>とは？
            </v-list-item-text>


          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          data-aos="fade-up"
          elevation="4"
          outlined
          class="card py-2 pr-2"
        >

          <v-list-item two-line>
            <v-list-item-avatar>
              <v-img
                src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/check_ddlr9y.webp"
                max-height="90"
                max-width="90"
                contain
              >
              </v-img>
            </v-list-item-avatar>

            <v-list-item-text
              class="pl-3"
              >
                iDeCo、積立NISA、株、投資信託、
                不動産、<span>自分に最適なもの</span>はどれ？
            </v-list-item-text>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          data-aos="fade-up"
          elevation="4"
          outlined
          class="card py-2 pr-2"
        >
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-img
                src="https://res.cloudinary.com/dnmwe1whf/image/upload/v1624186532/tapp/img/check_ddlr9y.webp"
                max-height="90"
                max-width="90"
                contain
              >
              </v-img>
            </v-list-item-avatar>


            <v-list-item-text class="pl-3">
              時間と労力をかけない！<span>忙しい人の為の”ほったらかし投資”</span>とは？
            </v-list-item-text>
          </v-list-item>



        </v-card>
      </v-col>

    </v-row>


  </div>

</template>

<script>
export default {
  name: "methods",
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

.cards {
  .card {
    font-size: 20px;

    span {
      color: $Cmain
    }
  }

}
</style>
