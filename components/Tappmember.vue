<template>
  <div class="bg pt-13">
    <v-container>
      <div class="consulemenber mb-4">
        <h2 class="mb-7">
          <span>セミナー中、</span><br>
          <span>コンサルタント</span>による <br>
          <span>質疑応答・WEB相談</span>が可能
        </h2>
        <p class="subtitle">
          投資・資産運用の始め方、時期、投資商品の見直し、税金対策など、ウェビナーにご参加頂いている方はそのまま１対１でWEB無料相談をご利用頂けます。経験と実績に基づき、私たちがお客様に最適な資産運用プランを無料でご提案致します。
        </p>
      </div>
      <swiper
        :options="swiperOption"
      >
        <swiper-slide
          v-for="(text,i) in texts"
          :key="i"
         alt="">
          <div class="slider-content">
                  <v-img v-bind:src="text.img"
                         max-height="300"
                         max-width="500"
                         ></v-img>
                  <div class="text_content pt-5 pb-1 px-2">
                    <h3 class="name mb-2"> {{ text.name }}</h3>
                    <v-divider></v-divider>
                    <p class="content mt-2">{{ text.content }}</p>
                  </div>
          </div>

        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>


    </v-container>
  </div>

</template>

<script>
export default {
  name: "Tappmember",
  data() {
    // model:0
    return {
      dialog: false,

      texts: [
        {
          name: "高橋",
          content: "一生涯のパートナーとして、お客様のお気持ちに寄り添ったコンサ ルティングを心がけています。漠然とした将来への不安を解消し今の暮らしを豊かにするお手伝いをいたします。",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185143/tapp/img/tapp_member/tm_takahash.webp"
        },
        {
          name: "安野",
          content: "長期的な資産運用についての詳細や違いを踏まえ、個人個人にあったプランを作成することが得意です。お客様のライフプランを少しでも豊かになるよう尽力致します!",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185143/tapp/img/tapp_member/tm_yasuno.webp"

        },
        {
          name: "磯野",
          content: "お客様の心に寄り添うことを1番に、今の生活を楽しみながら出来る資産形成プランニングを致します。まずは一緒に将来について考えてみませんか？お気軽にご相談ください。",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185143/tapp/img/tapp_member/tm_isono.webp"
        },
        {
          name: "石井",
          content: "数多くの相談実績を生かし、知識に裏付けされたライフプランニングをさせて頂きます。一人でも多くの方 に「本当にお役立て出来る資産運用」を伝えていきたいです。",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185143/tapp/img/tapp_member/tm_ishii.webp"
        },
        {
          name: "渡邊",
          content: "お客様の人生がより豊なものになるようコンサルティング致します。資産形成については勿論のこと、ライフプランのご相談もお任せ下さい。",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185142/tapp/img/tapp_member/tm_watanabe.webp"
        },
        {
          name: "山口",
          content: "家計相談から投資初心者でもできる方法まで、何でもご相談ください。お客様に将来笑顔で過ごしていただけるよう、ベストな提案を第一に励んでおります。",
          img: "https://res.cloudinary.com/dnmwe1whf/image/upload/v1624185143/tapp/img/tapp_member/tm_yamaguti.webp"
        },
      ],
      swiperOption: {
        autoplay: {
          delay: 2600,

          // マウスで操作したあとも継続して行えるようにする
          disableOnInteraction: false,
          effect:'coverflow',
          // スライドをセンターにする
          centerdSlides:true
        },
        speed:1500,
        slidesPerView: 1,
        breakpoints:{
        768: {
          slidesPerView: 3,
        },
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    }

  },
}
</script>

<style scoped lang="scss">
span {
  color: $Cmain;
}

.bg {
  background: $C_gray;

  .consulemenber {
    .subtitle {
      font-size: 14px;
      line-height: 25px;
    }
  }
}

.slider-content{
  background: white;
  max-width:500px;
  margin: 10px;
  box-shadow: 2px 2px 6px 0 rgba(0,0,0,.4);
  border-radius:6px;
  .text_content{
    .name{
      font-size: 16px;
    }
    .content{
      font-size: 12px;
    }
  }
}

</style>
