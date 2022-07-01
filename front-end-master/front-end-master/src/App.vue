 <template>
  <div>
    <full-page :options="options" ref="fullpage">
      <!-- 第一屏 -->
      <div class="section">
        <Welcome :show="show" />
      </div>
      <!-- 2 -->
      <div class="section">
        <Title title="关于我们" English="About us" />
        <div class="slide">
          <About :list="aboutList1" :title='titleList[0]' />
        </div>
        <div class="slide">
          <About :list="aboutList2" :title='titleList[1]' color='#ea5461'/>
        </div>
        <div class="slide">
          <About :list="aboutList3" :title='titleList[2]' color='#f29419'/>
        </div>
      </div>
      <!-- Exhibition -->
      <div class="section">
        <Title title="历届成员" English="Former member" color='#fff' />

        <Exhibition />
      </div>

      <!-- 3 -->
      <div class="section">
       <Member/>
      </div>
      <div class="section">
        <JoinUs />
      </div>
    </full-page>
  </div>
</template>

<script>
import Welcome from "./components/Welcome";
import Exhibition from "./components/Exhibition";
import About from "./components/About";
import Title from "./components/Title";
import JoinUs from "./components/joinUs";
import Member from './components/Member'
export default {
  data() {
    return {
      show: -1,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        // navigation: true,

        verticalCentered: true, //内容居中
        continuousVertical :true,
        // loopBottom: true, //在最后一屏往下滚动回到第一屏
        // afterLoad:this.afterLoad,
        afterLoad: (a, rn) => {
          this.show = rn.index;
        },

        //为每个section设置背景色
        sectionsColor: ["#FFF", "#fff", "#fff", "#fec401"],
      },
      aboutList1: [
        { img: "users", text: "十年工作室", explan: "创办自2010年,至今已12年" },
        {
          img: "lightning",text: "自立自强",explan: "活动经费全靠自己写项目",
        },
        {
          img: "earth",text: "交流合作",explan: "和同学们一起写项目,和学长们交流行业前景",
        },
      ],
      aboutList2: [
        { img: "discover", text: "提供完整的指导", explan: "按照实际工作中所需,指导零基础学习" },
        {
          img: "trash",text: "定期聚会交流分享",explan: "每周星期天聚在一起对本周所学做总结,交流",
        },
        {
          img: "file",text: "通过项目锻炼成员",explan: "不同阶段提供不同项目,以实战锻炼能力",
        },
      ],
      aboutList3: [
        { img: "computer", text: "网站开发", explan: "电脑端网站开发" },
        {
          img: "pad",text: "移动端开发",explan: "平板,手机等移动端网页开发",
        },
        {
          img: "phone",text: "小程序",explan: "微信小程序开发",
        },
      ],
      titleList:[
        '我们致力于在文理校园内打造一个优秀的互联网人才成长平台',
        '我们致力于探索不同的人才培养方式',
        '我们致力于提供优秀的互联网产品开发服务'
      ],
     

    };
  },

  components: { Welcome, Exhibition, About, Title, JoinUs ,Member},
  methods: {},
};
</script>

<style>
.fp-prev {
  background: url(./assets/left_control.png);
  width: 100px !important;
  height: 100px !important;
  border-width: 0 !important;
  margin-left:50px;
}
.fp-next {
  background: url(./assets/right_control.png);
  width: 100px !important;
  height: 100px !important;
  border-width: 0 !important;
  margin-right:50px;

}
</style>
