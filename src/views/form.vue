<template>
  <div class="form">
    <div class="label">您的姓名</div>
    <div class="input"><input type="text" placeholder="请输入您的姓名"></div>
    <div class="label">联系方式</div>
    <div class="input"><input type="text" placeholder="请输入电话或手机"></div>
    <div class="label">预约日期</div>
    <div class="input"><input type="text" placeholder="请输入预约日期"></div>
    <div class="label">您的需求</div>
    <div class="input"><input type="text" placeholder="请简单描述你的病情"></div>
    <div class="btn">
      <div>确认提交</div>
      <a href="tel:023-123456"><div>在线咨询</div></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form'
}
</script>

<style lang="scss">
  @import "../assets/px2rem";
  .form{
    height: 100vh;
    background: #efefef;
    font-size: px2rem(28);
    .label{
      padding-left: px2rem(20);
      height: px2rem(60);
      line-height: px2rem(60);
    }
    .input{
      background: #fff;
      height: px2rem(60);
      line-height: px2rem(60);
      input{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        box-sizing: border-box;
        padding-left: px2rem(20);
      }
    }
    .btn{
      display: flex;
      padding: 0 px2rem(170);
      margin-top: px2rem(30);
      justify-content: space-between;
      div{
        width: px2rem(180);
        height: px2rem(50);
        line-height: px2rem(50);
        text-align: center;
        background: #ff9242;
        border-radius: px2rem(8);
        font-size: px2rem(24);
        color: #ffffff;
      }
      a div{
        background: #432EFF;
      }
    }
  }
</style>
