<template>
  <div class="home">
    <div class="title">
      <transition-group
        enter-active-class="animate__animated animate__fadeInDown"
      >
        <h1 key="1" v-if="index == 0">新叶网络工作室</h1>
        <h2 key="2" v-if="index == 0">Xnnye Studio</h2>
      </transition-group>
    </div>
    <div class="goDown">
       <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOut">
        <span v-if="index == 0 && flag"></span>
      </transition>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Welcome",
  data() {
    return {
      index: -1,
      flag :false

    };
  },
  props: ["show"],

  watch: {
    show(newVal, old) {
         this.index = newVal;
    },
  },
   mounted(){
    setInterval(() => {
      this.flag = !this.flag
    }, 1000);
  }
};
</script>

<style scoped lang='less'>
.home {
  background: url(../assets/bg1.jpg) no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}
.title {
  position: relative;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  color: #fff;
  h1,
  h2 {
    font-weight: normal;
    text-align: center;
    margin: 0;
  }
}
.goDown {
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 100;
  width: 50px;
  height: 53px;
  margin-left: -25px;
  span {
    display: block;
    width: 50px;
    height: 53px;
    background-image: url(../assets/godown.png);
  }
}
</style>
