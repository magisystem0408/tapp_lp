<script src="../plugins/vue-scrollto.js"></script>
<template>
  <div id="form">
    今日の日付：{{now_date}}
    <br>
    今の時間：{{now_hour}}
    <br>
    今の何分：{{now_minute}}
    <br>
    {{now_youbi}}

    <br>
    <br>



    今日の日付：{{now_date}}日

    <div v-for="table in tables">
      <div v-if="now_hour>=table.time">
      </div>
    </div>




<!--    <div v-for="i in 6">-->
<!--      {{i+now_date}}日-->

<!--      <div v-for="table in tables" key="tables.time">-->
<!--        {{table.data}}-->

<!--        <v-btn v-on:click="test(table.data)"-->

<!--        >予約する</v-btn>-->
<!--        <br>-->
<!--      </div>-->

<!--    </div>-->

<!--    ラストの日：{{now_date+7}}日-->

<!--    {{test}}-->

<!--    {{time}}-->
  </div>
</template>

<script>

// var date =moment()

export default {
  name: "Form",
  data() {
    return {
      now_date :"",
      now_hour:"",
      now_minute:"",
      now_youbi:"",

      test:"",

      tables:[
        {time:10,data:'10:00~11:30'},
        {time:10.5,data:'10:30~12:00'},
        {time:13.5,data:'14:00~15:30'},
        {time:14,data:'14:00~15:30'},
        {time:16.5,data:'16:30~18:00'},
        {time:17,data:'17:00~18:30'},
        {time:20,data:'20:00~21:30'},
        {time:20.5,data:'20:30~20:00'},
      ],
    }
  },
  // methods:{
  //   test:function (test){
  //     this.test = test
  //   }
  //
  // },
  mounted(){
    this.now_date =this.$moment().date();
    this.now_hour =this.$moment().hour();
    this.now_minute=this.$moment().minute();
    this.now_youbi =this.$moment().format('ddd')
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>
