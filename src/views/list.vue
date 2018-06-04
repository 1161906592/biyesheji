<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index" class="item" @click="toDetail(item)">
      <div class="img">
        <img :src="item.imgPath"/>
        <div>{{item.department}}</div>
      </div>
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
        <div class="item-nav" @click.stop="toForm">预约挂号</div>
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
  methods: {
    toDetail (item) {
      this.$router.push({
        name: 'detail',
        query: {
          id: item.id
        }
      })
    },
    toForm () {
      this.$router.push({
        name: 'form'
      })
    }
  },
  created () {
    axios
      .get('/bysj/data')
      .then(res => {
        console.log(res)
        this.data = res.data.data
      })
      .catch(() => {
      })
  }
}
</script>

<style lang="scss">
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
      position: relative;
      flex: none;
      width: px2rem(230);
      height: px2rem(230);
      img{
        width: px2rem(230);
        height: px2rem(230);
      }
      div{
        position: absolute;
        width: 100%;
        bottom: 0;
        line-height: px2rem(48);
        background: rgba(blue, 0.3);
        color: #fff;
        font-size: px2rem(28);
        text-indent: px2rem(20);
      }
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
