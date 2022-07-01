<template>
  <div class="container">
    <div :class="colorSelect()" class="title1">
      {{ title }}
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @mouseenter="showOver(index)" @mouseleave="showOut(index)">
        <img :src="require(`./images/${item.img}.png`)" alt="" />
        <p :style="{ color }">{{ item.text }}</p>
        <transition enter-active-class=" animate__animated animate__fadeIn" leave-active-class=" animate__animated animate__fadeOut">
          <div class="mock"  v-show='isShow(index) ' >
            <span :style="{ color}">{{ item.explan }}</span>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:-1,
    };
  },
  props: ["list", "title", "color"],
  methods: {
    colorSelect() {
      if (!this.color) {
        return "";
      }
      return this.color == "#ea5461" ? "red" : "orange";
    },
    showOver(index){
      console.log(index);
      this.show = index
    },
    showOut(){
      this.show = -1
    },
    isShow(index){
      return index == this.show
    }
  },
};
</script>

<style scoped lang='less' >
.container {
  margin: 0 20%;
  height: 350px;
  // background: aqua;
  text-align: center;
  .title1 {
    font-size: 32px;
    color: #6a6969;
    &::after {
      content: "";
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 30px;
      display: block;
      width: 50%;
      height: 2px;
      background-color: var(--color, #00a0e9);
    }
  }
  ul {
    display: flex;
    width: 100%;
    padding: 0;

    li {
      flex: 1;
      list-style: none;
      margin: 40px 40px;
      transition: all 1s;

      p {
        font-size: 24px;
        color: #00a0e9;
      }
      img {
        width: 110px;
        height: 110px;
      }
      .mock {
        width: 100%;
        height: 100%;
        position: relative;
        top: -100%;
        backdrop-filter: blur(5px);
        left: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 100;
        text-align: center;
        box-sizing: border-box;
        span {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          color: #00a0e9;
        }
      }
    
    }
  }
}
.red::after {
  content: "";
  background-color: #ea5461 !important;
}
.orange::after {
  content: "";
  background-color: #f29419 !important;
}
</style>