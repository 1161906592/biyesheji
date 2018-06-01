<template>
  <div id="app">
    <!-- 缓存组件 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0
  }
  body{
    -webkit-text-size-adjust: none;  /* 禁止字体自动调整 */
    -webkit-tap-highlight-color: transparent;
  }
  input,select,textarea {
    font-size:100%
  }
  input,textarea{
    -webkit-appearance:none;
  }

  textarea {
    resize: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
  }

  img {
    border: 0;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
