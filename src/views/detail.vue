<template>
  <div class="detail">
    <div class="person">
      <img class="img" :src="data.imgPath" alt="">
      <div class="info">
        <div class="name">{{data.name}}</div>
        <div class="about">{{data.post}}&nbsp;&nbsp;&nbsp;{{data.professional}}</div>
        <div class="department">所属科室：{{data.department}}</div>
        <div class="call" @click="toForm">预约咨询</div>
      </div>
    </div>
    <div class="section">
      <div class="title">个人简介</div>
      <div class="introduction">{{data.introduction}}</div>
    </div>
    <div class="section">
      <div class="title">专业擅长</div>
      <div class="introduction">{{data.major}}</div>
    </div>
    <div class="section">
      <div class="title">学术任职</div>
      <div class="introduction">{{data.job}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
      data: {
        introduction: '',
        job: '',
        major: '',
        name: '',
        post: '',
        professional: '',
        department: '',
        imgPath: ''
      }
    }
  },
  methods: {
    toForm () {
      this.$router.push({
        name: 'form'
      })
    }
  },
  created () {
    axios
      .get('/bysj/detail', {
        params: {
          id: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res)
        this.data = res.data.data
      })
  },
  deactivated () {
    /* 手动 */
    this.$destroy()
  }
}
</script>

<style lang="scss">
  @import "../assets/px2rem";
  .detail{
    background: #efefef;
    .title{
      color: #1b61ff;
      font-size: px2rem(28);
      padding-bottom: px2rem(20);
    }
    .img{
      width: px2rem(230);
      height: px2rem(230);
    }
    .person{
      display: flex;
      background: #ffffff;
      font-size: px2rem(24);
      div{
        height: 1.5em;
      }
      .info{
        padding: px2rem(10) 0 0 px2rem(20);
        div{
          margin-bottom: px2rem(10);
        }
      }
      .name{
        font-size: px2rem(32);
      }
      .call{
        display: inline-block;
        padding: px2rem(8) px2rem(16);
        border-radius: px2rem(8);
        background: #432eff;
        color: #fff;
      }
    }
    .section{
      margin-top: px2rem(12);
      background: #fff;
      padding: px2rem(20) px2rem(10);
    }
    .introduction{
      text-indent: 2em;
      font-size: px2rem(28);
      line-height: px2rem(48);
      min-height: px2rem(80);
    }
  }
</style>
