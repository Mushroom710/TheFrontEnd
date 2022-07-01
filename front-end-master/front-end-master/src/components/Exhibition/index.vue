<template>
  <div
    class="container"
    :style="{ backgroundImage: 'url(http://' + newImage + ')' }"
  >
    <el-carousel
      :interval="5000"
      type="card"
      height="450px"
      @change="changeImg"
      :autoplay="false"
      arrow="never"
      ref="carouselRef"
    >
      <el-carousel-item
        v-for="(item, index) in list"
        :key="index"
        :class="indexActive == index ? 'active' : ''"
      >
        <h1>{{ item.name }}</h1>
        <h4>{{ item.appellation }}</h4>
        <h3>毕业于{{ item.yearOfGraduation }}年</h3>
        <h3>在工作室负责{{ item.learningDirection }}</h3>
        <h3>
          现在{{ item.workCity }}{{ item.workUnit }}{{ item.workingDirection }}
        </h3>
        <h3>在新叶的收获:</h3>
        <p>
          {{ item.harvest }}
        </p>
        <h3>寄语:</h3>
        <p>
          {{ item.futureExpectations }}
        </p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Exhibition",
  data() {
    return {
      list: [],
      indexActive: 0,
      newImage: "",
      imageList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.$http.get(
        "http://106.14.82.240:8889/api/getdata"
      );
      data = JSON.parse(data);
      console.log(data.info);
      this.list = data.info;
      this.newImage = this.list[0].companyLogo;
    },
    changeImg(newIndex) {
      this.indexActive = newIndex;
      this.newImage = this.list[newIndex].companyLogo;
    },
    changeActive(index) {
      if (index == this.indexActive) {
        return "active";
      }
    },
    loadImage() {
      for (let i = 0; i < this.list.length; i++) {
        let temp = "http://" + this.list[i].companyLogo;
        // console.log(temp);
        // let img = new Image();
        fetch(temp, { mode: "no-cors" }).then(() => {});
        // img.src = temp
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loadImage();
    }, 2000);
    // this.$refs.carouselRef.next = () => {
    //   console.log(22222222);
    //   function next(){
    //     console.log(1111111111);
    //   }
    //   next.call(this.$ref.next)
    // }
    setInterval(() => {
      // this.$refs.carouselRef.next();
    }, 2000);
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 1s;
  background-color: #000;
}
.el-carousel {
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-carousel__item {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 20px;
  border-radius: 10px !important;
  box-sizing: border-box !important;
  h1,
  h4 {
    margin: 0;
    margin-right: 20px;
    font-weight: normal;
    display: inline-block;
  }
  h3 {
    font-size: 14px;
  }
  p {
    margin-left: 10px;
  }
}
.active {
  backdrop-filter: blur(10px) !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>