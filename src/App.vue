<template>
  <div id="app">
    <!-- <cube-slide :data="items" /> -->
    <cube-tab-bar
      class="tabbar"
      v-model="selectedLabel"
      :data="tabs"
      showSlider
      useTransition
      @click="clickHandler"
    ></cube-tab-bar>
    <News :selectedLabel="selectedLabel" :items="news" />
  </div>
</template>

<script>
import News from "./components/News.vue";

export default {
  name: "app",
  components: {
    News
  },
  methods: {clickHandler(laber){

  }},
  data() {
    return {
      scrollY: 0,
      checkTop: false,
      selectedLabel: "new",
      tabs: [
        {
          label: "最新",
          value: "new"
        },
        {
          label: "教务处",
          value: "jwc"
        },
        {
          label: "新闻中心",
          value: "xwzx"
        },
        {
          label: "团委",
          value: "tw"
        }
      ],
      items: [
        {
          image:
            "//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png"
        }
      ],
      news: [
        
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
.tabbar {
  padding: 5px 15px;
  font-size: 15px;
  border-bottom: 1px solid #eaecef;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
}
</style>
