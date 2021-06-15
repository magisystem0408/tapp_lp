<template>
  <div class="mt-13">
    <v-row>
      <v-col
        cols="auto"
        class="mr-auto"
      >
        <h2
          data-aos="fade-right">
          <span>お金の4大問題</span><br>
          <span>今のうちに対策が必須！</span>
        </h2>
      </v-col>

      <v-col cols="auto" class="resize pt-9">
        03
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
          class="card mx-auto nisenman"
        >

          <v-list-item class="pt-6 mb-12 px-auto">
            <v-list-item-content>
              <v-list-item-title class="list_title C_sub mb-6">
                2,000万円問題
              </v-list-item-title>
              <v-list-item-text class="list_text">
                日本の出生数が減少し続け、少子高齢化が着々と進むいま、<span class="C_sub">年金だけで今の生活水準を維持することは非常に困難です。</span>国や企業は老後の生活を守ってはくれません。
                <span>自らの資産形成が唯一の解決策となります。</span>
              </v-list-item-text>
            </v-list-item-content>
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
          class="card corona"
        >

          <v-list-item class="pt-6 mb-5 px-auto">
            <v-list-item-content>
              <v-list-item-title class="list_title C_sub mb-6">
                コロナ増税問題
              </v-list-item-title>
              <v-list-item-text class="list_text">
                <span class="C_sub">巨額のコロナ対策費はどこで賄うか、今後更なる増税が予期されます。</span>
                消費税増税により、1世帯あたりの税負担額が増加しています。更に年収500万以上の方であれば、２０％以上の所得税率になって、今後更に高所得者への厳しい税率改定も免れません。
                <span>投資×節税＝資産形成への近道です。</span>
              </v-list-item-text>
            </v-list-item-content>
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
          class="card infure"
        >

          <v-list-item class="pt-6 mb-12 px-auto">
            <v-list-item-content>
              <v-list-item-title class="list_title C_sub mb-6">
                インフレ問題
              </v-list-item-title>
              <v-list-item-text class="list_text">
                不安定な物価上昇の影響で、モノの<span class="C_sub">値段は今後も予測が困難です。</span>
                消費がコントロールできない今、<span>紙幣の価値に影響されない資産運用が効果的と言えます。</span>
              </v-list-item-text>
            </v-list-item-content>
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
          class="card employee"
        >

          <v-list-item class="pt-6 mb-5 px-auto">
            <v-list-item-content>
              <v-list-item-title class="list_title C_sub mb-6">
                雇用問題
              </v-list-item-title>
              <v-list-item-text class="list_text">
                AIによる雇用減少、新型コロナウィルス問題、雇用の流動化による退職金の減少など、
                <span class="C_sub">私たちを取り巻く雇用環境は目まぐるしく変化しています。</span>
                <span>給与だけでの貯蓄では、決して十分とは言えません。</span>
              </v-list-item-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>


    </v-row>
  </div>

</template>

<script>
export default {
  name: "Problem"
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
  background-size:contain ;
  .nisenman{
    background-image: url("~@/assets/img/problem/2000man.png");
  }

  .corona{
    background-image: url("~@/assets/img/problem/corona.png");
  }

  .infure{
    background-image: url("~@/assets/img/problem/infura.png");
  }

  .employee{
    background-image: url("~@/assets/img/problem/employee.png");
  }




  .card {
    font-size: 20px;

    span {
      color: $Cmain
    }

    .C_sub {
      color: $Csub;
    }
      .list_title{
      font-size: 24px;
    }
    .list_text{
      font-size: 14px;
      line-height: 25px;
      }

  }
}


</style>
