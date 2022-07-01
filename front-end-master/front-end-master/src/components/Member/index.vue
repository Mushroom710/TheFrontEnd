<template>
  <div>
    <div class="head">
      <h1>现任成员</h1>
      <h2>Member</h2>
    </div>
    <div class="mainfor">
      <div class="ddd">
        <div
          id="infor"
          v-for="(item, index) in list"
          :key="index"
          @click="openDialog(index)"
        >
          <!-- 头像 -->
          <img :src="'http://'+item.headpic" alt="">
          <h1>
            {{ item.name }} <span>{{ item.learningDirection }}</span>
          </h1>
          <p>
            Major: <span>{{ item.schoolOfProfessional }}</span>
          </p>
          <p>
            Hobby: <span>{{ item.hobby }}</span>
          </p>
          <p>
            Feeling: 
            
          </p>
          <i>{{ item.feeling }}</i>
       
        </div>
      </div>
    </div>
    <div class="box" v-if="dialogVisible">
      <el-dialog  :visible.sync="dialogVisible" width="50%" :modal="false" center>
        <h3>
         对新叶的期望:
          </h3>
          <i>{{ list[index].futureHope }}</i>
          <h3>
            个人小目标: 
           </h3>
           <i>{{ list[index].goal }}</i>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      list: [],
      dialogVisible: false,
      index:0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.$http.get(
        "http://106.14.82.240:8889/api/getOurData"
      );
      data = JSON.parse(data);
      console.log(data.info);
      this.list = data.info;
    },
    openDialog(index) {
      this.dialogVisible = true;
      this.index = index
    },
  },
};
</script>


<style lang="less" scoped>
* {
  text-align: left;
}
i{
  margin-left: 2em;
  font-size: 16px;
}
.mainfor {
  width: 100%;
  background: url(./images/material.jpg);
  overflow: hidden;
  padding: 30px 0;
}
.ddd {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#infor {
  width: 30%;
  height: 250px;
  background-color: rgb(4, 93, 134);
  color: white;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  padding: 0 15px;
  box-shadow: 4px 4px 10px rgb(0, 0, 0);
  box-sizing: border-box;
}
.head {
  width: 100%;
  height: 125px;
  background-color: #11dcfb;
  background-image: linear-gradient(
    to right,
    #637d8bc2,
    #f46c6ce3,
    #f46c6ce5,
    #70e2d383
  );
  text-align: center;
  h2 {
    text-align: center;
    font-weight: normal;
    margin: 0;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.726);
  }
}
.head h1 {
  font-size: 60px;
  text-align: center;
  font-weight: normal;
  margin: 0;
  //不支持渐变时用
  color: rgba(255, 255, 255, 0.726);
  //字体颜色渐变
  // background-image:-webkit-linear-gradient(bottom,rgb(255, 255, 255),#205d87,rgb(255, 255, 255));
  // -webkit-background-clip:text;
  // -webkit-text-fill-color:transparent;
}
#infor:hover {
  box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.678);
  cursor: pointer;
}
img {
  width: 20%;
  float: right;
  margin: 15px 0;
  border-top-right-radius: 10px;
}
span {
  font-size: 14px;
  color: rgb(238, 236, 236);
}
#infor p {
  line-height: 16px;
  font-size: 16px;
  margin:  10px 4px;
  color: rgb(180, 180, 180);
}
.box {
  width: 100%;
  height: 100%;
  position: absolute ;
  top: 50% ;
  left: 50% ;
  transform: translate(-50%, -50%) ;
  z-index: 1000;
  background: rgba(0, 0, 0, .5);
}
</style>