<template>
  <div>
    <cube-tab-bar
      class="tabbar"
      v-model="selectedLabel"
      :data="tabs"
      showSlider
      @click="clickHandler"
    ></cube-tab-bar>
    <transition name="fade">
      <cube-loading class="load" v-if="items.length==0"></cube-loading>
      <div class="scroll-list-wrap" v-else>
        <ul class="news-wrapper">
          <li class="update" v-if="update">更新时间: {{update}}</li>
          <li v-for="(news,key) in items" :key="key" class="new-item">
            <div class="new-content" @click="golink(news.link)">
              <p class="title">{{news.title}}</p>
              <span class="more">
                <span
                  v-if="selectedLabel==='new'"
                >{{ news.type === 'tw' ? '团委':news.type ==='xwzx'?'新闻中心':news.type ==='jwc'?'教务处':'' }}</span>
                <span
                  v-else-if="selectedLabel==='xwzx'"
                >{{ news.subtype === 'xwkx' ?'新闻快讯':news.subtype === 'ggtz'?'公告通知':news.subtype === 'xsxx'?'学术信息':news.subtype === 'mtxw'?'媒体新闻':''}}</span>
                <span
                  v-else-if="selectedLabel==='tw'"
                >{{ news.subtype === 'qnkx' ?'青年快讯':news.subtype === 'tntz'?'团内通知':news.subtype === 'llsj1'?'洛理视角':news.subtype === 'qnzs'?'青年之声':news.subtype === 'xszz'?'学生组织':news.subtype === 'llxx'?'理论学习':'' }}</span>
                {{news.date}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "new"
    }
  },
  data() {
    return {
      update: "",
      selectedLabel: this.$props.type,
      showload: false,
      items: [],
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
      ]
    };
  },
  created: function() {
    this.items = [];
    var that = this;
    this.$axios
      .get("http://localhost:3000/getnews", {
        params: {
          type: that.$props.type
        }
      })
      .then(function(response) {
        var data = response.data;
        that.items = data.lists;
        that.update = data.update;
      })
      .catch(function(error) {
        alert("加载失败!\n" + error);
      });
  },
  methods: {
    golink: function(link) {
      window.open(link);
    },

    clickHandler(laber) {
      if (laber !== this.$props.type) {
        this.items = [];
        this.$router.push({ path: `/news/${laber}` });
        var that = this;
        this.$axios
          .get("http://localhost:3000/getnews", {
            params: {
              type: laber
            }
          })
          .then(function(response) {
            var data = response.data;
            that.items = data.lists;
            that.update = data.update;
          })
          .catch(function(error) {
            alert("加载失败!\n" + error);
          });
      }
    }
  }
};
</script>

<style>
.tabbar {
  padding: 5px 15px;
  font-size: 15px;
  font-weight: bold;
  /* border-bottom: 1px solid #eaecef; */
  border-bottom: 0.8px solid #ebebeb;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
}
.load {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.scroll-list-wrap {
  height: 100%;
}

.update {
  font-size: 12px;
  color: grey;
  padding: 5px 15px;
  border-bottom: 0.1px solid #ebebeb;
  background-color: #ebebeb;
}

.new-item {
  padding: 10px 15px;
  font-size: 15px;
  border-bottom: 0.2px solid #ebebeb;
}

.title {
  line-height: 24px;
  font-weight: bold;
}

.more {
  color: gray;
  font-size: 13px;
}
</style>