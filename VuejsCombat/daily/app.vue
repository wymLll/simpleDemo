<template>
  <div id="app">
    <div class="daily-menu">
      <div class="daily-menu-item" :class="{on: type === 'recommend'}" @click="handleToRecommend">每日推荐</div>
      <div
        class="daily-menu-item"
        :class="{on: type === 'daily'}"
        @click="showThemes = !showThemes"
      >主题日报</div>
      <ul v-show="showThemes">
        <li v-for="(item, index) in themes" :key="index">
          <a
            :class="{on: item.id === themeId && type === 'daily'}"
            @click="handleToTheme(item.id)"
          >{{item.name}}</a>
        </li>
      </ul>
    </div>

    <div class="daily-list">
      <Item></Item>
    </div>

    <div class="daily-artical">
      <div class="daily-article"></div>
      <div class="daily-comments"></div>
    </div>
  </div>
</template>
<script>
import $ from "./libs/util";

export default {
  data() {
    return {
      themes: [],
      showThemes: false,
      type: "recommend",
      list: [],
      themeId: 0,
      recommendList: [],
      dailyTime: $.getTodayTime,
      isLoading: false,
    };
  },
  methods: {
    getThemes() {
      $.ajax.get("themes").then(res => {
        this.themes = res.others;
        console.log(this.themes)
      });
    },
    handleToTheme(id){
        this.type = 'daily';
        this.themeId = id;
        this.list = [];
        $.ajax.get('theme/'+id).then(res=>{
            this.list = res.stories.filter(item=>item.type!==1)
        })
    },
    handleToRecommend(){
        this.type = 'recommend';
        this.recommendList = [];
        this.dailyTime = $.getTodayTime();
        this.getRecommendList();
    },
    getRecommendList(){
        this.isLoading = true;
        const prevDay = $.prevDay(this.dailyTime + 86400000);
        $.ajax.get('news/before/'+prevDay).then(res=>{
            this.recommendList.push(res);
            this.isLoading = false;
        })
    }
  },
  mounted() {
    this.getThemes();
  }
};
</script>
