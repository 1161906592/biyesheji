<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index" class="item">
      <img class="img" src="http://119.23.59.102/images/默认头像.jpg"/>
      <div class="info">
        <div class="title">
          <div class="name">{{item.name}}</div>
          <div>{{item.post}}</div>
          <div>{{item.professional}}</div>
        </div>
        <div class="introduction">
          {{item.introduction}}
        </div>
        <div class="item-nav">详细介绍</div>
        <div class="item-nav">预约挂号</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      data: null
    }
  },
  created () {
    axios
      .get('/api/bysj/data')
      .then(res => {
        console.log(res)
        this.data = res.data.data
      })
      .catch(() => {
      })
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/px2rem";
  .list{
    background: #efefef;
    .item{
      display: flex;
      margin-top: px2rem(10);
      background: #fff;
    }
    .item:first-child{
      margin-top: 0;
    }
    .img{
      flex: none;
      width: px2rem(230);
      height: px2rem(230);
    }
    .info{
      height: px2rem(230);
      padding: px2rem(8) px2rem(8) px2rem(8) px2rem(16);
      font-size: px2rem(24);
    }
    .title{
      margin-bottom: px2rem(8);
      div{
        flex: none;
        display: inline-flex;
        margin-right: px2rem(10);
        justify-items: flex-end;
      }
    }
    .name{
      font-size: px2rem(32);
    }
    .introduction{
      margin-bottom: px2rem(8);
      color: #666;
      height: px2rem(120);
      line-height: px2rem(40);
      text-align: justify;
    }
    .item-nav{
      display: inline-flex;
      font-size: px2rem(28);
      color: blue;
      margin-right: px2rem(40);
    }
  }
</style>
