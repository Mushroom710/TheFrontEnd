<template>
  <div class="bigTitle" :style="{color}">
    <h1>{{title}}</h1>
    <h2>{{English}}</h2>
  </div>
</template>

<script>
export default {
  props:['title','English','color']
};
</script>

<style  lang='less'>
.bigTitle {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #6a6969;
  z-index: 100;
  h1,
  h2 {
    text-align: center;
    margin: 0;
    font-weight: normal;
  }
  h2 {
    font-weight: 100;
  }
}
</style>